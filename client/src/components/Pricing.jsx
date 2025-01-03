import React, { useState } from 'react';

const Pricing = () => {
  const [packageName, setPackageName] = useState('');
  const [benefits, setBenefits] = useState('');
  const [price, setPrice] = useState('');
  const [membership, setMembership] = useState('');
  const [duration, setDuration] = useState('');
  const [terms, setTerms] = useState('');
  const [isSpecial, setIsSpecial] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [pricingTables, setPricingTables] = useState([
    {
      packageName: "Basic Plan",
      benefits: "Access to basic features",
      price: "499",
      membership: "1 month",
      duration: "30 days",
      terms: "No refunds, limited support",
      isSpecial: false,
      isPublished: true,
    },
    {
      packageName: "Premium Plan",
      benefits: "Access to all features",
      price: "999",
      membership: "6 months",
      duration: "180 days",
      terms: "Priority support, 24/7 access",
      isSpecial: true,
      isPublished: false,
    },
    {
      packageName: "Ultimate Plan",
      benefits: "All features plus additional perks",
      price: "1999",
      membership: "1 year",
      duration: "365 days",
      terms: "Exclusive access to VIP events",
      isSpecial: false,
      isPublished: true,
    }
  ]);

  const handleCreatePricingTable = () => {
    const newTable = {
      packageName,
      benefits,
      price,
      membership,
      duration,
      terms,
      isSpecial,
      isPublished,
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
    setIsPublished(false);
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
          <input type="number" placeholder="MRP" className="w-1/2 border p-2 rounded" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <input type="text" placeholder="Membership" className="w-full border p-2 mb-2 rounded" value={membership} onChange={(e) => setMembership(e.target.value)} />
        <input type="number" placeholder="Duration" className="w-full border p-2 mb-2 rounded" value={duration} onChange={(e) => setDuration(e.target.value)} />
        <textarea placeholder="Terms" className="w-full border p-2 mb-2 rounded h-20" value={terms} onChange={(e) => setTerms(e.target.value)}></textarea>
        <div className="flex justify-around items-center mb-4 ">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Publish</span>
          </label>
          <label className="inline-flex items-center cursor-pointer ">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={isSpecial}
              onChange={(e) => setIsSpecial(e.target.checked)}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Special</span>
          </label>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={handleCreatePricingTable}>Create Pricing Table</button>
      </div>

      {/* Display Section */}
      <div className="w-2/3 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Pricing Table will appear here</h2>
        <div className="flex space-x-4">
          {pricingTables.map((table, index) => (
            <div key={index} className={`border p-4 rounded-lg w-1/3 bg-blue-100 border-blue-400`}>
              <h3 className="text-md font-semibold mb-2">{table.packageName}</h3>
              <p className="mb-1">Benefits: {table.benefits}</p>
              <p className="mb-1">Price: INR {table.price}</p>
              <p className="mb-1">Membership: {table.membership}</p>
              <p className="mb-1">Duration: {table.duration}</p>
              <p className="mb-1">Terms: {table.terms}</p>
              <p className="mb-1">Special: {table.isSpecial ? 'Yes' : 'No'}</p>
              <p className="mb-1">Published: {table.isPublished ? 'Yes' : 'No'}</p>
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
