import React from 'react';

export default function UpdatedStudent() {
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

  const handleUpdate = () => {
    console.log('Details Viewed');
  };


  return (
   <>
   <h1 className='text-3xl m-5'>Updated Students</h1>
   {
    student.map((student, index) => (
      <div key={index} className='flex justify-between bg-[#d1e5f2] w-5/6 h-32 rounded-lg shadow-lg mt-5 ml-10'>
        <div className='ml-10 mt-5'>
          <h2 className='text-xl font-semibold'>{student.name}</h2>
          <p className='text-lg'>{student.enrollmentNo}</p>
          <p className='text-lg'>{student.email}</p>
        </div>
        <div className='mt-10 mr-10'>
          <button onClick={handleUpdate} className='bg-blue-900 text-white px-4 py-2 rounded-lg mr-2'>View Updates</button>
        </div>
      </div>
    ))
   }
   </>
  );
}
