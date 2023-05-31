import { Routes, Route } from "react-router-dom";
import './app.css'
import Design_upload from "./Design_upload";
import Footer from "../Guest/Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Design from "./Designs";
import Sold from "./Sold";
import Uprof from "./U_profile/Uprofile";
import Updprof from "./U_profile/Updprofile";
import Chpass from "./U_profile/Cpass";
import Gallery from "../Company/Gallery";

const AApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Up" element={<Uprof />} />
        <Route path="/Upd" element={<Updprof />} />
        <Route path="/Cp" element={<Chpass />} />
        <Route path="/" element={<Home />} />
        <Route path="/Design_upload" element={<Design_upload />} />
        <Route path="/Sold" element={<Sold />} />
        <Route path="/Designs" element={<Design />} />

      </Routes>

      <Footer />
    </>

  )


}
export default AApp;
