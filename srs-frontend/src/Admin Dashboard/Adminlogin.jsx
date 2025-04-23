import React, { useState } from 'react';

export default function Adminlogin() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <div className='relative min-h-screen bg-[#f2e9e4] flex items-center justify-center p-4'>
      {/* Admin Login Form */}
      <div
        className={`bg-white rounded-2xl shadow-xl p-10 w-full max-w-md text-center border-t-8 border-[#4a4e69] transition duration-300 ${
          showModal ? 'blur-sm opacity-60' : ''
        }`}
      >
        <h2 className='text-2xl font-bold text-[#4a4e69] mb-6'>Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          className='w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a4e69]'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          onClick={() => setShowModal(true)}
          className='w-full bg-[#4a4e69] text-white py-3 rounded-lg font-semibold hover:bg-[#6c6380] transition'
        >
          Enter Secret Code
        </button>
      </div>

      {/* Popup Modal - Positioned absolutely on top */}
      {showModal && (
        <div className='absolute inset-0 flex items-center justify-center z-50'>
          <div className='bg-white rounded-xl shadow-xl p-6 w-full max-w-sm text-center border border-[#4a4e69]'>
            <h3 className='text-lg font-semibold text-[#4a4e69] mb-4'>Enter Secret Code</h3>
            <input
              type="password"
              placeholder="Secret Code"
              className='w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a4e69]'
            />
            <div className='flex justify-between space-x-4'>
              <button
                onClick={() => setShowModal(false)}
                className='w-full bg-gray-300 py-2 rounded-lg hover:bg-gray-400 transition'
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle secret code submission here
                  setShowModal(false);
                }}
                className='w-full bg-[#4a4e69] text-white py-2 rounded-lg hover:bg-[#6c6380] transition'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
