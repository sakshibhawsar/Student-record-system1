import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// import Home from './component/Home.jsx'
import UpdatedStudent from './component/UpdatedStudent.jsx'
import StudentVerification from './component/StudentVerification.jsx'
import StudentRequest from './component/StudentRequest.jsx'
import Homepage from './for-both/Homepage.jsx'
import Adminlogin from './Admin Dashboard/Adminlogin.jsx'
import Registration from './Student/Registration.jsx'
import Login from './Student/Login.jsx'
import AdminDashboard from './Admin Dashboard/AdminDashboard.jsx'
import Home from './component/Home.jsx'
import Studentdashboard from './Student/Studentdashboard.jsx'
import Academicdetail from './Student/Academicdetail.jsx'
import Personaldetail from './Student/Personaldetail.jsx'
// import EditProfile from './Student/Editprofile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="admin-login" element={<Adminlogin />} />
          <Route path="student-login" element={<Registration />} />
          <Route path="st-login" element={<Login />} />

        </Route>
        <Route path="/student-dashboard" element={<Studentdashboard />} >
          <Route index element={<Academicdetail />} />
          <Route path="personal-detail" element={<Personaldetail />} />
        </Route>
        {/* <Route path='/edit-profile' element={<EditProfile />} /> */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route index element={<Home />} />

          <Route path="StudentRequest" element={<StudentRequest />} />
          <Route path="VerifiedStudent" element={<StudentVerification />} />
          <Route path="UpdatedStudent" element={<UpdatedStudent />} />
        </Route>

        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
