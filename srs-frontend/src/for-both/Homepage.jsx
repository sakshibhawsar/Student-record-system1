import React from 'react';

export default function Homepage() {
  return (
    <div>
      <nav className='bg-[#4a4e69] text-white p-5 flex justify-between items-center shadow-md'>
        <h1 className='text-2xl font-semibold'>Student Record System</h1>
        <div className='flex space-x-6'>
          <h2 className='cursor-pointer hover:text-[#9a8c98] transition'>Home</h2>
          <h2 className='cursor-pointer hover:text-[#9a8c98] transition'>Login as Admin</h2>
          <h2 className='cursor-pointer hover:text-[#9a8c98] transition'>Login as Student</h2>
        </div>
      </nav>

      <main className='bg-[#f2e9e4] min-h-screen flex items-center justify-center p-4'>
        <div className='bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-10 text-center border-t-8 border-[#4a4e69]'>
          <h1 className='text-3xl font-bold text-[#4a4e69] mb-4'>Welcome to the Student Record System</h1>
          <p className='text-gray-700 text-lg mb-2'>Easily manage and access student records with our streamlined platform.</p>
          <p className='text-gray-700 text-lg mb-2'>Navigate through the portal using the menu above.</p>
          <p className='text-gray-700 text-lg mb-2'>Admins can update records, while students can view their academic details.</p>
          <p className='text-gray-700 text-lg mt-4'>For support, please reach out to our helpdesk.</p>
          <p className='text-[#9a8c98] mt-6 italic'>Thank you for visiting!</p>
        </div>
      </main>
    </div>
  );
}
