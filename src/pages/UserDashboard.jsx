import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [totalEarnings, setTotalEarnings] = useState(150); // static value
  const [showModal, setShowModal] = useState(false);
  const minClaim = 200;

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');

    setPhoneNumber(localStorage.getItem('phoneNumber') || '');
    setUserId(localStorage.getItem('userId') || '');
    setName(localStorage.getItem('name') || '');
    setReferralCode(localStorage.getItem('referralCode') || '');
  }, [navigate]);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Referral Code Copied!');
  };

  const handleClaim = () => {
    if (totalEarnings < minClaim) {
      setShowModal(true);
    } else {
      alert('Claim Processed!'); // Replace with backend call
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-[#ea5430]">Earning Dashboard</h1>

        {/* User Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-lg font-medium">{name}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-lg font-medium">{phoneNumber}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="text-sm text-gray-500">User ID</p>
            <p className="text-lg font-medium">{userId}</p>
          </div>
        </div>

        {/* Referral Code Box */}
        <div className="p-6 bg-[#fff5f3] border border-[#ea5430] rounded-lg mb-6">
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-semibold text-[#ea5430]">Your Referral Code:</p>
            <button
              onClick={handleCopy}
              className="px-4 py-1 bg-[#ea5430] text-white text-sm rounded hover:opacity-90"
            >
              Copy
            </button>
          </div>
          <p className="text-xl font-bold tracking-widest text-[#ea5430]">{referralCode}</p>
        </div>

        {/* Explanation Note */}
        <div className="bg-[#fff0eb] border-l-4 border-[#ea5430] p-4 rounded mb-6">
          <h2 className="font-semibold text-[#ea5430] mb-1">Earn 15% of Application Fees!</h2>
          <p className="text-sm text-gray-700">
            Share your referral code with friends. When someone applies using your code, you’ll earn
            <strong> 15% of their application fee</strong> instantly. It’s a great way to support your
            friends while earning real rewards. No limits, no delays — just refer and earn!
          </p>
        </div>

        {/* Earnings & Claim */}
        <div className="p-6 bg-gray-50 border rounded shadow mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Total Earnings</h3>
          <div className="text-4xl font-bold text-[#ea5430] mb-4">₹{totalEarnings}</div>
          <button
            onClick={handleClaim}
            className="bg-[#ea5430] text-white px-6 py-2 rounded hover:opacity-90"
          >
            Claim Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold text-[#ea5430] mb-2">Minimum Claim Amount</h2>
            <p className="text-sm text-gray-700 mb-4">
              You need to have at least ₹200 in your earnings to make a claim.
              Keep referring to increase your balance and unlock your earnings!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-[#ea5430] text-white rounded hover:opacity-90"
            >
              OK, Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
