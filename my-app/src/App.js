import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/navbar";
import LandingPage from "./Components/LandingPage Components/landingPage";
import Login from "./Components/SignUp&Login Components/login";
import SignUp from "./Components/SignUp&Login Components/SignUp";
import AccountsList from "./Components/accounts/accountsList";
import PhotograhyPage from "./Components/accounts/PhotographyPage";
import { useState } from "react";
import AccountContext from "./Components/AccountContext";

export default function App() {
    const [accountDetails, setAccountDetails] = useState([]);
    const getAccountDetails = (accountDetails) => {
        setAccountDetails(accountDetails);
    };
    return (
        <main>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route element={<AccountContext />}>
                        <Route
                            path="/accountsList"
                            element={
                                <AccountsList getAccount={getAccountDetails} />
                            }
                        />
                        <Route
                            path="/accountsList/:accountId"
                            element={
                                <PhotograhyPage
                                    accountDetails={accountDetails}
                                />
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}
