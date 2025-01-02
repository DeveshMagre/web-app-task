import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Business from "./components/Business";
import Users from "./components/Users";
import TermsConditions from "./components/TermsConditions";
import Pricing from "./components/Pricing";
import Profile from "./components/Profile";
import DashboardCards from "./components/DashboardCards";
import UpdateProfile from "./components/UpdateProfile";
import MultiStepForm from  "./components/MultiStepForm"
import Success from "./components/Success";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<DashboardCards />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/business" element={<Business />} />
            <Route path="/users" element={<Users />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/multi-step-form" element={<MultiStepForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
