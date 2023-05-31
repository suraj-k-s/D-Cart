
import axios from "axios";
import "./uprofile.scss";

import React, { Component } from 'react'


export default class Updprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designerName: "",
      designerContact: "",
      designerEmail: "",
      designerAddress: "",
    };
  }

  componentDidMount() {
    var id = window.sessionStorage.getItem("designer-id");
    axios
      .get("http://localhost/d-cart/backend/Designer/MyProfile.php?id=" + id)
      .then((response) => response.data[0])
      .then((data) => {
        this.setState({ designerName: data.designer_name });
        this.setState({ designerAddress: data.designer_address });
        this.setState({ designerContact: data.designer_contact });
        this.setState({ designerEmail: data.designer_email });
      });
  }

  saveData = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", this.state.designerName);
    formData.append("email", this.state.designerEmail);
    formData.append("phone", this.state.designerContact);
    formData.append("address", this.state.designerAddress);
    formData.append("id", window.sessionStorage.getItem("designer-id"));

    axios({
      method: "POST",
      url: "http://localhost/d-cart/backend/Designer/UpdateProfile.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      if (response.data) {
        window.location = "/Designer";
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
              <td> <input name="designerName" type="text" defaultValue={this.state.designerName}  onChange={this.inputSet}  className="field_style" /></td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Contact</h1>
              </td>
              <td> <input name="designerContact" type="number" defaultValue={this.state.designerContact} onChange={this.inputSet} className="field_style" /></td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">email</h1>
              </td>
              <td>
                <input type="email" name="designerEmail" defaultValue={this.state.designerEmail} onChange={this.inputSet} className="field_style" />
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Address</h1>
              </td>
              <td>
                <textarea name="designerAddress" className="textarea_style" onChange={this.inputSet} defaultValue={this.state.designerAddress}></textarea>
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
