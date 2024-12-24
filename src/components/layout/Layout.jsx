import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  // const admin = JSON.parse(localStorage.getItem("user"));
  // console.log(admin.email);
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
