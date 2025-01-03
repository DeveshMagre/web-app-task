import React, { useState } from 'react';

const TermsConditions = () => {
  const [contractName, setContractName] = useState('');
  const [contractType, setContractType] = useState('');
  const [validityStart, setValidityStart] = useState('');
  const [validityEnd, setValidityEnd] = useState('');
  const [visibleType, setVisibleType] = useState(false);
  const [contracts, setContracts] = useState([]);

  const handleCreateContract = () => {
    const newContract = {
      id: contracts.length + 1,
      name: contractName,
      type: contractType,
      valid: `${validityStart} - ${validityEnd}`,
    };
    setContracts([...contracts, newContract]);
    // Clear the form
    setContractName('');
    setContractType('');
    setValidityStart('');
    setValidityEnd('');
  };

  return (
    <div className="container mx-auto p-4 flex">
      {/* Form Section */}
      <div className="w-1/3 bg-gray-100 p-4 rounded-lg mr-4">
        <h2 className="text-lg font-bold mb-4">Create New Contract</h2>
        <input type="text" placeholder="Contract Name" className="w-full border p-2 mb-2 rounded" value={contractName} onChange={(e) => setContractName(e.target.value)} />
        <input type="text" placeholder="Contract Type" className="w-full border p-2 mb-2 rounded" value={contractType} onChange={(e) => setContractType(e.target.value)} />
        <div className="flex space-x-2 mb-2">
          <input type="date" placeholder="Validity Start" className="w-1/2 border p-2 rounded" value={validityStart} onChange={(e) => setValidityStart(e.target.value)} />
          <input type="date" placeholder="Validity End" className="w-1/2 border p-2 rounded" value={validityEnd} onChange={(e) => setValidityEnd(e.target.value)} />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="visible" className="mr-2">Visible type:</label>
          <input type="checkbox" id="visible" className="form-checkbox h-5 w-5 text-blue-600 rounded" checked={visibleType} onChange={() => setVisibleType(!visibleType)} />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={handleCreateContract}>CTA</button>
      </div>

      {/* Table Section */}
      <div className="w-2/3 bg-gray-100 p-4 rounded-lg overflow-x-auto"> {/* Added overflow for horizontal scroll */}
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">#ID</th>
              <th className="border border-gray-300 px-4 py-2">Contract name</th>
              <th className="border border-gray-300 px-4 py-2">type</th>
              <th className="border border-gray-300 px-4 py-2">valid</th>
              <th className="border border-gray-300 px-4 py-2">action</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract) => (
              <tr key={contract.id} className="border border-gray-300">
                <td className="px-4 py-2">{contract.id}</td>
                <td className="px-4 py-2">{contract.name}</td>
                <td className="px-4 py-2">{contract.type}</td>
                <td className="px-4 py-2">{contract.valid}</td>
                  
              </tr>
            ))}
            {contracts.length === 0 && (
                <tr>
                    <td colSpan={5} className="text-center py-4">No contracts created yet.</td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TermsConditions;