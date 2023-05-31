import React, { useState } from "react";
import "./navbar.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState("navBar");
  //Function to toggle
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  //fuction to toggle navbar
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
              <Link className="navLink" to="/Designer">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/Designer/Up">
                Profile
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/Designer/Upd">
                Edit Profile
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/Designer/Cp">
                Change Password
              </Link>

            </li>
            <li className="navItem">
              <Link className="navLink" to="/Designer/Design_upload">
                Upload
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/Designer/Designs">
                MyDesigns
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/Designer/Sold">
                Sold
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
