import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedPhoneNumber = localStorage.getItem('phoneNumber'); 
    const storedUserId = localStorage.getItem('userId');

    if (!token) {
      navigate('/login');
      return;
    }

    setPhoneNumber(storedPhoneNumber);
    setUserId(storedUserId);

    // Check if user already exists
const checkUser = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/users/get-user', {
      params: { userId: storedUserId } // Pass userId as query param
    });
    localStorage.setItem('name', res.data.name);
    localStorage.setItem('referralCode', res.data.referralCode);
    navigate('/');
  } catch (err) {
    setShowForm(true); // Show form if user not found
    setLoading(false);
  }
};

    if (storedUserId) checkUser();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users', {
        userId,
        name,
        phone: phoneNumber
      });
      localStorage.setItem('name', res.data.name);
      localStorage.setItem('referralCode', res.data.referralCode);
      navigate('/');
    } catch (err) {
      alert('Something went wrong while creating user.');
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Complete Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              disabled
              className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDashboard;
