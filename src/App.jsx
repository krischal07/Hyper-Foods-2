import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Order from "./pages/order/Order"
import Cart from "./pages/cart/Cart"
import Dashboard from "./pages/admin/dashboard/Dashboard" 
import NoPage from "./pages/nopage/NoPage"
import MyState from './context/data/myState'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import Productinf from './pages/productInfo/Productinf'
import AddProduct from './pages/admin/page/AddProduct'
import UpdateProduct from './pages/admin/page/UpdateProduct'



const App = () => {
// This is the main
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<Order />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/productInfo/:id' element={<Productinf />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/updateproduct' element={<UpdateProduct />} />

          <Route path='/*' element={<NoPage />} git/>
        </Routes>
      </Router>
    </MyState>
   
  )
}

export default App