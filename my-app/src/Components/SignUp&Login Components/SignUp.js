import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../axiosCustom";
import axios from "axios";

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [camera, setCamera] = useState("");
    const [niche, setNiche] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const createAccount = async (event) => {
        event.preventDefault();
        try {
            if (password !== confirmPassword) {
                setError("Password and confirm password do not match");
                return;
            }

            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const data = {
                uid: user.uid,
                name: firstName + " " + lastName,
                camera,
                niche,
            };
            await axios.post("http://localhost:3000/api/accountsList", data);
            navigate("/accountsList");
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <>
            {error}
            <h1>Create Account</h1>
            <form onSubmit={createAccount}>
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    id="firstname"
                    name="firstname"
                    required
                />
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    id="lastname"
                    name="lastname"
                    required
                />
                <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                    id="password"
                    name="password"
                    required
                />
                <input
                    value={confirmPassword}
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter your password"
                    id="confirm-password"
                    name="password"
                    required
                />
                <label for="camera">What camera do you use?</label>
                <select
                    id="camera"
                    name="camera"
                    value={camera}
                    onChange={(e) => setCamera(e.target.value)}
                    required
                >
                    <option disabled value="">
                        Select a camera
                    </option>
                    <option value="Canon EOS R6">Canon EOS R6</option>
                    <option value="Nikon Z7 II">Nikon Z7 II</option>
                    <option value="Sony A7R IV">Sony A7R IV</option>
                    <option value="Fujifilm X-T4">Fujifilm X-T4</option>
                    <option value="Olympus OM-D E-M1 Mark III">
                        Olympus OM-D E-M1 Mark III
                    </option>
                    <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
                    <option value="Samsung Galaxy S23 Ultra">
                        Samsung Galaxy S23 Ultra
                    </option>
                    <option value="Google Pixel 8 Pro">
                        Google Pixel 8 Pro
                    </option>
                    <option value="Huawei P40 Pro">Huawei P40 Pro</option>
                    <option value="OnePlus 11">OnePlus 11</option>
                    <option value="Panasonic Lumix S5">
                        Panasonic Lumix S5
                    </option>
                    <option value="Nikon D850">Nikon D850</option>
                    <option value="Canon EOS 5D Mark IV">
                        Canon EOS 5D Mark IV
                    </option>
                    <option value="Sony A9 II">Sony A9 II</option>
                    <option value="Leica Q2">Leica Q2</option>
                    <option value="Xiaomi Mi 11 Ultra">
                        Xiaomi Mi 11 Ultra
                    </option>
                    <option value="Oppo Find X3 Pro">Oppo Find X3 Pro</option>
                    <option value="LG V60 ThinQ">LG V60 ThinQ</option>
                    <option value="Motorola Edge Plus">
                        Motorola Edge Plus
                    </option>
                    <option value="Asus Zenfone 8 Flip">
                        Asus Zenfone 8 Flip
                    </option>
                    <option value="Pentax K-3 Mark III">
                        Pentax K-3 Mark III
                    </option>
                    <option value="Sigma fp L">Sigma fp L</option>
                    <option value="Ricoh GR III">Ricoh GR III</option>
                    <option value="DJI Pocket 2">DJI Pocket 2</option>
                    <option value="GoPro Hero 10 Black">
                        GoPro Hero 10 Black
                    </option>
                </select>
                <label for="niche">What's your niche?</label>
                <select
                    id="niche"
                    name="niche"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    required
                >
                    <option disabled value="">
                        Select a niche
                    </option>
                    <option value="Portrait">Portrait</option>
                    <option value="Landscape">Landscape</option>
                    <option value="Street">Street</option>
                    <option value="Wildlife">Wildlife</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Food">Food</option>
                    <option value="Sports">Sports</option>
                    <option value="Macro">Macro</option>
                    <option value="Abstract">Abstract</option>
                </select>
                <button type="submit">SignUp </button>
            </form>
            <Link to="/login">
                <button>Already have an account? Log in here!</button>
            </Link>
        </>
    );
}
