import React, { createContext, useState, useContext } from 'react';

const BusinessContext = createContext();

export const useBusiness = () => {
  return useContext(BusinessContext);
};

export const BusinessProvider = ({ children }) => {
  const defaultBusinesses = [
    {
      id: "PRI2401012345",
      businessName: "John's Bakery",
      address1: "123 Main St, Springfield",
      gstNo: "GST123456789",
      startDate: "2024-01-01",
      renewalDate: "2025-01-01",
      amc: "Basic",
      status: "Active",
      phone: "9876543210",
      email: "johnsbakery@example.com",
      ownerName: "John Doe",
      city: "Springfield",
    },
    {
      id: "PRI2401023456",
      businessName: "Tech Solutions",
      address1: "456 Elm St, Metropolis",
      gstNo: "GST987654321",
      startDate: "2024-02-01",
      renewalDate: "2025-02-01",
      amc: "Premium",
      status: "Active",
      phone: "9123456789",
      email: "techsolutions@example.com",
      ownerName: "Jane Smith",
      city: "Metropolis",
    },
  ];

  const [businesses, setBusinesses] = useState(defaultBusinesses);
  const [nameSearchTerm, setNameSearchTerm] = useState('');
  const [phoneSearchTerm, setPhoneSearchTerm] = useState('');
  const [gstSearchTerm, setGstSearchTerm] = useState('');

  // Add a new business with all specified fields
  const addBusiness = (newBusiness) => {
    const businessWithId = {
      ...newBusiness,
      id: generateBusinessID(),
    };
    setBusinesses([...businesses, businessWithId]);
  };

  const generateBusinessID = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    const businessID = `PRI${year.toString().slice(-2)}${month}${randomNumber}`;
    return businessID;
  };

  return (
    <BusinessContext.Provider
      value={{
        businesses,
        addBusiness,
        setNameSearchTerm,
        setPhoneSearchTerm,
        setGstSearchTerm,
        generateBusinessID,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};
