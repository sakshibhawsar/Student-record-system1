import React from 'react'

export default function Home() {
  return (
    <div>
      <div className='w-5/6 bg-[#f2e9e4]'>
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <div className='flex justify-evenly mt-5'>
          <div className='bg-[#9a8c98] w-1/4 h-32 rounded-lg shadow-lg'>
            <h2 className='text-center mt-3'>Student Request</h2>
            <p className='text-center mt-2'>10</p>
          </div>
          <div className='bg-[#9a8c98] w-1/4 h-32 rounded-lg shadow-lg'>
            <h2 className='text-center mt-3'>Verified Student</h2>
            <p className='text-center mt-2'>20</p>
          </div>
          <div className='bg-[#9a8c98] w-1/4 h-32 rounded-lg shadow-lg'>
            <h2 className='text-center mt-3'>Updated Student</h2>
            <p className='text-center mt-2'>30</p>
          </div>
        </div>
      </div>
    </div>
  )
}
