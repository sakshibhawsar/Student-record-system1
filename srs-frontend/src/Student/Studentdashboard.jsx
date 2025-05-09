import React from 'react';
import Studentsidebar from './Studentsidebar';
import { Outlet } from 'react-router';
import { motion } from 'framer-motion';



export default function Studentdashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <motion.div
        className="w-1/4 bg-gray-800 text-white"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Studentsidebar />
      </motion.div>
      {/* Main Content */}
      <motion.div
        className="w-3/4 p-6 bg-gray-100 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
}
