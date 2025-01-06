import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import Productinf from "./pages/productInfo/Productinf";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import AllProducts from "./pages/allproducts/AllProducts";
import Tickets from "./pages/Tickets/Tickets";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadCarasoule from "./pages/admin/page/Carasoule/UploadCarasoule";
import LiquorInfo from "./pages/liqrouinfo/LiquorInfo";

// Wrap your Home route with PageWithTawk
const PageWithTawk = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/676a867649e2fd8dfefcf43c/1ifs1qga6'; // Your Tawk.to script URL
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.head.appendChild(script);
    }
  }, [location.pathname]);

  return children;
};

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
        <Route path="/" element={<PageWithTawk><Home /></PageWithTawk>} />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* for ticket route */}
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/liqourinfo" element={<LiquorInfo />} />

          <Route path="/productInfo/:id" element={<Productinf />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route
            path="/upload_carasoule"
            element={
              <ProtectedRouteForAdmin>
                <UploadCarasoule />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
};

export default App;

//user

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

//admin
const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.email === "admin@gmail.com") {
    return children;
  } else {
    return <Navigate to={<Login />} />;
  }
};
