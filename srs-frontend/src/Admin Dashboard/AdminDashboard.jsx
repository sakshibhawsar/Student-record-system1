import { Link, Outlet } from "react-router-dom"; // make sure you're using 'react-router-dom'

function AdminDashboard() {
    return (
        <div className='flex h-screen'>
            {/* Sidebar */}
            <div className='w-1/6 h-screen fixed top-0 left-0 bg-[#4a4e69] text-white'>
                <h2 className='text-center mt-3 text-xl font-semibold mb-6'>College ERP</h2>
                <ul className='mt-3 text-lg ml-10'>
                    <li className='mb-3'>
                        <Link to=''><i className="fa-solid fa-house"></i> &nbsp; Home</Link>
                    </li>
                    <li className='mb-3'>
                        <Link to='StudentRequest'><i className="fa-solid fa-user-plus"></i> &nbsp; Student Request</Link>
                    </li>
                    <li className='mb-3'>
                        <Link to='VerifiedStudent'><i className="fa-solid fa-user-check"></i> &nbsp; Verified Student</Link>
                    </li>
                    <li className='mb-3'>
                        <Link to='UpdatedStudent'><i className="fa-solid fa-rotate"></i> &nbsp; Updated Student</Link>
                    </li>
                </ul>
            </div>

            {/* Main content */}
            <div className='ml-[16.666667%] w-5/6 h-screen overflow-y-auto bg-[#f2e9e4] p-4'>
                <Outlet />
            </div>
        </div>
    );
}

export default AdminDashboard;
