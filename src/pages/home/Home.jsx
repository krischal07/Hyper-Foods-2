import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import OrderNow from "../../components/ordernow/OrderNow";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      {/* <Filter /> */}
      <ProductCard />
      <OrderNow />
      {/* <Testimonial /> */}
    </Layout>
  );
};

export default Home;
