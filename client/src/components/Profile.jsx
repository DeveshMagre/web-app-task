import React from "react";
import { IoMdMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedLoginDetails, setSelectedLoginDetails] = React.useState(null);

  const handleUpdateProfile = () => {
    navigate("/update-profile");
  };

  const handleViewClick = (loginDetails) => {
    setSelectedLoginDetails(loginDetails);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full p-8">
      <div className=" border border-gray-300 rounded p-6 w-full lg:w-1/4 shadow-md relative mb-6 lg:mb-0">
        <button
          onClick={handleUpdateProfile}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <IoMdMore className="h-10 w-10 lg:h-8 lg:w-8" />
        </button>
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
            <span className="material-icons">person</span>
          </div>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="User Name"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            disabled
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            disabled
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
      <div className="bg-blue-100 border border-green-500 rounded p-6 w-full lg:w-3/4 shadow-md lg:ml-6 mt-6 lg:mt-0">
        <h2 className="text-lg font-bold text-center mb-4">Login Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="border border-green-700 px-4 py-2">ID</th>
                <th className="border border-green-700 px-4 py-2">LOGIN ID</th>
                <th className="border border-green-700 px-4 py-2">IP Address</th>
                <th className="border border-green-700 px-4 py-2">ISP</th>
                <th className="border border-green-700 px-4 py-2">Date & Time</th>
                <th className="border border-green-700 px-4 py-2">Logged In Duration</th>
                <th className="border border-green-700 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border border-green-700 px-4 py-2">1</td>
                <td className="border border-green-700 px-4 py-2">john_doe</td>
                <td className="border border-green-700 px-4 py-2">192.168.0.1</td>
                <td className="border border-green-700 px-4 py-2">ISP Name</td>
                <td className="border border-green-700 px-4 py-2">2025-01-01</td>
                <td className="border border-green-700 px-4 py-2">2 hrs</td>
                <td className="border border-green-700 px-4 py-2">
                  <button
                    onClick={() => handleViewClick({ id: 1, ip: "192.168.0.1", isp: "ISP Name", duration: "2 hrs", date: "2025-01-01" })}
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && selectedLoginDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="font-bold mb-4">Login Details</h3>
            <p><strong>ID:</strong> {selectedLoginDetails.id}</p>
            <p><strong>IP Address:</strong> {selectedLoginDetails.ip}</p>
            <p><strong>ISP:</strong> {selectedLoginDetails.isp}</p>
            <p><strong>Date & Time:</strong> {selectedLoginDetails.date}</p>
            <p><strong>Logged In Duration:</strong> {selectedLoginDetails.duration}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
