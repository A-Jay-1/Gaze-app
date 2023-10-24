import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../axiosCustom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/accountsList");
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <>
            {error}
            <h1>Log In</h1>
            <div className="loginForm">
                <div className="emailLogin">
                    <label htmlFor="email">Email</label>
                    <input
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="youremail@gmail.com"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="passwordLogin">
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="•••••••••••"
                        id="password"
                        name="password"
                    />
                </div>
                <button id="loginButton" type="submit" onClick={logIn}>
                    Log In
                </button>
                <Link to="/signup">Don't have an account? Create one here</Link>
            </div>
        </>
    );
}
