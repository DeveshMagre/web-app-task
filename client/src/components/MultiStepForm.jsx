import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MultiStepForm = () => {
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
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        documents1: null,
        documents2: null,
        gstCertification: null,
        workOrder: null,
        termsAndCondition: null,
        signatory: '',
        businessLogo: null,
        brandAppLogo: null,
    });

    const navigate = useNavigate();  // Use navigate for navigation

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Handle form submission here
        alert("Form Submitted! Check console for data.");
        navigate('/success');  // Navigate to a new page after form submission (adjust the path as needed)
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <input type="text" name="salutation" placeholder="Salutation" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="text" name="gender" placeholder="Gender" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="text" name="name" placeholder="Name" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="text" name="otp" placeholder="OTP" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="text" name="emailOtp" placeholder="Email OTP" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">Save & Continue</button>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <input type="text" name="businessType" placeholder="Business Type" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="text" name="businessName" placeholder="Business Name" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="text" name="gstNo" placeholder="GST No" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="text" name="address1" placeholder="Address 1" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="text" name="address2" placeholder="Address 2" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="text" name="city" placeholder="City" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="text" name="state" placeholder="State" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="text" name="country" placeholder="Country" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="text" name="zipCode" placeholder="Zip Code" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded mr-2">Previous</button>
                        <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">Save & Continue</button>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <input type="file" name="documents1" onChange={handleFileChange} className="mb-2 w-full" />
                        <input type="file" name="documents2" onChange={handleFileChange} className="mb-2 w-full" />
                        <input type="file" name="gstCertification" onChange={handleFileChange} className="mb-2 w-full" />
                        <input type="file" name="workOrder" onChange={handleFileChange} className="mb-2 w-full" />
                        <input type="file" name="termsAndCondition" onChange={handleFileChange} className="mb-2 w-full" />
                        <input type="text" name="signatory" placeholder="Signatory" onChange={handleChange} className='border rounded p-2 mb-2 w-full'/>
                        <input type="file" name="businessLogo" onChange={handleFileChange} className="mb-2 w-full" />
                        <input type="file" name="brandAppLogo" onChange={handleFileChange} className="mb-2 w-full" />
                        <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded mr-2">Previous</button>
                        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">Save & Continue</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="p-4 border rounded">
            <h2 className="text-lg font-bold mb-4">Multi-Step Form</h2>
            {renderStep()}
        </div>
    );
};

export default MultiStepForm;
