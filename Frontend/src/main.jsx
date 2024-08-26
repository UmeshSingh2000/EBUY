import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../scss/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './Pages/AdminLogin/AdminLogin';

import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import { Provider } from 'react-redux'
import { store } from '../Redux/ReduxStore/store.js';
import ProductsPage from './Pages/Product/ProductsPage.jsx';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/admin/Login' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/allProduct' element={<ProductsPage/>} />
      </Routes>
    </BrowserRouter>
  </Provider>

)
