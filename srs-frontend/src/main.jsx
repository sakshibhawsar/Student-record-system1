import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './component/Home.jsx'
import UpdatedStudent from './component/UpdatedStudent.jsx'
import StudentVerification from './component/StudentVerification.jsx'
import StudentRequest from './component/StudentRequest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='/StudentRequest' element={<StudentRequest/>} />
        <Route path='/VerifiedStudent' element={<StudentVerification/>} />
        <Route path='/UpdatedStudent' element={<UpdatedStudent/>} />
    
      </Route>
    </Routes>
    </BrowserRouter> */}
    <App />
  </StrictMode>,
)
