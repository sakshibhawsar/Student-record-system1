import React, { useState } from 'react';
import loginIllustration from '../assets/logingirl.png';
import axiosconfig from '../config/axios.config';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axiosconfig.post('/login', { email, password });

            if (res.status === 200) {
                const student = res.data.student;

                if (!student.isApproved) {
                    setError("Your account is not approved by admin yet.");
                    return;
                }

                alert("Login successful");

                // Pass only if approved
                navigate("/student-dashboard", { state: { student } });
            }

            setEmail('');
            setPassword('');
        } catch (err) {
            console.log(err);
            setError("Login failed. Please try again.");
        }
    };

    return (
        <div className="h-screen flex">

            {/* Right Side - Illustration */}
            <div className=" bg-white flex justify-center items-center">
                <img src={loginIllustration} alt="Login Illustration" className="w-3/4" />
            </div>

            <div className='bg-gray-400 w-[1px] h-screen'>
            </div>

            {/* Left Side - Login Form */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
                <h2 className="text-3xl font-bold mb-6">Welcome Back</h2>
                <p className="text-gray-500 mb-6">Please enter your details</p>

                <input
                    type="email"
                    placeholder="Email address"
                    className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="text-red-500">{error}</p>}

                <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600" onClick={handleLogin}>
                    Sign In
                </button>

                <p className="mt-6">
                    Don&apos;t have an account? <a href="student-login" className="text-blue-500">Sign up</a>
                </p>
            </div>


        </div>
    );
}