
import axios from "axios";
import "./uprofile.scss";

import React, { Component } from 'react'


export default class Updprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
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
        this.setState({ userAddress: data.user_address });
        this.setState({ userContact: data.user_contact });
        this.setState({ userEmail: data.user_email });
      });
  }

  saveData = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", this.state.userName);
    formData.append("email", this.state.userEmail);
    formData.append("phone", this.state.userContact);
    formData.append("address", this.state.userAddress);
    formData.append("id", window.sessionStorage.getItem("user-id"));

    axios({
      method: "POST",
      url: "http://localhost/d-cart/backend/User/UpdateProfile.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      if (response.data) {
        window.location = "/User";
      }
    });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="log">
        <div style={{ paddingTop: "150px" }} className="table_pos" align="center">
          <table className="table">
            <tr>
              <td>
                <h1 className="text_style">Name</h1>
              </td>
              <td> <input name="userName" type="text" defaultValue={this.state.userName}  onChange={this.inputSet}  className="field_style" /></td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Contact</h1>
              </td>
              <td> <input name="userContact" type="number" defaultValue={this.state.userContact} onChange={this.inputSet} className="field_style" /></td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">email</h1>
              </td>
              <td>
                <input type="email" name="userEmail" defaultValue={this.state.userEmail} onChange={this.inputSet} className="field_style" />
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Address</h1>
              </td>
              <td>
                <textarea name="userAddress" className="textarea_style" onChange={this.inputSet} defaultValue={this.state.userAddress}></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div style={{ display: "flex", justifyContent: "center" }} >

                  <button className="btn" onClick={this.saveData}>Update</button>

                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}
