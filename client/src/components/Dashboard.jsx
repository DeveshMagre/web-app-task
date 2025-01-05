import React from 'react';
import { Download, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBusiness } from '../context/BusinessContext'; 
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const business = location.state?.business;
  const { id } = useParams();

  const navigate = useNavigate();
  console.log(business);
  const { businesses = [] } = useBusiness(); // Default to empty array if undefined
  const currentBusiness = businesses[0]; // Use the first business for now

  const handleAddLicence = () => {
    navigate('/business-list');
  };

  const handleDownload = () => {
    if (!currentBusiness) return;

    const businessData = [
      ['Business Name', currentBusiness.businessName || 'N/A'],
      ['Business ID', currentBusiness.businessid || 'N/A'],
      ['GST No', currentBusiness.gstNo || 'N/A'],
      ['Address', currentBusiness.address || 'N/A'],
      ['Business Type', currentBusiness.businessType || 'N/A'],
      ['Invoice No', currentBusiness.invoiceNo || 'N/A'],
      ['Activation Date', currentBusiness.activationDate || 'N/A'],
      ['Renewal Date', currentBusiness.renewalDate || 'N/A'],
      ['Key', currentBusiness.key || 'N/A'],
      ['Lic Key', currentBusiness.licKey || 'N/A'],
      ['Contact Person', currentBusiness.contactPerson || 'N/A'],
      ['Designation', currentBusiness.designation || 'N/A'],
      ['Email', currentBusiness.email || 'N/A'],
      ['Phone', currentBusiness.phone || 'N/A'],
    ];

    const transactionData = [['Inv No', 'TRANJ ID', 'Tranj Mode', 'Date', 'Download', 'Inv.']];

    if (Array.isArray(currentBusiness.transactions)) {
      currentBusiness.transactions.forEach((transaction) => {
        transactionData.push([
          transaction.invNo || 'N/A',
          transaction.trxId || 'N/A',
          transaction.trxMode || 'N/A',
          transaction.date || 'N/A',
          '', // Placeholder for download functionality
          transaction.inv || 'N/A',
        ]);
      });
    }

    const data = [...businessData, ...transactionData];
    const csvContent = data.map((row) => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${currentBusiness.businessName}_details.csv`;

    link.click();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 shadow-md">
        <nav className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">{currentBusiness?.businessName || 'Business Name'}</h2>
            <p className="text-sm text-gray-600">{currentBusiness?.gstNo || 'GST No'}</p>
          </div>
          <hr />
          <ul className="space-y-2">
            {['Business Details', 'Business Agreements', 'Business Licences', 'Contact Person', 'Renewals & Products', 'Billing'].map((item) => (
              <li key={item}>
                <a href="#" className="block py-2 text-sm text-gray-600 hover:text-gray-900">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="mb-6 flex gap-4">
          <button
            className="flex items-center border border-gray-300 py-2 px-4 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </button>
          <button
            className="flex items-center border border-gray-300 py-2 px-4 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
            onClick={handleAddLicence}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Licence
          </button>
          <button className="flex items-center border border-gray-300 py-2 px-4 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            <Plus className="mr-2 h-4 w-4" />
            Add Update
          </button>
          <button className="border border-gray-300 py-2 px-4 rounded-lg text-sm text-gray-700 hover:bg-gray-50">Status</button>
        </div>
        <div className="mb-6 p-6 bg-white shadow-md rounded-lg">
          <h2 className="mb-4 text-xl font-semibold">{currentBusiness?.businessName || 'Business Name'}</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {['address', 'gstNo', 'businessType', 'invoiceNo', 'activationDate', 'renewalDate', 'key', 'licKey'].map((field) => (
              <div key={field} className="border border-gray-300 rounded-lg p-2">
                <span>
                  {`${field.replace(/([A-Z])/g, ' $1')}: `}
                  {currentBusiness?.[field] || 'N/A'}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                {['Inv No', 'TRANJ ID', 'Tranj Mode', 'Date', 'Download', 'Inv.'].map((heading) => (
                  <th key={heading} className="px-4 py-2 text-left text-sm text-gray-600">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentBusiness?.transactions?.map((transaction) => (
                <tr key={transaction.invNo}>
                  {['invNo', 'trxId', 'trxMode', 'date', 'inv'].map((field) => (
                    <td key={field} className="px-4 py-2 text-sm text-gray-700">{transaction[field] || 'N/A'}</td>
                  ))}
                  <td className="px-4 py-2">
                    <button className="flex items-center border border-gray-300 py-2 px-4 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                      <Download className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
