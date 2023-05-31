import React, { useState } from "react";
import "./navbar.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1>
              <AiOutlineShoppingCart className="icon" /> DCART
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link className="navLink" to="/Company">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/Company/Up">
                Profile
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/Company/Upd">
                Edit Profile
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/Company/Cp">
                Change Password
              </Link>

            </li>
            <li className="navItem">
              <Link className="navLink" to="/Company/Designer">
              Designer
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/Company/OwnDesign">
                Owned Designs
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/Company/Product_list">
                List
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/Company/Booking">
                Bookings
              </Link>
            </li>
            <li className="navItem">
              <Link className="btn" to="/login">
                LOGOUT
              </Link>
            </li>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
