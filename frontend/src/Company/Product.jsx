import React, { Component } from "react";
import "./product.scss";
import axios from "axios";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      photo: "",
      details: "",
      rate: "",
    };
  }

  saveData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", this.state.photo);
    formData.append("name", this.state.name);
    formData.append("details", this.state.details);
    formData.append("rate", this.state.rate);
    formData.append("cid", window.sessionStorage.getItem("company-id"));
    formData.append("did", window.sessionStorage.getItem("designProduct"));

    axios({
      method: "POST",
      url: "http://localhost/d-cart/backend/Company/Product.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      console.log(response);
      if (response.data) {
        console.log(response.data);
        window.location = "/Company/Product_list";
      }
    });
  };


  inputSet = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  inputPhoto = (e) => {
    const photo = e.target.files[0];
    this.setState({ photo });
  };

  render() {
    return (
      <div
        className="reg"
      >
        <div className="head_pos">
          <h1 className="head_style">Product Registration</h1>
        </div>
        <div className="table_pos" align="center">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">Name</h1>
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    className="field_style"
                    placeholder="Enter Name"
                    onChange={this.inputSet}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h1 className="text_style">Details</h1>
                </td>
                <td>
                  <textarea
                    name="details"
                    className="field_style"
                    defaultValue={""}
                    onChange={this.inputSet}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">rate</h1>
                </td>
                <td>
                  <input
                    type="text"
                    name="rate"
                    onChange={this.inputSet}
                    className="field_style"
                    placeholder="Enter Rate"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">Photo</h1>
                </td>
                <td>
                  <input
                    name="photo"
                    onChange={this.inputPhoto}
                    type="file"
                    className="field_style"
                    placeholder="upload photo"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btn_reg">
            <input
              className="btn"
              onClick={this.saveData}
              type="button"
              value="submit"
            />
            <input className="btn" type="button" name="Cancel" value="Cancel" />
          </div>
        </div>
      </div>
    );
  }
}
