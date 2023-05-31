
import axios from "axios";
import "./uprofile.scss";

import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Uprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userImage: "",
      userContact: "",
      userEmail: "",
      userAddress: "",
    };
  }

  componentDidMount() {
    var id = window.sessionStorage.getItem("user-id");
    axios
      .get("http://localhost/d-cart/backend/User/MyProfile.php?id=" + id)
      .then((response) => response.data[0])
      .then((data) => {
        this.setState({ userName: data.user_name });
        this.setState({ userImage: data.user_photo });
        this.setState({ userAddress: data.user_address });
        this.setState({ userContact: data.user_contact });
        this.setState({ userEmail: data.user_email });
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
                    src={`http://localhost/d-cart/backend/Assets/${this.state.userImage}`}
                    className="profilepic_style"
                  />
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Name</h1>
              </td>
              <td> <input type="text" value={this.state.userName} className="field_style" /></td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Contact</h1>
              </td>
              <td> <input type="number"  value={this.state.userContact} className="field_style" /></td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">email</h1>
              </td>
              <td> 
                <input type="email"  value={this.state.userEmail} className="field_style" />
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Address</h1>
              </td>
              <td>
                <textarea className="textarea_style" value={this.state.userAddress}></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div style={{ display: "flex", justifyContent: "center" }} >
                  <Link to="/User/Upd">
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
