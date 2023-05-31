import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Uprof from "./U_profile/Uprofile";
import Updprof from "./U_profile/Updprofile";
import Chpass from "./U_profile/Cpass";
import Home from "./Components/Home/Home";
import View_co from "./View_company";
import View_po from "./View_product";
import View_more from "./View_more";
import MyCart from "./MyCart";
import My_orders from "./My_orders";
import Review from "./Review";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/Up" element={<Uprof />} />
        <Route path="/Upd" element={<Updprof />} />
        <Route path="/Cp" element={<Chpass />} />
        <Route path="/" element={<Home />} />
        <Route path="/view_co" element={<View_co />} />
        <Route path="/view_po" element={<View_po />} />
        <Route path="/view_mo" element={<View_more />} />
        <Route path="/Cart" element={<MyCart />} />
        <Route path="/Orders" element={<My_orders />} />
        <Route path="/review" element={<Review />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
