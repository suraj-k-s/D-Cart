
import axios from "axios";
import "./uprofile.scss";

import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Uprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      companyImage: "",
      companyContact: "",
      companyEmail: "",
      companyAddress: "",
    };
  }

  componentDidMount() {
    var id = window.sessionStorage.getItem("company-id");
    axios
      .get("http://localhost/d-cart/backend/Company/MyProfile.php?id=" + id)
      .then((response) => response.data[0])
      .then((data) => {
        this.setState({ companyName: data.company_name });
        this.setState({ companyImage: data.company_logo });
        this.setState({ companyAddress: data.company_address });
        this.setState({ companyContact: data.company_contact });
        this.setState({ companyEmail: data.company_email });
      });
  }
  render() {
    return (
      <div className="log">

        <div style={{ paddingTop: "150px" }} className="table_pos" align="center">
          <table className="table">
            <tr>
              <td colSpan={2}>
                  <img
                    alt=''
                    src={`http://localhost/d-cart/backend/Assets/${this.state.companyImage}`}
                    className="profilepic_style"
                  />
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Name</h1>
              </td>
              <td> <input type="text" value={this.state.companyName} className="field_style" /></td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Contact</h1>
              </td>
              <td> <input type="number"  value={this.state.companyContact} className="field_style" /></td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">email</h1>
              </td>
              <td> 
                <input type="email"  value={this.state.companyEmail} className="field_style" />
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Address</h1>
              </td>
              <td>
                <textarea className="textarea_style" value={this.state.companyAddress}></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div style={{ display: "flex", justifyContent: "center" }} >
                  <Link to="/Company/Upd">
                  <button className="btn">Edit profile</button>
                  </Link>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}
