import { useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    return (
        <>
            <form>
                <label htmlFor="fullname">Full Name</label>
                <input
                value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Please enter your full name"
                    id="fullname"
                />
                <label htmlFor="country">Country</label>
                <input
                value={country}
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Please enter your country of residence "
                    id=" country"
                />
                <label for ="dateOfBirth">Date Of Birth</label>
                <input type="date" />
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    value={pass}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="•••••••••••"
                    id="password"
                    name="password"
                />
                <button type="submit">SignUp </button>
            </form>
            <button>Already have an account? Log in here!</button>
        </>
    );
}
