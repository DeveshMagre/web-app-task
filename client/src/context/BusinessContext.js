import React, { createContext, useState, useContext } from 'react';

const BusinessContext = createContext();

export const BusinessProvider = ({ children }) => {
  const [businesses, setBusinesses] = useState([
    {
      id: 1,
      businessName: 'ABC Pvt Ltd',
      address: '123 Main St, City, Country',
      gstNo: 'ABC123456789',
      businessType: 'Manufacturing',
      logo: 'path/to/logo.jpg',
      invoiceNo: 'INV12345',
      activationDate: '2020-01-01',
      renewalDate: '2023-01-01',
      key: 'ABCD1234',
      licKey: 'LIC1234',
      contactPerson: 'John Doe',
      designation: 'Manager',
      email: 'johndoe@abc.com',
      phone: '9876543210',
      businessDocs: 'path/to/business-docs.pdf',
      gstDoc: 'path/to/gst-doc.pdf',
      wdraOrderNo: 'WDRA1234',
      startDate: '2020-01-01',  // Added Start Date
      renewalDate: '2023-01-01',  // Added Renewal Date
      amc: '12 months',  // Added AMC
      status: 'Active',  // Added Status
    },
    {
      id: 2,
      businessName: 'Devesh Pvt Ltd',
      address: '123 Main St, City, Country',
      gstNo: 'ABC123456789',
      businessType: 'Manufacturing',
      logo: 'path/to/logo.jpg',
      invoiceNo: 'INV12345',
      activationDate: '2020-01-01',
      renewalDate: '2023-01-01',
      key: 'ABCD1234',
      licKey: 'LIC1234',
      contactPerson: 'John Doe',
      designation: 'Manager',
      email: 'johndoe@abc.com',
      phone: '9876543210',
      businessDocs: 'path/to/business-docs.pdf',
      gstDoc: 'path/to/gst-doc.pdf',
      wdraOrderNo: 'WDRA1234',
      startDate: '2020-01-01',  // Added Start Date
      renewalDate: '2023-01-01',  // Added Renewal Date
      amc: '12 months',  // Added AMC
      status: 'Active',  // Added Status
    },
  ]);

  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);

  // Set search terms
  const [nameSearchTerm, setNameSearchTerm] = useState('');
  const [phoneSearchTerm, setPhoneSearchTerm] = useState('');
  const [gstSearchTerm, setGstSearchTerm] = useState('');
  const [amcSearchTerm, setAmcSearchTerm] = useState('');  // Added AMC search term
  const [statusSearchTerm, setStatusSearchTerm] = useState('');  // Added Status search term

  // Function to filter businesses
  const filterBusinesses = () => {
    const filtered = businesses.filter((business) => {
      const matchesName = nameSearchTerm
        ? business.businessName.toLowerCase().includes(nameSearchTerm.toLowerCase())
        : true;
      const matchesPhone = phoneSearchTerm
        ? business.phone.includes(phoneSearchTerm)
        : true;
      const matchesGst = gstSearchTerm
        ? business.gstNo.includes(gstSearchTerm)
        : true;
      const matchesAmc = amcSearchTerm
        ? business.amc.toLowerCase().includes(amcSearchTerm.toLowerCase())
        : true;
      const matchesStatus = statusSearchTerm
        ? business.status.toLowerCase().includes(statusSearchTerm.toLowerCase())
        : true;

      return matchesName && matchesPhone && matchesGst && matchesAmc && matchesStatus;
    });

    setFilteredBusinesses(filtered);
  };

  // Watch for search term changes and reapply filters
  React.useEffect(() => {
    filterBusinesses();
  }, [nameSearchTerm, phoneSearchTerm, gstSearchTerm, amcSearchTerm, statusSearchTerm]);

  // Function to add a new business
  const addBusiness = (businessData) => {
    setBusinesses((prevBusinesses) => [
      ...prevBusinesses,
      { id: Date.now(), ...businessData },
    ]);
  };

  return (
    <BusinessContext.Provider
      value={{
        businesses,
        filteredBusinesses,
        filterBusinesses,
        setNameSearchTerm,
        setPhoneSearchTerm,
        setGstSearchTerm,
        setAmcSearchTerm,  // Provide AMC search setter
        setStatusSearchTerm,  // Provide Status search setter
        addBusiness,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

// Custom Hook to use business context
export const useBusiness = () => {
  return useContext(BusinessContext);
};

export default BusinessContext;
