import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Business from "./components/Business";
import { BusinessProvider } from './context/BusinessContext';
import Users from "./components/Users";
import TermsConditions from "./components/TermsConditions";
import Pricing from "./components/Pricing";
import Profile from "./components/Profile";
import Home from "./components/Home";
import UpdateProfile from "./components/UpdateProfile";
import MultiStepForm from  "./components/MultiStepForm"
import Dashboard from "./components/Dashboard";
import BusinessListPage from "./components/BusinessListPage";
import FormSummary from "./components/FormSummary";


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto mt-8 p-4">
        <BusinessProvider>
          <Routes>
         
            <Route path="/" element={<Home />} />
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
        </div>
      </div>
    </Router>
  );
};

export default App;
