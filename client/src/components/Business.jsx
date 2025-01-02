import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
const Business = () => {
  const [businesses, setBusinesses] = useState([
    {
      id: '#PRI283737',
      name: 'AMBUJA NEOTIA',
      address: 'Newtown Sector IV',
      gstNo: '19CRLPP793',
      startDate: '12-07-2024',
      renewalDate: '11-07-2025',
      amc: 'YES',
      status: true, // Use boolean for status
    },
  ]);

  const [codeWordNotes, setCodeWordNotes] = useState([
    "1 - Gold",
    "2 - Silver",
    "3 - Bronze",
    "A - Available"
  ])

  const navigate = useNavigate();
  const handleNewBusinessClick = () => {
    navigate('/multi-step-form');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full"> {/* Added container for better styling */}
      {/* Header */}
      

      {/* Search and Filters */}
      <div className="flex space-x-4 mb-4">
        <input type="text" placeholder="Search by phone" className="border border-gray-300 rounded px-3 py-2 w-1/4" />
        <input type="text" placeholder="Search by GST" className="border border-gray-300 rounded px-3 py-2 w-1/4" />
        <input type="text" placeholder="Search by business" className="border border-gray-300 rounded px-3 py-2 w-1/4" />
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded">date filters</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded">Status</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded">download</button>
        <button className="bg-pink-500 hover:bg-pink-600 text-black px-3 py-2 rounded" onClick={handleNewBusinessClick}>NEW BUSINESS</button>
      </div>

      {/* Business Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">#ID</th>
            <th className="border border-gray-300 px-4 py-2">Business name</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">GST NO</th>
            <th className="border border-gray-300 px-4 py-2">Start date</th>
            <th className="border border-gray-300 px-4 py-2">renewal date</th>
            <th className="border border-gray-300 px-4 py-2">AMC</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((business) => (
            <tr key={business.id}>
              <td className="border border-gray-300 px-4 py-2">{business.id}</td>
              <td className="border border-gray-300 px-4 py-2">{business.name}</td>
              <td className="border border-gray-300 px-4 py-2">{business.address}</td>
              <td className="border border-gray-300 px-4 py-2">{business.gstNo}</td>
              <td className="border border-gray-300 px-4 py-2">{business.startDate}</td>
              <td className="border border-gray-300 px-4 py-2">{business.renewalDate}</td>
              <td className="border border-gray-300 px-4 py-2">{business.amc}</td>
              <td className="border border-gray-300 px-4 py-2">
                <div className={`w-6 h-6 rounded-full ${business.status ? 'bg-green-500' : 'bg-red-500'}`}></div> {/* Status indicator */}
              </td>
              <td className="border border-gray-300 px-4 py-2">E. V. SLA</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex mt-4">
        <div className="bg-yellow-200 p-2 rounded-md">
            <p>#PRI283737</p>
            <p>File Data System</p>
            <p>1. Save File</p>
            <p>2. Send File</p>
            <p>3. Delete File</p>
        </div>
        <div className="bg-yellow-200 p-2 rounded-md ml-auto">
            {codeWordNotes.map((note, index) => (
                <p key={index}>{note}</p>
            ))}
        </div>
      </div>

       <div className="mt-4">
        <div className="bg-yellow-300 p-2 rounded-md inline-block">Ratan Lodhi</div>
       </div>
    </div>
  );
};

export default Business;