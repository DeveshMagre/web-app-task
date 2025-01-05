import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBusiness } from '../context/BusinessContext';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    salutation: '',
    gender: '',
    name: '',
    email: '',
    phone: '',
    otp: '',
    emailOtp: '',
    businessType: '',
    businessName: '',
    gstNo: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    documents1: null,
    documents2: null,
    gstCertification: null,
    workOrder: null,
    termsAndCondition: '',
    signatury: '',
    businessLogo: null,
    brandAppLogo: null,
  });
  const [errors, setErrors] = useState({});
  
  const { addBusiness } = useBusiness();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (step === 1 && (!formData.salutation || !formData.gender || !formData.name || !formData.email || !formData.phone || !formData.otp || !formData.emailOtp)) {
      newErrors.step1 = 'Please fill all fields in Step 1';
    }
    if (step === 2 && (!formData.businessType || !formData.businessName || !formData.gstNo || !formData.address1 || !formData.city || !formData.state || !formData.country || !formData.zipCode)) {
      newErrors.step2 = 'Please fill all fields in Step 2';
    }
    if (step === 3 && (!formData.documents1 || !formData.documents2 || !formData.gstCertification || !formData.workOrder || !formData.termsAndCondition || !formData.signatury || !formData.businessLogo || !formData.brandAppLogo)) {
      newErrors.step3 = 'Please fill all fields in Step 3';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = () => {
    if (validate()) {
      addBusiness(formData);
      navigate('/business');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-xl mb-6">Step {step}</h2>
      
      {/* Step 1 */}
      {step === 1 && (
        <>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="salutation"
              placeholder="Salutation"
              value={formData.salutation}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            name="otp"
            placeholder="OTP"
            value={formData.otp}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            name="emailOtp"
            placeholder="Email OTP"
            value={formData.emailOtp}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          {errors.step1 && <p className="text-red-500">{errors.step1}</p>}
          <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Next</button>
        </>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <>
          <input
            type="text"
            name="businessType"
            placeholder="Business Type"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            name="gstNo"
            placeholder="GST No"
            value={formData.gstNo}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            name="address1"
            placeholder="Address 1"
            value={formData.address1}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            name="address2"
            placeholder="Address 2"
            value={formData.address2}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          {errors.step2 && <p className="text-red-500">{errors.step2}</p>}
          <button onClick={handlePrev} className="bg-gray-500 text-white py-2 px-4 rounded mt-4">Back</button>
          <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Next</button>
        </>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <>
  <label className="block text-gray-700 mb-2">Upload Document 1 (PDF, JPG, or PNG):</label>
  <input
    type="file"
    name="documents1"
    onChange={handleChange}
    className="w-full p-2 border rounded mb-4"
  />
  
  <label className="block text-gray-700 mb-2">Upload Document 2 (PDF, JPG, or PNG):</label>
  <input
    type="file"
    name="documents2"
    onChange={handleChange}
    className="w-full p-2 border rounded mb-4"
  />
  
  <label className="block text-gray-700 mb-2">GST Certification (PDF only):</label>
  <input
    type="file"
    name="gstCertification"
    onChange={handleChange}
    className="w-full p-2 border rounded mb-4"
  />
  
  <label className="block text-gray-700 mb-2">Work Order (PDF only):</label>
  <input
    type="file"
    name="workOrder"
    onChange={handleChange}
    className="w-full p-2 border rounded mb-4"
  />
  
  <label className="block text-gray-700 mb-2">Terms and Conditions:</label>
  <input
    type="text"
    name="termsAndCondition"
    placeholder="Enter terms and conditions"
    value={formData.termsAndCondition}
    onChange={handleChange}
    className="w-full p-2 border rounded mb-4"
  />
  
  <label className="block text-gray-700 mb-2">Authorized Signatory Name:</label>
  <input
    type="text"
    name="signatury"
    placeholder="Enter authorized signatory name"
    value={formData.signatury}
    onChange={handleChange}
    className="w-full p-2 border rounded mb-4"
  />
  
  <label className="block text-gray-700 mb-2">Business Logo (JPG or PNG):</label>
  <input
    type="file"
    name="businessLogo"
    onChange={handleChange}
    className="w-full p-2 border rounded mb-4"
  />
  
  <label className="block text-gray-700 mb-2">Brand App Logo (JPG or PNG):</label>
  <input
    type="file"
    name="brandAppLogo"
    onChange={handleChange}
    className="w-full p-2 border rounded mb-4"
  />
  
  {errors.step3 && <p className="text-red-500">{errors.step3}</p>}
  <button onClick={handlePrev} className="bg-gray-500 text-white py-2 px-4 rounded mt-4">Back</button>
  <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded mt-4">Submit</button>
</>

      )}
    </div>
  );
}

export default MultiStepForm;
