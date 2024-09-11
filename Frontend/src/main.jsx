import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../scss/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './Pages/AdminLogin/AdminLogin';

import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import { Provider } from 'react-redux'
import { store } from '../Redux/ReduxStore/store.js';
import ProductsPage from './Pages/Product/AllProductsPage.jsx';
import ProductPage from './Components/ProductPage/ProductPage';
import SearchPageResult from './Pages/SearchPageResult.jsx/SearchPageResult.jsx';
import Mens from './Pages/Category Section/Category.jsx';



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/admin/Login' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/allProduct' element={<ProductsPage />} />
        <Route path='/product/:productId' element={<ProductPage />} />
        <Route path='/search' element={<SearchPageResult/>} />
        <Route path='/category/:category' element={<Mens/>} />
      </Routes>
    </BrowserRouter>
  </Provider>

)
