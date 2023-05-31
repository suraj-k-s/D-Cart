import React, { useEffect, useState } from "react";
import "./footer.scss";
import video3 from "../../Assets/video (3).mp4";
import { FiSend } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const [content,setContent] = useState();

  const sendComplaint=()=>{
    var id = window.sessionStorage.getItem("company-id");
    axios
      .get("http://localhost/d-cart/backend/Company/Complaint.php?id=" + id+"&content="+content)
      .then((response) => response.data[0])
      .then((data) => {
        alert("Complaint Submitted")
      });
  }

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video3} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="setContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <h2>Get in Touch with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              onChange={(e)=>setContent(e.target.value)}
              placeholder="Enter Your Complaint"
            />
            <button data-aos="fade-up" className="btn flex" type="submit" onClick={sendComplaint}>
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className="logo flex">
                <AiOutlineShoppingCart className="icon" /> DCART.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet,ffgffgff ffgffgffddd
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          {/*Group one  */}
          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/*group2*/}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                BOOKINGS
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            {/*grp3*/}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania{" "}
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED ISRA-TECH 2022 </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
