import React from 'react'

export default function Studentdashboard() {
  return (
    <div className='bg-[#f2e9e4] h-screen'>
      <h1 className=' text-3xl'>Student Profile</h1>
       <div className='bg-[#4a4e69] w-1/5 h-fit text-white'>
       <div className='flex justify-center items-center p-2'>
          <div className='bg-white w-16 h-16 rounded-full'></div>
       </div>
        <h1>Student Id:</h1>
        <h2>Branch:</h2>
        <h2>Year/sem:</h2>
       </div>
    </div>
  )
}
