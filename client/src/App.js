import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Business from "./components/Business";
import { BusinessProvider } from './context/BusinessContext';
import Users from "./components/Users";
import TermsConditions from "./components/TermsConditions";
import Pricing from "./components/Pricing";
import Profile from "./components/Profile";
import UpdateProfile from "./components/UpdateProfile";
import MultiStepForm from  "./components/MultiStepForm";
import Dashboard from "./components/Dashboard";
import BusinessListPage from "./components/BusinessListPage";
import FormSummary from "./components/FormSummary";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./components/Home";
import Otp from './pages/Otp';
import Error from './pages/Error';
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  
  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      setIsAuthenticated(true); 
    }
  };

  useEffect(() => {
    userValid(); 
  }, []);

  return (
    <BrowserRouter>
      <BusinessProvider>
        {isAuthenticated && <Navbar />} 
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home/> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user/otp" element={<Otp />} />
          <Route path="*" element={<Error />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/business-list" element={<BusinessListPage />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/business" element={<Business />} />
          <Route path="/users" element={<Users />} />
          <Route path="/form-summary" element={<FormSummary />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/multi-step-form" element={<MultiStepForm />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BusinessProvider>
    </BrowserRouter>
  );
}

export default App;
