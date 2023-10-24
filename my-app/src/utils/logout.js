import { getAuth, signOut } from "firebase/auth";
import { redirect } from "react-router-dom";

const logout = async () => {
    const auth = getAuth();
    try {
        await signOut(auth);
        console.log("Sign out successuful");
        window.location.href = "http://localhost:3000";
    } catch (error) {
        console.error("Logging out failed...please try again");
        alert("Logging out failed...please try again");
    }
};

export default logout;
