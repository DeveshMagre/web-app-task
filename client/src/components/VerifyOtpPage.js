import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const location = useLocation();
  const email = location.state?.email || ""; // Ensure email is present

  // Start the timer when the component is mounted
  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  // Handle OTP verification
  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/verify-otp", { email, otp });
      if (response.data.success) {
        toast.success("OTP verified! Login successful.");
      } else {
        toast.error(response.data.message || "Invalid OTP");
      }
    } catch (error) {
      toast.error("Error verifying OTP. Please try again.");
    }
  };

  // Handle Resend OTP
  const handleResendOtp = async () => {
    setIsResendDisabled(true);
    setTimer(30);

    try {
      const response = await axios.post("http://localhost:5000/send-otp", { email });
      if (response.data.success) {
        toast.success("OTP resent successfully!");
      } else {
        toast.error(response.data.message || "Failed to resend OTP");
      }
    } catch (error) {
      toast.error("Error resending OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Verify OTP
        </h2>
        <p className="text-gray-600 text-sm text-center mb-4">
          OTP has been sent to your email: <strong>{email}</strong>
        </p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
          <input
            type="email"
            value={email}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">OTP</label>
          <input
            type="text"
            placeholder="Enter the OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          onClick={handleVerifyOtp}
          className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Verify OTP
        </button>
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">Didn’t get the OTP?</p>
          <button
            onClick={handleResendOtp}
            disabled={isResendDisabled}
            className={`w-full py-2 px-4 rounded-lg ${
              isResendDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isResendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
