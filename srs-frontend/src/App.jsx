import React from 'react'
// import Homepage from './for-both/Homepage'
import { Link, Outlet } from 'react-router'
// import Homepage from './for-both/Homepage'

export default function App() {
  return (
    <div>
      <nav className='bg-[#4a4e69] text-white p-5 flex justify-between items-center shadow-md'>
        <h1 className='text-2xl font-semibold'>Student Record System</h1>
        <div className='flex space-x-6'>
          <Link to='/' ><h2 className='cursor-pointer hover:text-[#9a8c98] transition'>Home</h2></Link>
          <Link to='/admin-login'><h2 className='cursor-pointer hover:text-[#9a8c98] transition'>Login as Admin</h2></Link>
          <Link to='/student-login'> <h2 className='cursor-pointer hover:text-[#9a8c98] transition'>Login as Student</h2></Link>
        </div>
      </nav>
      <Outlet />

    </div>
  )
}
