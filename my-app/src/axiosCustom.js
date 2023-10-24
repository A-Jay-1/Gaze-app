import axios from "axios";
import axiosRetry from "axios-retry";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDk0vwspbwHaOX2SXF-Y6dlFH4BYV8_2nM",
    authDomain: "gaze-web-auth.firebaseapp.com",
    projectId: "gaze-web-auth",
    storageBucket: "gaze-web-auth.appspot.com",
    messagingSenderId: "345534956538",
    appId: "1:345534956538:web:bf796857c4c8bf3542da43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const axiosPrivate = axios.create({
    headers: {
        Authorization: `Bearer ${
            auth.currentUser ? auth.currentUser.getIdToken() : ""
        }`,
    },
});

axiosPrivate.interceptors.request.use(
    async (config) => {
        if (auth.currentUser) {
            // Get the id token from the user
            const token = await auth.currentUser.getIdToken();
            // Set the authorization header with the token
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

axiosRetry(axiosPrivate, {
    retryCondition(error) {
        switch (error.response.status) {
            case 404:
            case 429:
            case 401:
                return true; // Retry request with response status code 404 or 429
            default:
                return false; // Do not retry the others
        }
    },
    retryDelay: (...arg) => axiosRetry.exponentialDelay(...arg, 1000),
});

export { app, auth, axiosPrivate };
