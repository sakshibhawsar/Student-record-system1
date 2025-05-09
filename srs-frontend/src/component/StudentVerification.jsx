import React, { useEffect, useState } from 'react';
import axiosconfig from '../config/axios.config';
import { ToastContainer, toast } from 'react-toastify';
import { ImSpinner2 } from 'react-icons/im';
import 'react-toastify/dist/ReactToastify.css';

export default function StudentVerification() {
  const [approvedStudents, setApprovedStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('');
  const [enrollmentnumber, setEnrollmentNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchApprovedStudents = async () => {
      setLoading(true);
      try {
        const response = await axiosconfig.get('/approved-students', {
          params: { name, enrollmentnumber, email },
        });

        // Simulate 2 second delay
        setTimeout(() => {
          if (response.status === 200) {
            setApprovedStudents(response.data);
            if (response.data.length === 0) {
              toast.info("No approved students found", { autoClose: 2500 });
            }
          }
          setLoading(false);
        }, 2000);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch approved students", { autoClose: 3000 });
        setLoading(false);
      }
    };

    fetchApprovedStudents();
  }, []);

  return (
    <>
      <ToastContainer position="top-right" />
      <h1 className="text-3xl font-semibold text-[#4a4e69] m-5">Verified Students</h1>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <ImSpinner2 className="animate-spin text-4xl text-[#4a4e69]" />
        </div>
      ) : approvedStudents.length === 0 ? (
        <p className="ml-10 text-gray-500 text-lg">No verified students to display.</p>
      ) : (
        approvedStudents.map((student, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-[#f5f3f4] w-5/6 h-32 rounded-lg shadow-lg mt-5 ml-10 px-10"
          >
            <div>
              <h2 className="text-xl font-semibold">{student.name}</h2>
              <p className="text-lg">{student.enrollmentnumber}</p>
              <p className="text-lg">{student.email}</p>
            </div>
            <button className="bg-[#4a4e69] text-white px-4 py-2 rounded-lg hover:bg-[#6c6380] transition">
              View Details
            </button>
          </div>
        ))
      )}
    </>
  );
}
