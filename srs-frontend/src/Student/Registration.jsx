import React, { useState } from 'react';
import signupIllustration from '../assets/logingirl.png'; // Ensure correct path
import axioscongig from '../config/axios.config'; // Ensure correct path
//import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [enrollmentnumber, setEnrollmentNumber] = useState('');
    const [course, setCourse] = useState('');
    const [error, setError] = useState('');
    //const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const register = await axioscongig.post('/register', {
                name,
                email,
                enrollmentnumber,
                course
            })
            console.log(register);
            setName('');
            setEmail('');
            setEnrollmentNumber('');
            setCourse('');
            if (register.status === 201) {
                alert("Registration successful,Your account is under review.")
            }
        }
        catch (err) {
            console.log(err);
            setError("Registration failed. Please try again.");
        }
    }
    return (
        <div className="h-screen flex">
            {/* Right Side - Illustration */}
            <div className=" bg-white flex justify-center items-center">
                <img src={signupIllustration} alt="Signup Illustration" className="w-3/4" />
            </div>
            <div className='bg-gray-400 w-[1px] h-screen'>
            </div>
            {/* Left Side - Signup Form */}
            <div className="w-1/2   flex flex-col justify-center items-center bg-white p-10">
                <h2 className="text-3xl font-bold mb-6">Create an Account</h2>
                <p className="text-gray-500 mb-6">Please enter your details</p>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email address"
                    className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Course"
                    className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />

                <input
                    type="Enrollment Number"
                    placeholder="enrollmentnumber"
                    className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={enrollmentnumber}
                    onChange={(e) => setEnrollmentNumber(e.target.value)}
                />



                {error && <p className="text-red-500">{error}</p>}

                <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600" onClick={handleSignup}>
                    Sign Up
                </button>

                <p className="mt-6">
                    Already have an account? <a href='st-login' className="text-blue-500">Login</a>
                </p>
            </div>


        </div>
    )
}
