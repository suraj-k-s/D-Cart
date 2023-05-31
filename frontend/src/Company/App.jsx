import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Product from './Product'
import ProductList from './Product_list'
import "./app.css";
import Home from './Components/Home/Home';
import Stock from './Stock'
import Design from './Design'
import Designer from './Designers'
import OwnDesign from './OwnDesign';
import Design_m from './Design_m';
import Gallery from './Gallery'
import St_m from './St_m'
import Uprof from "./U_profile/Uprofile";
import Updprof from "./U_profile/Updprofile";
import Chpass from "./U_profile/Cpass";
import Booking_list from './Booking_list'
import Complaint from './Complaint'


export default class App extends Component {
  render() {
    return (
      <> <Navbar />
        <Routes>
          <Route path="/Up" element={<Uprof />} />
          <Route path="/Upd" element={<Updprof />} />
          <Route path="/Cp" element={<Chpass />} />
          <Route path='/' element={<Home />} />
          <Route path="Product" element={<Product />} />
          <Route path="Designer" element={<Designer />} />
          <Route path="OwnDesign" element={<OwnDesign />} />
          <Route path="Design" element={<Design />} />
          <Route path="Product_list" element={<ProductList />} />
          <Route path="Stock" element={<Stock />} />
          <Route path="Design_m" element={<Design_m />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking_list />} />
          <Route path="/Complaint" element={<Complaint />} />
        </Routes>

        <Footer />
      </>
    )
  }
}
