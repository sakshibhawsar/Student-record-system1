import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

export default function Studentsidebar() {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-64 bg-gray-800 text-white fixed shadow-lg"
    >
      <div className="p-4 text-lg font-bold  border-b border-gray-700">
        Student
      </div>
      <ul className="mt-4 space-y-2">
        <li>
          <Link
            to=''
            className="block px-4 py-2 hover:bg-gray-700 rounded transition"
          >
            Academic Details
          </Link>
        </li>
        <li>
          <Link
            to='personal-detail'
            className="block px-4 py-2 hover:bg-gray-700 rounded transition"
          >
            Personal Details
          </Link>
        </li>
        <li>
          <Link
            to=''
            className="block px-4 py-2 hover:bg-gray-700 rounded transition"
          >
            Events
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}