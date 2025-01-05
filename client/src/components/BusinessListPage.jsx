import React, { useState, useEffect } from 'react';
import { useBusiness } from '../context/BusinessContext';
import { CSVLink } from "react-csv";

const BusinessListPage = () => {
  const {
    businesses,
    setNameSearchTerm,
    setPhoneSearchTerm,
    setGstSearchTerm,
    addBusiness,
    nameSearchTerm,
    phoneSearchTerm,
    gstSearchTerm
  } = useBusiness();

  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [duration, setDuration] = useState('');
  const [amount, setAmount] = useState('');
  const [amcCharges, setAmcCharges] = useState('');
  
  const [activationKey, setActivationKey] = useState('');
  const [licenseKey, setLicenseKey] = useState('');

  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);

  // Filter businesses whenever search terms or businesses change
  useEffect(() => {
    const filtered = businesses.filter(business => {
      return (
        business.businessName?.toLowerCase().includes(nameSearchTerm?.toLowerCase() || '') &&
        business.phone?.includes(phoneSearchTerm || '') &&
        business.gstNo?.includes(gstSearchTerm || '')
      );
    });
    setFilteredBusinesses(filtered);
  }, [businesses, nameSearchTerm, phoneSearchTerm, gstSearchTerm]);

  const handleGenerateKey = () => {
    if (!selectedBusiness || !selectedPlan || !duration || !amount || !amcCharges) {
      alert("Please fill in all the fields to generate a key.");
      return;
    }

    const businessName = selectedBusiness.businessName.substring(0, 3).toUpperCase();
    const gstNo = selectedBusiness.gstNo.slice(0, 4);
    const phoneLastThree = selectedBusiness.phone.slice(-3);
    const dateActivation = new Date().toLocaleDateString("en-GB").replace(/\//g, "").slice(0, 4);
    const time = new Date().toLocaleTimeString().split(":").slice(0, 2).join("").padStart(4, "0");

    const newLicenseKey = `${businessName}${gstNo}${phoneLastThree}${dateActivation}${time}${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    const newActivationKey = Math.random().toString(36).substr(2, 15).toUpperCase();


    setActivationKey(newActivationKey);
    setLicenseKey(newLicenseKey);

    const updatedBusinesses = businesses.map(business =>
      business.businessName === selectedBusiness.businessName
        ? { ...business, licKey: newLicenseKey, key: newActivationKey }
        : business
    );

    addBusiness(updatedBusinesses); 

    alert(`Activation Key: ${newActivationKey}\nLicense Key: ${newLicenseKey}`);
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4 w-full">
          <input
            type="text"
            placeholder="Search by Business name"
            className="border p-2 rounded w-1/4"
            onChange={(e) => setNameSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by Phone"
            className="border p-2 rounded w-1/4"
            onChange={(e) => setPhoneSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by GST No"
            className="border p-2 rounded w-1/4"
            onChange={(e) => setGstSearchTerm(e.target.value)}
          />
          <CSVLink 
            data={filteredBusinesses} 
            filename="businesses.csv" 
            className="bg-blue-500 text-white py-2 px-4 rounded w-1/4 text-center"
            target="_blank"
          >
            Download CSV
          </CSVLink>
        </div>
      </div>

      <div className="flex">
        {/* Business selection section */}
        <div className="w-1/4 bg-white shadow-lg rounded-lg p-4 mr-4">
          <div className="mb-4">
            <label htmlFor="selectBusiness" className="block text-gray-700 text-sm font-bold mb-2">Select Business</label>
            <select
              id="selectBusiness"
              className="border p-2 rounded w-full"
              onChange={(e) => setSelectedBusiness(businesses.find(b => b.businessName === e.target.value))}
            >
              <option value="">Select a business</option>
              {filteredBusinesses.map(business => (
                <option key={business.id} value={business.businessName}>{business.businessName}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="selectPlan" className="block text-gray-700 text-sm font-bold mb-2">Select Plan</label>
            <select id="selectPlan" className="border p-2 rounded w-full" onChange={(e) => setSelectedPlan(e.target.value)}>
              <option value="">Select a plan</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Duration"
            className="border p-2 rounded w-full mb-4"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount"
            className="border p-2 rounded w-full mb-4"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="AMC Charges"
            className="border p-2 rounded w-full mb-4"
            value={amcCharges}
            onChange={(e) => setAmcCharges(e.target.value)}
          />
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={handleGenerateKey}
          >
            Generate Keys
          </button>
        </div>

        {/* Table section */}
        <div className="w-3/4 bg-white shadow-lg rounded-lg p-4 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">#ID</th>
                <th className="border border-gray-300 px-4 py-2">Business Name</th>
                <th className="border border-gray-300 px-4 py-2">GST No</th>
                <th className="border border-gray-300 px-4 py-2">Contact</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Activation Key</th>
                <th className="border border-gray-300 px-4 py-2">License Key</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBusinesses.map(business => (
                <tr key={business.id}>
                  <td className="border border-gray-300 px-4 py-2">{business.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{business.businessName}</td>
                  <td className="border border-gray-300 px-4 py-2">{business.gstNo}</td>
                  <td className="border border-gray-300 px-4 py-2">{business.phone}</td>
                  <td className="border border-gray-300 px-4 py-2">{business.status}</td>
                  <td className="border border-gray-300 px-4 py-2">{business.key ? business.key : "N/A"}</td>
                  <td className="border border-gray-300 px-4 py-2">{business.licKey ? business.licKey : "N/A"}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-1">S</button>
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-1">E</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">V</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusinessListPage;
