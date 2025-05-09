import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Academicdetail() {
    const location = useLocation();
    const student = location.state?.student;

    useEffect(() => {
        if (student) {
            console.log("Student Data:", student);
        }
    }, [student]);

    // ✅ Show error if student is missing or not approved
    if (!student || !student.isApproved) {
        return (
            <div className="p-6 bg-red-100 text-red-600 font-semibold rounded">
                Student data not found or not approved. Please login again.
            </div>
        );
    }

    // ✅ If approved and present, show the details
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Academic Details</h1>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium text-gray-800">{student.name} {student.lastname}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Enrollment Number:</span>
                    <span className="font-medium text-gray-800">{student.enrollmentnumber}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium text-gray-800">{student.email}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Course:</span>
                    <span className="font-medium text-gray-800">{student.course}</span>
                </div>
            </div>
        </div>
    );
}
