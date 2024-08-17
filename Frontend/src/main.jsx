import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../scss/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App data-scroll-section />} />
      <Route path='/admin/Login' element={<AdminLogin/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>

)
