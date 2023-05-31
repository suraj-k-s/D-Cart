import React, { useEffect } from "react";
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
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video3} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="setContent container">
        {/* <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <h2>Get in Touch with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div> */}
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

            </div>
            {/*group2*/}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >

            </div>
            {/*grp3*/}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">Useful Links</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/User">
                  Home
                </Link>
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/User/Up">
                  Profile
                </Link>
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/User/Upd">
                  Edit Profile
                </Link>
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/User/Cp">
                  Change Password
                </Link>
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/User/view_co">
                  View Companies
                </Link>
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/User/Cart">
                  Cart
                </Link>
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                <Link className="navLink" to="/User/Orders">
                  Orders
                </Link>
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
