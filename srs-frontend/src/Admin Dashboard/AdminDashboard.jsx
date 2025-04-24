//import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, Outlet } from "react-router";

// import Studentdashboard from "./Student/Studentdashboard";

function AdminDashboard() {
    return (
        <div>
            <div className='flex  h-screen'>
                <div className='w-1/6 bg-[#4a4e69]'>
                    <h2 className='text-center mt-3 text-xl font-semibold mb-6 text-white'>College Erp</h2>
                    <ul className='mt-3 text-lg ml-10 text-white'>
                        <Link to=''> <li className='mb-3'><i class="fa-solid fa-house"></i> &nbsp; Home</li></Link>
                        <Link to='StudentRequest'>
                            <li className='mb-3'><i class="fa-solid fa-user-plus"></i> &nbsp; Student Request</li></Link>
                        <Link to='VerifiedStudent'> <li className='mb-3'><i class="fa-solid fa-user-check"></i> &nbsp; Verified Student</li></Link>
                        <Link to='UpdatedStudent'><li className='mb-3'><i class="fa-solid fa-rotate"></i> &nbsp; Updated Student</li></Link>
                    </ul>
                </div>
                <div className='w-5/6 bg-[#f2e9e4]'>
                    <Outlet />
                </div>
            </div>

        </div>
    );
}

export default AdminDashboard;