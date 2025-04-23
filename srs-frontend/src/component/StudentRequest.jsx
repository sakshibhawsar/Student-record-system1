import React from 'react';

export default function StudentRequest() {
  const student = [{
    enrollmentNo: '123456',
    name: 'John Doe',
    email: 'johndoe@example.com',
  },
  {
    enrollmentNo: '789012',
    name: 'Jane Smith',
    email: 'ehrtrtrt'}
  ];

  const handleAccept = () => {
    console.log('Request Accepted');
  };

  const handleDecline = () => {
    console.log('Request Declined');
  };

  return (
   <>
   <h1 className='text-3xl m-5'>Student Requests</h1>
   {
    student.map((student, index) => (
      <div key={index} className='flex justify-between bg-[#d9dcd6] w-5/6 h-32 rounded-lg shadow-lg mt-5 ml-10'>
        <div className='ml-10 mt-5'>
          <h2 className='text-xl font-semibold'>{student.name}</h2>
          <p className='text-lg'>{student.enrollmentNo}</p>
          <p className='text-lg'>{student.email}</p>
        </div>
        <div className='mt-10 mr-10'>
          <button onClick={handleAccept} className='bg-green-500 text-white px-4 py-2 rounded-lg mr-2'>Accept</button>
          <button onClick={handleDecline} className='bg-red-500 text-white px-4 py-2 rounded-lg'>Decline</button>
        </div>
      </div>
    ))
   }
   </>
  );
}
