import React from "react";
import "./continue.scss";
import Designer from "../../Assets/designer.jpg";
import Company from "../../Assets/company.jpg";
import Customers from "../../Assets/customers.jpg";
import { Link } from "react-router-dom";

const Continue = () => {
  return (
    <div className="main_div">
      <div
        style={{
          backgroundImage: "url(" + Designer + ")",
          backgroundSize: "cover",
        }}
        className="box"
      >
        <div className="heading_pos">
          <b className="heading"> DESIGNER REGISTRATION</b>
        </div>
        <div className="desc_pos">
          <b>
            Designer can upload their design through the website and sell their
            designs to companies.
          </b>
        </div>
        <div className="btn_gall">
          <Link className="btn" to="/Dreg">
            Continue
          </Link>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url(" + Company + ")",
          backgroundSize: "cover",
        }}
        className="box"
      >
        <div className="heading_pos">
          <b className="heading">COMPANY REGISTRATION</b>
        </div>
        <div className="desc_pos">
          <b>
            Companies can buy different designs from designers and sell the
            products to customers.
          </b>
        </div>
        <div className="btn_gall">
          <Link className="btn" to="/Creg">
            Continue
          </Link>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url(" + Customers + ")",
          backgroundSize: "cover",
        }}
        className="box"
      >
        <div className="heading_pos">
          <b className="heading">CUSTOMER REGISTRATION</b>
        </div>
        <div className="desc_pos">
          <b>
            Customers buy products from companies and deliver the products and
            also give feedback.
          </b>
        </div>
        <div className="btn_gall">
          <Link className="btn" to="/Cureg">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Continue;
