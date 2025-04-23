import React from 'react';

export default function Studentdashboard() {
  return (
    <div className="min-h-screen bg-[#f2e9e4] flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-[#4a4e69] mb-2 text-center">Student Profile Page</h1>
      <p className="text-[#22223b] mb-8 text-center">A responsive student profile design in sync with the admin dashboard.</p>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-1/3 flex flex-col items-center text-center border border-[#4a4e69]">
          <div className="bg-[#4a4e69] p-1 rounded-full mb-4">
            <div className="bg-white w-24 h-24 rounded-full"></div>
          </div>
          <h2 className="text-xl font-semibold text-[#4a4e69] mb-2">Ishmam Ahasan Samin</h2>
          <div className="text-sm text-[#22223b] space-y-1 mb-4">
            <p><strong>Student ID:</strong> 321000001</p>
            <p><strong>Class:</strong> 4</p>
            <p><strong>Section:</strong> A</p>
          </div>
          <button className="mt-2 px-4 py-2 bg-[#4a4e69] text-white rounded-lg shadow hover:bg-[#3b3f58] transition">
            Edit Profile
          </button>
        </div>

        {/* Info Sections */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* General Info */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-[#4a4e69]">
            <h3 className="text-lg font-semibold text-[#4a4e69] mb-4">🗂 General Information</h3>
            <table className="w-full text-left text-[#22223b]">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Roll</td>
                  <td className="py-2 px-2">:</td>
                  <td className="py-2">125</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Academic Year</td>
                  <td className="py-2 px-2">:</td>
                  <td className="py-2">2020</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Gender</td>
                  <td className="py-2 px-2">:</td>
                  <td className="py-2">Male</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Religion</td>
                  <td className="py-2 px-2">:</td>
                  <td className="py-2">Group</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Blood</td>
                  <td className="py-2 px-2">:</td>
                  <td className="py-2">B+</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Other Info */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-[#4a4e69]">
            <h3 className="text-lg font-semibold text-[#4a4e69] mb-4">📝 Other Information</h3>
            <p className="text-sm text-[#22223b]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
