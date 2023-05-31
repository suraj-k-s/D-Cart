
import axios from "axios";
import "./uprofile.scss";

import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Uprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designerName: "",
      designerImage: "",
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
        this.setState({ designerImage: data.designer_photo });
        this.setState({ designerAddress: data.designer_address });
        this.setState({ designerContact: data.designer_contact });
        this.setState({ designerEmail: data.designer_email });
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
                    src={`http://localhost/d-cart/backend/Assets/${this.state.designerImage}`}
                    className="profilepic_style"
                  />
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Name</h1>
              </td>
              <td> <input type="text" value={this.state.designerName} className="field_style" /></td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Contact</h1>
              </td>
              <td> <input type="number"  value={this.state.designerContact} className="field_style" /></td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">email</h1>
              </td>
              <td> 
                <input type="email"  value={this.state.designerEmail} className="field_style" />
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="text_style">Address</h1>
              </td>
              <td>
                <textarea className="textarea_style" value={this.state.designerAddress}></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div style={{ display: "flex", justifyContent: "center" }} >
                  <Link to="/Designer/Upd">
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
