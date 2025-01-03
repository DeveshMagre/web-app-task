import React from 'react';
import { Download, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBusiness } from '../context/BusinessContext'; 

function Dashboard() {
  const navigate = useNavigate();
  const { businesses } = useBusiness(); 

  const handleAddLicence = () => {
    navigate('/business-list'); 
  };

  const handleDownload = () => {
    const business = businesses[0]; 

  
    const businessData = [
      ['Business Name', business.businessName],
      ['GST No', business.gstNo],
      ['Address', business.address],
      ['Business Type', business.businessType],
      ['Invoice No', business.invoiceNo],
      ['Activation Date', business.activationDate],
      ['Renewal Date', business.renewalDate],
      ['Key', business.key],
      ['Lic Key', business.licKey],
      ['Contact Person', business.contactPerson],
      ['Designation', business.designation],
      ['Email', business.email],
      ['Phone', business.phone],
    ];

    const transactionData = [['Inv No', 'TRANJ ID', 'Tranj Mode', 'Date', 'Download', 'Inv.']];

    if (Array.isArray(business.transactions)) {
      business.transactions.forEach((transaction) => {
        transactionData.push([
          transaction.invNo,
          transaction.trxId,
          transaction.trxMode,
          transaction.date,
          '', 
          transaction.inv,
        ]);
      });
    }

    const data = [...businessData, ...transactionData];

    const csvContent = data
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${business.businessName}_details.csv`;

    link.click();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 shadow-md">
        <nav className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">{businesses[0]?.businessName}</h2>
            <p className="text-sm text-gray-600">{businesses[0]?.gstNo}</p>
          </div>
          <hr />
          <ul className="space-y-2">
            {[
              'Business Details',
              'Business Agreements',
              'Business Licences',
              'Contact person',
              'Renewals & Products',
              'Billing',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  {item}
                </a>
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
          <button className="border border-gray-300 py-2 px-4 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            status
          </button>
        </div>
        <div className="mb-6 p-6 bg-white shadow-md rounded-lg">
          <h2 className="mb-4 text-xl font-semibold">{businesses[0]?.businessName}</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-300 rounded-lg p-2">
              <span>Address: {businesses[0]?.address}</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-2">
              <span>Business GST No: {businesses[0]?.gstNo}</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-2">
              <span>Type of Business: {businesses[0]?.businessType}</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-2">
              <span>Logo of Business</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-2">
              <span>Invoice: {businesses[0]?.invoiceNo}</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-2">
              <span>Activation Date: {businesses[0]?.activationDate}</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-2">
              <span>Renewal Date: {businesses[0]?.renewalDate}</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-2">
              <span>Key: {businesses[0]?.key}</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-2">
              <span>Lic Key: {businesses[0]?.licKey}</span>
            </div>
          </div>
        </div>
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="mb-4 text-lg font-semibold">Contact Person</h3>
            <div className="grid gap-4">
              <div className="border border-gray-300 rounded-lg p-2">
                <span>Contact Person: {businesses[0]?.contactPerson}</span>
              </div>
              <div className="border border-gray-300 rounded-lg p-2">
                <span>Designation: {businesses[0]?.designation}</span>
              </div>
              <div className="border border-gray-300 rounded-lg p-2">
                <span>Email: {businesses[0]?.email}</span>
              </div>
              <div className="border border-gray-300 rounded-lg p-2">
                <span>Phone: {businesses[0]?.phone}</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="mb-4 text-lg font-semibold">Business Docs</h3>
            <div className="grid gap-4">
              <div className="border border-gray-300 rounded-lg p-2">
                <span>GST Doc</span>
              </div>
              <div className="border border-gray-300 rounded-lg p-2">
                <span>Business Docs</span>
              </div>
              <div className="border border-gray-300 rounded-lg p-2">
                <span>WDRA Order NO</span>
              </div>
              <div className="border border-gray-300 rounded-lg p-2">
                <span>Document</span>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm text-gray-600">Inv No</th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">TRANJ ID</th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">Tranj Mode</th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">Date</th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">Download</th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">Inv.</th>
              </tr>
            </thead>
            <tbody>
              {businesses[0]?.transactions?.map((transaction) => (
                <tr key={transaction.invNo}>
                  <td className="px-4 py-2 text-sm text-gray-700">{transaction.invNo}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{transaction.trxId}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{transaction.trxMode}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{transaction.date}</td>
                  <td className="px-4 py-2">
                    <button className="flex items-center border border-gray-300 py-2 px-4 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                      <Download className="h-4 w-4" />
                    </button>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">{transaction.inv}</td>
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
