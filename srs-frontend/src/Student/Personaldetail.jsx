import React from "react";
import { motion } from "framer-motion";

const Personaldetail = () => {
    const details = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+1234567890",
        aadhaar: "1234-5678-9012",
        tenthMarks: "95%",
        twelfthMarks: "92%",
        address: "123 Main Street, City, Country",
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <motion.div
                className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Details</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-gray-700 font-medium">Full Name</h3>
                        <p className="text-gray-800">{details.name}</p>
                    </div>
                    <div>
                        <h3 className="text-gray-700 font-medium">Email Address</h3>
                        <p className="text-gray-800">{details.email}</p>
                    </div>
                    <div>
                        <h3 className="text-gray-700 font-medium">Phone Number</h3>
                        <p className="text-gray-800">{details.phone}</p>
                    </div>
                    <div>
                        <h3 className="text-gray-700 font-medium">Aadhaar Number</h3>
                        <p className="text-gray-800">{details.aadhaar}</p>
                    </div>
                    <div>
                        <h3 className="text-gray-700 font-medium">10th Marks</h3>
                        <p className="text-gray-800">{details.tenthMarks}</p>
                    </div>
                    <div>
                        <h3 className="text-gray-700 font-medium">12th Marks</h3>
                        <p className="text-gray-800">{details.twelfthMarks}</p>
                    </div>
                    <div>
                        <h3 className="text-gray-700 font-medium">Address</h3>
                        <p className="text-gray-800">{details.address}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Personaldetail;