import "./index.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { LoginPage } from "./Pages/LoginPage";
import { ProfilePage } from "./Pages/ProfilePage";

import bgImage from "./assets/bgImage.svg";

export function App() {
  return (
    <div 
    style={{ backgroundImage: `url(${bgImage})`}} 
    className="w-full h-screen bg-cover">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
