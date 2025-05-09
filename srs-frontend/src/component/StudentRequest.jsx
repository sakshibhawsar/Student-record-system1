import React, { useEffect, useState } from 'react';
import axiosconfig from '../config/axios.config';

export default function StudentRequest() {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [enrollmentnumber, setEnrollmentNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchPendingRequests = async () => {
      setLoading(true);
      try {
        const response = await axiosconfig.get('/pending-students', {
          name,
          enrollmentnumber,
          email
        });

        setTimeout(() => {
          if (response.status === 200) {
            setPendingRequests(response.data);
          }
          setLoading(false);
        }, 700); // simulate 2.5 sec delay
      } catch (err) {
        console.log(err);
        alert("Error fetching pending requests");
        setLoading(false);
      }
    };

    fetchPendingRequests();
  }, []);

  const handleAccept = async (studentId) => {
    try {
      const response = await axiosconfig.put(`/approve-student/${studentId}`);
      if (response.status === 200) {
        setPendingRequests(prev => prev.filter(student => student._id !== studentId));
      }
    } catch (err) {
      console.error(err);
      alert("Failed to approve student.");
    }
  };

  const handleDecline = async (studentId) => {
    try {
      await axiosconfig.delete(`/delete-student/${studentId}`);
      setPendingRequests(prev => prev.filter(student => student._id !== studentId));
    } catch (err) {
      console.error(err);
      alert("Failed to decline student.");
    }
  };

  return (
    <>
      <h1 className='text-3xl m-5'>Student Requests</h1>

      {loading ? (
        <div className="flex justify-center items-center mt-20">
          <div className="w-12 h-12 border-4 border-[#4a4e69] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : pendingRequests.length === 0 ? (
        <p className="ml-10 text-lg text-gray-500">No pending requests found.</p>
      ) : (
        pendingRequests.map((student, index) => (
          <div key={index} className='flex justify-between bg-[#d9dcd6] w-5/6 h-32 rounded-lg shadow-lg mt-5 ml-10'>
            <div className='ml-10 mt-5'>
              <h2 className='text-xl font-semibold'>{student.name}</h2>
              <p className='text-lg'>{student.enrollmentnumber}</p>
              <p className='text-lg'>{student.email}</p>
            </div>
            <div className='mt-10 mr-10'>
              <button onClick={() => handleAccept(student._id)} className='bg-green-500 text-white px-4 py-2 rounded-lg mr-2'>Accept</button>
              <button onClick={() => handleDecline(student._id)} className='bg-red-500 text-white px-4 py-2 rounded-lg'>Decline</button>
            </div>
          </div>
        ))
      )}
    </>
  );
}
