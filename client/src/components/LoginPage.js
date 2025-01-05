import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerfunction } from "../services/Api";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleLogin = async () => {
    const { username, email, password } = userInput;

    if (!username || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await registerfunction({ username, email, password });

      if (response.success) {
        toast.success("Login successful! Redirecting...");
        setTimeout(() => {
          navigate("/verify-otp", { state: { email } });
        }, 1500);
      } else {
        toast.error(response.message || "Invalid credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            value={userInput.username}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userInput.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={userInput.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full mt-4 py-2 px-4 rounded-lg text-white focus:outline-none ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
