import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const jobRoles = {
  "Field Survey Executive": {
    location: "Bihar (Field Work)",
    work: "Booth level survey, voter data collection, and outreach.",
    salary: "₹12,000 - ₹18,000/month + Performance Incentives",
    tenure: "5–6 months",
    fee: 1,
  },
  "Telecalling Executive": {
    location: "Work from Home",
    work: "Calling voters and data entry.",
    salary: "₹10,000 - ₹14,000/month + Incentives on Conversion",
    tenure: "5–6 months",
    fee: 300,
  },
  "Social Media Manager": {
    location: "Bihar (Field/Studio Work)",
    work: "Managing outreach on Facebook, WhatsApp, Instagram.",
    salary: "₹12,500 - ₹18,000/month + Bonus",
    tenure: "5–6 months",
    fee: 400,
  },
  "Area Coordinator": {
    location: "Bihar (District-wise)",
    work: "Supervising teams, reporting progress, and area-level control.",
    salary: "₹18,000 - ₹22,000/month + Team Performance Incentives",
    tenure: "5–6 months",
    fee: 500,
  },
  "Video Editor": {
    location: "Bihar (Field/Studio Work)",
    work: "Editing campaign videos, creating clips and ads.",
    salary: "₹15,000 - ₹22,000/month + Bonus",
    tenure: "5–6 months",
    fee: 450,
  },
  "Graphic Designer": {
    location: "Bihar (Field/Studio Work)",
    work: "Designing banners, social media posts.",
    salary: "₹12,000 - ₹18,000/month + Bonus",
    tenure: "5–6 months",
    fee: 400,
  },
  "Electronic Media Anchor": {
    location: "Bihar (Field/Studio Work)",
    work: "Hosting live discussions, debates & social events.",
    salary: "₹18,000 - ₹25,000/month + On-Air Bonus",
    tenure: "5–6 months",
    fee: 500,
  },
};

