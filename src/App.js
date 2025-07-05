// File: src/App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Trains from "./pages/Trains";
import Buses from "./pages/Buses";
import Cars from "./pages/Cars";
import Holidays from "./pages/Holidays";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import './App.css';
import Support from "./pages/Support";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { ThemeProvider } from "./context/ThemeContext";
import AboutUs from "./pages/AboutUs";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SignInModal from "./components/SignInModal";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./pages/Profile";
 
function App() {
   const [showModal, setShowModal] = useState(true);
  return (
    <ThemeProvider>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <BrowserRouter>
<ScrollToTop /> 
      <div className="app-container">
        <Navbar />

        <main className="app-main">
            
              {showModal && <SignInModal onClose={() => setShowModal(false)} />} 
          <Routes>
       
            {/* Nested routing under Home */}
            
            <Route path="/" element={<Home />}>
   <Route index element={<Navigate to="flights" replace />} />
  <Route path="//flights" element={<Flights />} />
  <Route path="//hotels" element={<Hotels />} />
  <Route path="//trains" element={<Trains />} />
  <Route path="//buses" element={<Buses />} />
  <Route path="//cars" element={<Cars />} />
  <Route path="//holidays" element={<Holidays />} />
</Route>
     
              <Route path="flights" element={<Flights />} />
              <Route path="hotels" element={<Hotels />} />
              <Route path="trains" element={<Trains />} />
              <Route path="buses" element={<Buses />} />
              <Route path="cars" element={<Cars />} />
              <Route path="holidays" element={<Holidays />} />
              <Route path="profile" element={<Profile />} />
 
            
            {/* Other routes like Contact */}
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/support" element={<Support />} />
              <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
    </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
