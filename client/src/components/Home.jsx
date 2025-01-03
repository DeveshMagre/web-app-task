import React, { useState } from "react";
import BusinessChart from "./BusinessChart"; 
import { format } from "date-fns";

const Home = () => {
  const [validityStart, setValidityStart] = useState("");
  const [validityEnd, setValidityEnd] = useState("");
  const [submittedDates, setSubmittedDates] = useState(null);

  const handleDateSubmit = () => {
    if (validityStart && validityEnd) {
      setSubmittedDates({ start: validityStart, end: validityEnd });
      console.log("Submitted Dates:", { start: validityStart, end: validityEnd });
    } else {
      alert("Please select both start and end dates.");
    }
  };

  const handleNewClientClick = () => {
    alert("New Client button clicked!"); 
  };

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), "yyyy-MM-dd");
    } catch (error) {
      return "";
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center w-full mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            <label htmlFor="start-date" className="text-gray-700 text-sm font-medium mb-1">
              Start Date:
            </label>
            <input
              type="date"
              id="start-date"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={validityStart}
              onChange={(e) => setValidityStart(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="end-date" className="text-gray-700 text-sm font-medium mb-1">
              End Date:
            </label>
            <input
              type="date"
              id="end-date"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={validityEnd}
              onChange={(e) => setValidityEnd(e.target.value)}
            />
          </div>
          <button
            onClick={handleDateSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
        <button
          onClick={handleNewClientClick}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          New Lic
        </button>
      </div>

      {submittedDates && (
        <div className="text-center text-gray-700 mb-4">
          Selected Date Range: {formatDate(submittedDates.start)} - {formatDate(submittedDates.end)}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { value: "12,900", label: "Active Business", color: "bg-yellow-500" },
            { value: "2,900", label: "Renewal Business", color: "bg-green-500" },
            { value: "500", label: "Expired Business", color: "bg-red-500" },
            { value: "212,900", label: "New Leads", color: "bg-blue-500" },
            { value: "12,221,290", label: "Earnings", color: "bg-indigo-500" },
            { value: "1,000", label: "AMC Users", color: "bg-purple-500" },
          ].map((metric, index) => (
            <div key={index} className={`${metric.color} p-6 rounded-lg shadow-md text-center text-white`}>
              <h2 className="text-2xl font-bold">{metric.value}</h2>
              <p className="text-lg">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <h2 className="text-lg font-bold mb-4 text-center text-gray-700">
            Month-wise Business Growth
          </h2>
          <BusinessChart submittedDates={submittedDates} />
        </div>
      </div>
    </div>
  );
};

export default Home;
