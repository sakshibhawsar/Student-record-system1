import { motion } from 'framer-motion';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Uncomment if needed

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5}}
    >
      <div className="flex h-screen">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-1/6 bg-violet-400"
        >
          <h2 className="text-center mt-1 text-xl font-semibold">College Erp</h2>
          <ul className="mt-3 text-lg">
            <li className="mb-3"><i className="fa-solid fa-house"></i> &nbsp; Home</li>
            <li className="mb-3"><i className="fa-solid fa-user-plus"></i> &nbsp; Student Request</li>
            <li className="mb-3"><i className="fa-solid fa-user-check"></i> &nbsp; Verified Student</li>
            <li className="mb-3"><i className="fa-solid fa-rotate"></i> &nbsp; Updated Student</li>
          </ul>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-5/6 ml-10"
        >
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <div className="flex justify-evenly mt-5">
            {[
              { title: "Student Request", value: 10 },
              { title: "Verified Student", value: 20 },
              { title: "Updated Student", value: 30 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className="bg-blue-300 w-1/4 h-32 rounded-lg shadow-lg"
              >
                <h2 className="text-center mt-3">{item.title}</h2>
                <p className="text-center mt-2">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default App;
