import "./login.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      user_password: "",
      type: "",
      id: "",
    };
  }
  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("email", this.state.user_email);
    formData.append("password", this.state.user_password);

    axios({
      method: "POST",
      url: "http://localhost/d-cart/backend/Guest/Login.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => response.data)
      .then((data) => {
        if (JSON.stringify(data) === "[]") {
          alert("Invalid User");
        } else if (data[1] === "Admin") {
          window.sessionStorage.setItem("admin-id", data[0].admin_id);
          window.location = "/Admin";
        } else if (data[1] === "Designer") {
          window.sessionStorage.setItem("designer-id", data[0].designer_id);
          window.sessionStorage.setItem("designer-name", data[0].designer_name);
          window.location = "/Designer";
        } else if (data[1] === "Company") {
          window.sessionStorage.setItem("company-id", data[0].company_id);
          window.location = "/Company";
        } else if (data[1] === "User") {
          window.sessionStorage.setItem("user-id", data[0].user_id);
          window.location = "/User";
        }
      });
  };
  render() {
    return (
      <div className="log">
        <div className="head_pos">
          <h1 className="head_style">Login</h1>
        </div>
        <div className="table_pos" align="center">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">Email</h1>
                </td>
                <td>
                  <input
                    onChange={this.inputSet}
                    type="email"
                    className="field_style"
                    name="user_email"
                    placeholder="Enter Email"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className="text_style">Password</h1>
                </td>
                <td>
                  <input
                    // pattern="[0-9+]{10,13}"
                    type="password"
                    className="field_style"
                    name="user_password"
                    onChange={this.inputSet}
                    placeholder="Enter password"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btn_gall">
            <input
              className="btn"
              onClick={this.saveData}
              type="button"
              value="submit"
            ></input>
          </div>
          <div>
            <h4>
              Don't have an account?<Link to="/con">register</Link>{" "}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
