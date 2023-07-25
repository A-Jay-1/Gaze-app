import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/navbar";
import LandingPage from "./Components/LandingPage Components/landingPage";
import Login from "./Components/SignUp&Login Components/login";
import SignUp from "./Components/SignUp&Login Components/SignUp";
import AccountsList from "./Components/accounts/accountsList";
import PhotograhyPage from "./Components/accounts/PhotographyPage";


export default function App() {
  return (
    <main>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup"element={<SignUp />}/>
         <Route path="/accountsList" element={<AccountsList />}/>
          <Route path="/accountsList/:accountId" element={<PhotograhyPage />}/>
    
        </Routes>
      </BrowserRouter>
    </main>
  );
}
