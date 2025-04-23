import React from 'react';

export default function StudentVerification() {
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

  const handleView = () => {
    console.log('Details Viewed');
  };


  return (
   <>
   <h1 className='text-3xl m-5'>Verified Students</h1>
   {
    student.map((student, index) => (
      <div key={index} className='flex justify-between bg-[#f5f3f4] w-5/6 h-32 rounded-lg shadow-lg mt-5 ml-10'>
        <div className='ml-10 mt-5'>
          <h2 className='text-xl font-semibold'>{student.name}</h2>
          <p className='text-lg'>{student.enrollmentNo}</p>
          <p className='text-lg'>{student.email}</p>
        </div>
        <div className='mt-10 mr-10'>
          <button onClick={handleView} className='bg-[#4a4e69] text-white px-4 py-2 rounded-lg mr-2'>View Details</button>
        </div>
      </div>
    ))
   }
   </>
  );
}
