import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    termsAndCondition: '',
    signatury: '',
    businessLogo: null,
    brandAppLogo: null,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Form submitted:', formData);
      navigate('/form-summary', { state: { formData } });
    }
  };

  const validateStep1 = () => {
    const { salutation, gender, name, email, phone, otp, emailOtp } = formData;
    if (!salutation || !gender || !name || !email || !phone || !otp || !emailOtp) {
      alert('Please fill all fields in Step 1');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const { businessType, businessName, gstNo, address1, city, state, country, zipCode } = formData;
    if (!businessType || !businessName || !gstNo || !address1 || !city || !state || !country || !zipCode) {
      alert('Please fill all fields in Step 2');
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    const { documents1, documents2, gstCertification, workOrder, termsAndCondition, signatury, businessLogo, brandAppLogo } = formData;
    if (!documents1 || !documents2 || !gstCertification || !workOrder || !termsAndCondition || !signatury || !businessLogo || !brandAppLogo) {
      alert('Please fill all fields in Step 3');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(step + 1);
    } else if (step === 2 && validateStep2()) {
      setStep(step + 1);
    } else if (step === 3 && validateStep3()) {
      console.log('Form submitted:', formData);
      navigate('/form-summary', { state: { formData } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-8 flex justify-between">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step >= num ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="salutation"
                  placeholder="Salutation"
                  className="rounded-md border p-2"
                  value={formData.salutation}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  className="rounded-md border p-2"
                  value={formData.gender}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full rounded-md border p-2"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-md border p-2"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full rounded-md border p-2"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="otp"
                placeholder="OTP"
                className="w-full rounded-md border p-2"
                value={formData.otp}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="emailOtp"
                placeholder="Email OTP"
                className="w-full rounded-md border p-2"
                value={formData.emailOtp}
                onChange={handleInputChange}
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <input
                type="text"
                name="businessType"
                placeholder="Business type"
                className="w-full rounded-md border p-2"
                value={formData.businessType}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="businessName"
                placeholder="Business name"
                className="w-full rounded-md border p-2"
                value={formData.businessName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="gstNo"
                placeholder="GST No"
                className="w-full rounded-md border p-2"
                value={formData.gstNo}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address1"
                placeholder="Address"
                className="w-full rounded-md border p-2"
                value={formData.address1}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address2"
                placeholder="Address"
                className="w-full rounded-md border p-2"
                value={formData.address2}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full rounded-md border p-2"
                value={formData.city}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                className="w-full rounded-md border p-2"
                value={formData.state}
                onChange={handleInputChange}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="rounded-md border p-2"
                  value={formData.country}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  className="rounded-md border p-2"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <label className="mb-2 block text-sm font-medium">DOCUMENT'S (Attachment)</label>
                <input
                  type="file"
                  name="documents1"
                  className="w-full"
                  onChange={handleInputChange}
                />
              </div>
              <div className="rounded-md border p-4">
                <label className="mb-2 block text-sm font-medium">DOCUMENT'S 2 (Attachment)</label>
                <input
                  type="file"
                  name="documents2"
                  className="w-full"
                  onChange={handleInputChange}
                />
              </div>
              <div className="rounded-md border p-4">
                <label className="mb-2 block text-sm font-medium">GST certification (Attachment)</label>
                <input
                  type="file"
                  name="gstCertification"
                  className="w-full"
                  onChange={handleInputChange}
                />
              </div>
              <div className="rounded-md border p-4">
                <label className="mb-2 block text-sm font-medium">Work order (Attachment)</label>
                <input
                  type="file"
                  name="workOrder"
                  className="w-full"
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="text"
                name="termsAndCondition"
                placeholder="Terms & Condition"
                className="w-full rounded-md border p-2"
                value={formData.termsAndCondition}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="signatury"
                placeholder="Signature"
                className="w-full rounded-md border p-2"
                value={formData.signatury}
                onChange={handleInputChange}
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md border p-4">
                  <label className="mb-2 block text-sm font-medium">Business logo</label>
                  <input
                    type="file"
                    name="businessLogo"
                    className="w-full"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="rounded-md border p-4">
                  <label className="mb-2 block text-sm font-medium">Brand app logo</label>
                  <input
                    type="file"
                    name="brandAppLogo"
                    className="w-full"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto rounded-md bg-blue-200 px-4 py-2 text-blue-700 hover:bg-blue-300"
            >
              {step === 3 ? 'Submit' : 'Save & Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MultiStepForm;
