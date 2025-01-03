import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBusiness } from '../context/BusinessContext'; // Import context
import { CheckCircle, Cancel } from '@mui/icons-material'; // Import Material icons

const Business = () => {
  const {
    filteredBusinesses,
    setNameSearchTerm,
    setPhoneSearchTerm,
    setGstSearchTerm,
    filterBusinesses,
  } = useBusiness(); // Fetch filtered businesses and setSearchTerm from context

  const [startDateFilter, setStartDateFilter] = useState('');
  const [endDateFilter, setEndDateFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const navigate = useNavigate();

  const handleRowClick = (business) => {
    navigate(`/dashboard/${business.id}`, { state: { business } });
  };

  const handleNewBusinessClick = () => {
    navigate('/multi-step-form');
  };

  // Trigger filtering whenever search terms or filters change
  useEffect(() => {
    filterBusinesses();
  }, [setNameSearchTerm, setPhoneSearchTerm, setGstSearchTerm, startDateFilter, endDateFilter, statusFilter]);

  // Function to handle filtering businesses by start date, end date, and status
  const handleFilterChange = () => {
    const filtered = filteredBusinesses.filter((business) => {
      const matchesStartDate =
        !startDateFilter || new Date(business.startDate) >= new Date(startDateFilter);
      const matchesEndDate =
        !endDateFilter || new Date(business.renewalDate) <= new Date(endDateFilter);
      const matchesStatus = !statusFilter || business.status === statusFilter;

      return matchesStartDate && matchesEndDate && matchesStatus;
    });

    return filtered;
  };

  // Function to convert filtered businesses to CSV format
  const downloadCSV = () => {
    const headers = ['ID', 'Business Name', 'Address', 'GST No', 'Start Date', 'Renewal Date', 'AMC', 'Status'];
    const rows = filteredBusinesses.map((business) => [
      business.id,
      business.businessName,
      business.address,
      business.gstNo,
      business.startDate,
      business.renewalDate,
      business.amc,
      business.status,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'businesses.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full">
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border border-gray-300 rounded px-3 py-2 w-1/4"
          onChange={(e) => setNameSearchTerm(e.target.value)} // Update name search term
        />

        <input
          type="text"
          placeholder="Search by phone"
          className="border border-gray-300 rounded px-3 py-2 w-1/4"
          onChange={(e) => setPhoneSearchTerm(e.target.value)} // Update phone search term
        />
        <input
          type="text"
          placeholder="Search by GST"
          className="border border-gray-300 rounded px-3 py-2 w-1/4"
          onChange={(e) => setGstSearchTerm(e.target.value)} // Update GST search term
        />

        <input
          type="date"
          className="border border-gray-300 rounded px-3 py-2"
          value={startDateFilter}
          onChange={(e) => setStartDateFilter(e.target.value)} 
        />

        <input
          type="date"
          className="border border-gray-300 rounded px-3 py-2"
          value={endDateFilter}
          onChange={(e) => setEndDateFilter(e.target.value)} // Update end date filter
        />

        <select
          className="border border-gray-300 rounded px-3 py-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)} // Update status filter
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-black px-3 py-2 rounded"
          onClick={handleNewBusinessClick}
        >
          NEW BUSINESS
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
          onClick={downloadCSV} // Trigger CSV download
        >
          Download CSV
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">#ID</th>
            <th className="border border-gray-300 px-4 py-2">Business Name</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">GST No</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">Renewal Date</th>
            <th className="border border-gray-300 px-4 py-2">AMC</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBusinesses.length > 0 ? handleFilterChange().map((business) => (
            <tr
              key={business.id}
              onClick={() => handleRowClick(business)} // Make the whole row clickable
              className="cursor-pointer hover:bg-gray-200"
            >
              <td className="border border-gray-300 px-4 py-2">{business.id}</td>
              <td className="border border-gray-300 px-4 py-2">{business.businessName}</td>
              <td className="border border-gray-300 px-4 py-2">{business.address}</td>
              <td className="border border-gray-300 px-4 py-2">{business.gstNo}</td>
              <td className="border border-gray-300 px-4 py-2">{business.startDate}</td>
              <td className="border border-gray-300 px-4 py-2">{business.renewalDate}</td>
              <td className="border border-gray-300 px-4 py-2">{business.amc}</td>
              <td className="border border-gray-300 px-4 py-2">
                {business.status === 'Active' ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <Cancel className="text-red-500" />
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className=""
                  onClick={() => handleRowClick(business)}
                >
                  View 
                </button>
              </td>
            </tr>
          )) : <tr><td colSpan="9" className="text-center">No businesses found</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default Business;
