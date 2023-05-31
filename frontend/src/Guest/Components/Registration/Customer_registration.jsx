import React, { Component } from "react";
import "./customer_registration.scss";
import Db from "../../Assets/db2.jpg";
import axios from "axios";

export default class Customer_registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: [],
      stateData: [],
      districtData: [],
      placeData: [],
      name: "",
      email: "",
      phone: "",
      address: "",
      place: "",
      password: "",
      photo: "",
    };
  }

  saveData = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("phone", this.state.phone);
    formData.append("address", this.state.address);
    formData.append("place", this.state.place);
    formData.append("password", this.state.password);
    formData.append("photo", this.state.photo);

    axios({
      method: "POST",
      url: "http://localhost/d-cart/backend/Guest/UserRegistration.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      console.log(response);
      if (response.data) {
        console.log(response.data);
        window.location = "/Login";
      }
    });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  inputPhoto = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  getState = (e) => {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/AjaxState.php?id=" +
          e.target.value
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ stateData: data });
      });
  };

  getDistrict = (e) => {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/AjaxDistrict.php?id=" +
          e.target.value
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ districtData: data });
      });
  };

  getPlace = (e) => {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/AjaxPlace.php?id=" +
          e.target.value
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ placeData: data });
      });
  };

  componentDidMount() {
    axios
      .get("http://localhost/d-cart/backend/Admin/Country.php")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ countryData: data });
      });
  }
  render() {
    return (
      <div
        className="reg"
        style={{
          backgroundImage: "url(" + Db + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="head_pos">
          <h1 className="head_style">Customer Registration</h1>
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
                  <h1 className="text_style">Address</h1>
                </td>
                <td>
                  <textarea
                    name="address"
                    className="field_style"
                    defaultValue={""}
                    onChange={this.inputSet}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">Contact</h1>
                </td>
                <td>
                  <input
                    type="text"
                    name="phone"
                    onChange={this.inputSet}
                    className="field_style"
                    placeholder="Enter Number"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">Country</h1>
                </td>
                <td>
                  <select name="country" required onChange={this.getState}>
                    <option value={""}>Select Country</option>
                    {this.state.countryData.map((result) => (
                      <option key={result.country_id} value={result.country_id}>
                        {result.country_name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className="text_style">State</h1>
                </td>
                <td>
                  <select name="state" required onChange={this.getDistrict}>
                    <option value={""}>Select State</option>
                    {this.state.stateData.map((result) => (
                      <option key={result.state_id} value={result.state_id}>
                        {result.state_name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className="text_style">District</h1>
                </td>
                <td>
                  <select name="district" required onChange={this.getPlace}>
                    <option value={""}>Select District</option>
                    {this.state.districtData.map((result) => (
                      <option
                        key={result.district_id}
                        value={result.district_id}
                      >
                        {result.district_name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className="text_style">Place</h1>
                </td>
                <td>
                  <select name="place" required onChange={this.inputSet}>
                    <option value={""}>Select Place</option>
                    {this.state.placeData.map((result) => (
                      <option key={result.place_id} value={result.place_id}>
                        {result.place_name}
                      </option>
                    ))}
                  </select>
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
              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">Email</h1>
                </td>
                <td>
                  <input
                    name="email"
                    onChange={this.inputSet}
                    type="email"
                    className="field_style"
                    placeholder="Enter email"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">Password</h1>
                </td>
                <td>
                  <input
                    name="password"
                    onChange={this.inputSet}
                    type="text"
                    className="field_style"
                    placeholder="Enter password"
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
