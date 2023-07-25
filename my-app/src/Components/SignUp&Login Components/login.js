import React, { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <>
            <form  onSubmit={handleSubmit}>
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
                            value={pass}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="•••••••••••"
                            id="password"
                            name="password"
                        />
                    </div>
                    <button id="loginButton" type="submit">Log In</button>
                    <button>New to Gaze? Register here!</button>
                </div>
            </form>
            
        </>
    );
}
