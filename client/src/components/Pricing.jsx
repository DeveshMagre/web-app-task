import React, { useState } from 'react';

const Pricing = () => {
  const [packageName, setPackageName] = useState('');
  const [benefits, setBenefits] = useState('');
  const [price, setPrice] = useState('');
  const [membership, setMembership] = useState('');
  const [duration, setDuration] = useState('');
  const [terms, setTerms] = useState('');
  const [isSpecial, setIsSpecial] = useState(false);
  const [pricingTables, setPricingTables] = useState([]);

  const handleCreatePricingTable = () => {
    const newTable = {
      packageName,
      benefits,
      price,
      membership,
      duration,
      terms,
      isSpecial,
    };
    setPricingTables([...pricingTables, newTable]);
    // Clear the form after creating a table
    setPackageName('');
    setBenefits('');
    setPrice('');
    setMembership('');
    setDuration('');
    setTerms('');
    setIsSpecial(false);
  };

  return (
    <div className="container mx-auto p-4 flex">
      {/* Form Section */}
      <div className="w-1/3 bg-gray-100 p-4 rounded-lg mr-4">
        <h2 className="text-lg font-bold mb-4">Pricing Table Creator</h2>
        <input type="text" placeholder="Package Name" className="w-full border p-2 mb-2 rounded" value={packageName} onChange={(e) => setPackageName(e.target.value)} />
        <textarea placeholder="List of benefits" className="w-full border p-2 mb-2 rounded h-20" value={benefits} onChange={(e) => setBenefits(e.target.value)}></textarea>
        <div className="flex space-x-2 mb-2">
          <input type="number" placeholder="Price" className="w-1/2 border p-2 rounded" value={price} onChange={(e) => setPrice(e.target.value)} />
          <span className="self-center">INR</span>
        </div>
        <input type="text" placeholder="Membership" className="w-full border p-2 mb-2 rounded" value={membership} onChange={(e) => setMembership(e.target.value)} />
        <input type="text" placeholder="Duration" className="w-full border p-2 mb-2 rounded" value={duration} onChange={(e) => setDuration(e.target.value)} />
        <textarea placeholder="Terms" className="w-full border p-2 mb-2 rounded h-20" value={terms} onChange={(e) => setTerms(e.target.value)}></textarea>

        <div className="flex items-center mb-4">
          <label htmlFor="special" className="mr-2">Special:</label>
          <input type="checkbox" id="special" className="form-checkbox h-5 w-5 text-blue-600 rounded" checked={isSpecial} onChange={(e) => setIsSpecial(e.target.checked)} />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={handleCreatePricingTable}>Create Pricing Table</button>
      </div>

      {/* Display Section */}
      <div className="w-2/3 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Pricing Table will appear here</h2>
        <div className="flex space-x-4">
          {pricingTables.map((table, index) => (
            <div key={index} className={`border p-4 rounded-lg w-1/3 ${table.isSpecial ? 'bg-yellow-100 border-yellow-400' : ''}`}>
              <h3 className="text-md font-semibold mb-2">{table.packageName}</h3>
              <p className="mb-1">Benefits: {table.benefits}</p>
              <p className="mb-1">Price: INR {table.price}</p>
              <p className="mb-1">Membership: {table.membership}</p>
              <p className="mb-1">Duration: {table.duration}</p>
              <p className="mb-1">Terms: {table.terms}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full">CTA</button>
            </div>
          ))}
          {pricingTables.length === 0 && (
              <div className="w-full text-center py-4">No pricing table created yet.</div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Pricing;