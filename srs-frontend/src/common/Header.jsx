import React from 'react'
import { Link } from 'react-router'
import App from '../App'
import Adminlogin from '../Admin Dashboard/Adminlogin'
import Registration from '../Student/Registration'

export default function Header() {
    return (
        <div>
            <nav className='bg-[#4a4e69] text-white p-5 flex justify-between items-center shadow-md'>
                <h1 className='text-2xl font-semibold'>Student Record System</h1>
                <div className='flex space-x-6'>
                    <a href={<App />} >  <h2 className='cursor-pointer hover:text-[#9a8c98] transition'>Home</h2></a>
                    <a href={<Adminlogin />} >   <h2 className='cursor-pointer hover:text-[#9a8c98] transition'>Login as Admin</h2></a>
                    <a href={<Registration />} >  <h2 className='cursor-pointer hover:text-[#9a8c98] transition'>Login as Student</h2></a>
                </div>
            </nav>
        </div>
    )
}
