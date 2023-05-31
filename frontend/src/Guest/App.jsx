import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Continue from "./Components/Login/Continue";
import Designer from "./Components/Registration/Designer_registration";
import Company from "./Components/Registration/Company_registration";
import Customer from "./Components/Registration/Customer_registration";
import Main from "./Components/Main/Main"

const AApp = () => {
  return (
    <>
      <Navbar />

      {/* { <Main /> } */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/con" element={<Continue />} />
        <Route path="/" element={<Home />} />
        <Route path="/Dreg" element={<Designer />} />
        <Route path="/Creg" element={<Company />} />
        <Route path="/Cureg" element={<Customer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AApp;
