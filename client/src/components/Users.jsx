import React, { useState } from 'react';

const Users = () => {
  const [businesses, setBusinesses] = useState([]); // Initially empty

  // Placeholder for search/filter functions (you'll need to implement these)
  const handleSearchByPhone = () => { /* ... */ };
  const handleSearchByGST = () => { /* ... */ };
  const handleSearchByBusiness = () => { /* ... */ };
  const handleDateFilters = () => { /* ... */ };
  const handleStatusFilter = () => { /* ... */ };
  const handleDownload = () => { /* ... */ };
  const handleNewBusiness = () => { /* ... */ };


  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleSearchByPhone}>Search by phone</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleSearchByGST}>Search by GST</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleSearchByBusiness}>Search by business</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleDateFilters}>date filters</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleStatusFilter}>Status</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>download</button>
        </div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleNewBusiness}>New business</button>
      </div>

      <div className="overflow-x-auto"> {/* For horizontal scrolling if needed */}
        <table className="min-w-full border-collapse border border-gray-300">
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
            {businesses.map((business, index) => (
              <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}> {/* Alternating row colors */}
                <td className="border border-gray-300 px-4 py-2">{business.id}</td>
                <td className="border border-gray-300 px-4 py-2">{business.name}</td>
                <td className="border border-gray-300 px-4 py-2">{business.address}</td>
                <td className="border border-gray-300 px-4 py-2">{business.gstNo}</td>
                <td className="border border-gray-300 px-4 py-2">{business.startDate}</td>
                <td className="border border-gray-300 px-4 py-2">{business.renewalDate}</td>
                <td className="border border-gray-300 px-4 py-2">{business.amc}</td>
                <td className="border border-gray-300 px-4 py-2">{business.status}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {/* Actions (e.g., edit, delete buttons) */}
                  <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                  <button className="text-red-500 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
            {businesses.length === 0 && (
                <tr>
                    <td colSpan={9} className="text-center py-4">No data available</td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;