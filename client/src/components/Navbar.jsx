import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-black ">
     <div className="text-lg font-bold flex justify-between items-center py-4 px-6 ">
        <div className="text-lg font-bold flex justify-between items-center py-4 px-6">
            LOGO
        </div>
     </div>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex space-x-8">
          <Link to="/business" className="hover:underline"> 
            Business
          </Link>
          <Link to="/users" className="hover:underline">
            Users
          </Link>
          <Link to="/terms-and-conditions" className="hover:underline">
            Terms & Condition
          </Link>
          <Link to="/pricing" className="hover:underline">
            Pricing
          </Link>
          
        </div>
        <div className="text-lg font-bold">
        <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </div>   
      </div>
    </nav>
  );
};

export default Navbar;
