import React from "react";

const DatePicker = () => {
  return (
    <div className="flex space-x-4">
      <input
        type="date"
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Start Date"
      />
      <input
        type="date"
        className="p-2 border border-gray-300 rounded-md"
        placeholder="End Date"
      />
    </div>
  );
};

export default DatePicker;