const ApplyNow = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const roleDetails = jobRoles[category] || {};
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    mobile: localStorage.getItem('mobile') || '',
    altMobile: '',
    email: '',
    dob: '',
    gender: '',
    address: '',
    district: '',
    state: '',
    category: '',
    qualification: '',
    experience: '',
    aadhar: '',
    hasReferral: 'no',
    referralCode: '',
    referralValid: false,
    agree: false,
  });

  const [fee, setFee] = useState(roleDetails.fee || 0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedPhoneNumber = localStorage.getItem('phoneNumber');
    setPhoneNumber(storedPhoneNumber);
    if (!token) navigate('/login');
  }, [navigate]);

  useEffect(() => {
    const baseFee = roleDetails.fee || 0;
    const discounted = formData.referralValid ? baseFee * 0.85 : baseFee;
    setFee(Math.round(discounted));
  }, [formData.referralValid, category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const checkReferralCode = () => {
    if (formData.referralCode.trim() === 'REFER15') {
      alert('Referral code is valid!');
      setFormData(prev => ({ ...prev, referralValid: true }));
    } else {
      alert('Invalid referral code!');
      setFormData(prev => ({ ...prev, referralValid: false }));
    }
  };

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert('Failed to load Razorpay SDK');
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:5000/api/payment/create-order', { amount: fee });
      const options = {
        key: "rzp_test_IFv0P1wWi2CvpJ",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        name: 'Application Payment',
        description: 'Form Fee',
        handler: async (response) => {
          const verifyRes = await axios.post('http://localhost:5000/api/payment/verify-payment', {
            ...formData,
            category,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyRes.data.success) {
            alert('Payment successful and form submitted!');
            navigate('/thank-you');
          } else {
            alert('Payment verification failed!');
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert('Payment failed!');
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 md:px-8">
      <div className="max-w-full mx-auto bg-white shadow-md p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-[#ea5430]">Apply for: {category}</h2>

        {roleDetails && (
          <div className="mb-6 p-4 border rounded bg-gray-50">
            <h3 className="text-xl font-semibold text-[#ea5430] mb-2">Job Details</h3>
            <p><strong>Location:</strong> {roleDetails.location}</p>
            <p><strong>Work:</strong> {roleDetails.work}</p>
            <p><strong>Salary:</strong> {roleDetails.salary}</p>
            <p><strong>Tenure:</strong> {roleDetails.tenure}</p>
            <p><strong>Application Fee:</strong> ₹{roleDetails.fee}</p>
            {formData.referralValid && (
              <p className="text-green-600"><strong>Discounted Fee:</strong> ₹{fee} (15% off with referral)</p>
            )}
          </div>
        )}

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input disabled value={category} className="form-field" placeholder="Post Applied For" />
          <input name="name" onChange={handleChange} placeholder="Candidate Name" className="form-field" />
          <input name="fatherName" onChange={handleChange} placeholder="Father's Name" className="form-field" />
          <input disabled value={phoneNumber} className="form-field" placeholder="Mobile Number" />
          <input name="altMobile" onChange={handleChange} placeholder="Secondary Mobile Number" className="form-field" />
          <input name="email" type="email" onChange={handleChange} placeholder="Email ID" className="form-field" />
          <input name="dob" type="date" onChange={handleChange} className="form-field" />

          <div className="form-field">
            <label className="block font-medium mb-1">Gender:</label>
            <div className="flex gap-6">
              {['Male', 'Female', 'Other'].map(g => (
                <label key={g} className="flex items-center gap-2">
                  <input type="radio" name="gender" value={g} onChange={handleChange} />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <textarea name="address" onChange={handleChange} placeholder="Full Address" className="form-field" />
          <input name="district" onChange={handleChange} placeholder="District" className="form-field" />
          <input name="state" onChange={handleChange} placeholder="State" className="form-field" />

          <select name="category" onChange={handleChange} className="form-field">
            <option value="">Select Category</option>
            {['GEN', 'OBC', 'SC', 'ST', 'EWS'].map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>

          <select name="qualification" onChange={handleChange} className="form-field">
            <option value="">Select Qualification</option>
            <option value="below10th">Below 10th</option>
            <option value="Secondary">Secondary (10th Pass)</option>
            <option value="Higher Secondary">Higher Secondary (12th Pass)</option>
            <option value="Graduate">Graduate</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="PhD">PhD</option>
          </select>

          <input name="experience" onChange={handleChange} placeholder="Work Experience (optional)" className="form-field" />
          <input name="aadhar" onChange={handleChange} placeholder="Aadhar Number" className="form-field" />

          <div className="form-field">
            <label className="block font-medium mb-1">Do you have a referral code?</label>
            <div className="flex gap-6">
              {['yes', 'no'].map(opt => (
                <label key={opt} className="flex items-center gap-2">
                  <input type="radio" name="hasReferral" value={opt} checked={formData.hasReferral === opt} onChange={handleChange} />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {formData.hasReferral === 'yes' && (
            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
              <input name="referralCode" placeholder="Referral Code" onChange={handleChange} className="form-field flex-1" />
              <button type="button" onClick={checkReferralCode} className="bg-[#ea5430] text-white px-4 py-2 rounded">
                Check
              </button>
            </div>
          )}

          <div className="flex items-start gap-2">
            <input type="checkbox" id="agree" checked={formData.agree || false} onChange={(e) => setFormData(prev => ({ ...prev, agree: e.target.checked }))} className="mt-1" />
            <label htmlFor="agree" className="text-sm text-gray-700">
              I hereby declare that the information provided is true and correct to the best of my knowledge.
            </label>
          </div>

          <button
            type="button"
            disabled={!formData.agree}
            onClick={handlePayment}
            className={`w-full py-3 rounded text-lg font-medium ${formData.agree ? 'bg-[#ea5430] text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            Pay ₹{fee}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
