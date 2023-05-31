
import axios from "axios";
import "./uprofile.scss";

import React, { Component } from 'react'


export default class Updprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
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
        this.setState({ companyAddress: data.company_address });
        this.setState({ companyContact: data.company_contact });
        this.setState({ companyEmail: data.company_email });
      });
  }

  saveData = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", this.state.companyName);
    formData.append("email", this.state.companyEmail);
    formData.append("phone", this.state.companyContact);
    formData.append("address", this.state.companyAddress);
    formData.append("id", window.sessionStorage.getItem("company-id"));

    axios({
      method: "POST",
      url: "http://localhost/d-cart/backend/Company/UpdateProfile.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      if (response.data) {
        window.location = "/Company";
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
              <td> <input name="companyName" type="text" defaultValue={this.state.companyName}  onChange={this.inputSet}  className="field_style" /></td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Contact</h1>
              </td>
              <td> <input name="companyContact" type="number" defaultValue={this.state.companyContact} onChange={this.inputSet} className="field_style" /></td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">email</h1>
              </td>
              <td>
                <input type="email" name="companyEmail" defaultValue={this.state.companyEmail} onChange={this.inputSet} className="field_style" />
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Address</h1>
              </td>
              <td>
                <textarea name="companyAddress" className="textarea_style" onChange={this.inputSet} defaultValue={this.state.companyAddress}></textarea>
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
