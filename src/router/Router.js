import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AboutPage from "../pages/About";
import BlogPostDetail from "../pages/BlogPostDetails";
import BlogPage from "../pages/Blog";
import Career from "../pages/Career";
import Contact from "../pages/Contact";
import ProductSubDivision from "../pages/ProductSubDivision";
import ThankYou from "../pages/Thankyou";
import ApplyNow from "../pages/ApplyNow";
import Login from "../pages/Login";
import UserDashBoard from "../pages/UserDashboard";
import UserName from "../pages/userName";

function AppRoutes() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Get the token from localStorage
    const storedToken = localStorage.getItem('token');
    setToken(storedToken); // Set the token state
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPostDetail />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} />

      <Route
        path="/ApplyNow/:category"
        element={token ? <ApplyNow /> : <Navigate to="/login" />}
      />
      <Route
        path="/userDashboard"
        element={token ? <UserDashBoard /> : <Navigate to="/login" />}
      />
      <Route
        path="/userName"
        element={<UserName />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:category" element={<ProductSubDivision />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default AppRoutes;
