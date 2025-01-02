import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const Profile = () => {
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    navigate("/update-profile"); // Adjust the path as per your routes
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full p-8">
      {/* Left Section */}
      <div className="bg-black border border-gray-300 rounded p-6 w-full lg:w-1/4 shadow-md relative mb-6 lg:mb-0">
        {/* Three-Dot Button */}
        <button
          onClick={handleUpdateProfile}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <span className="material-icons">more_vert</span>
        </button>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
            {/* Icon Placeholder */}
            <span className="material-icons">person</span>
          </div>
        </div>
        {/* Form Fields */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="USER NAME"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            CTA
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="bg-blue-100 border border-red-500 rounded p-6 w-full lg:w-3/4 shadow-md lg:ml-6 mt-6 lg:mt-0">
        <h2 className="text-lg font-bold text-center mb-4">Login Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-500 text-white">
                <th className="border border-red-700 px-4 py-2">ID</th>
                <th className="border border-red-700 px-4 py-2">LOGIN ID</th>
                <th className="border border-red-700 px-4 py-2">IP Address</th>
                <th className="border border-red-700 px-4 py-2">ISP</th>
                <th className="border border-red-700 px-4 py-2">Date & Time</th>
                <th className="border border-red-700 px-4 py-2">Logged In Duration</th>
                <th className="border border-red-700 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              <tr className="text-center">
                <td className="border border-red-700 px-4 py-2">1</td>
                <td className="border border-red-700 px-4 py-2">john_doe</td>
                <td className="border border-red-700 px-4 py-2">192.168.0.1</td>
                <td className="border border-red-700 px-4 py-2">ISP Name</td>
                <td className="border border-red-700 px-4 py-2">2025-01-01</td>
                <td className="border border-red-700 px-4 py-2">2 hrs</td>
                <td className="border border-red-700 px-4 py-2">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
