
import axios from "axios";
import "./uprofile.scss";

import React, { Component } from 'react'


export default class Cpass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dbPassword: "",
            currentPassword: "",
            newPassword: "",
            rePassword: "",
        };
    }

    componentDidMount() {
        var id = window.sessionStorage.getItem("user-id");
        axios
            .get("http://localhost/d-cart/backend/User/MyProfile.php?id=" + id)
            .then((response) => response.data[0])
            .then((data) => {
                this.setState({ dbPassword: data.user_password });
            });
    }

    saveData = (e) => {
        e.preventDefault();


        if (this.state.dbPassword === this.state.currentPassword) {
            if (this.state.newPassword === this.state.rePassword) {
                const formData = new FormData();

                formData.append("password", this.state.newPassword);
                formData.append("id", window.sessionStorage.getItem("user-id"));

                axios({
                    method: "POST",
                    url: "http://localhost/d-cart/backend/User/UpdatePassword.php",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                }).then(function (response) {
                    if (response.data) {
                        alert("Password Updated")
                        window.location = "/User";
                    }
                });
            }
            else {
                alert(" New Password Mismatched")
            }
        }
        else {
            alert(" Current Password Mismatched")
        }





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
                                <h1 className="text_style">Current Password</h1>
                            </td>
                            <td> <input name="currentPassword" type="text" onChange={this.inputSet} className="field_style" /></td>
                        </tr>
                        <tr>
                            <td>
                                <h1 className="text_style">New Password</h1>
                            </td>
                            <td> <input name="newPassword" type="text" onChange={this.inputSet} className="field_style" /></td>
                        </tr>
                        <tr>
                            <td>
                                <h1 className="text_style">Re Password</h1>
                            </td>
                            <td>
                                <input type="text" name="rePassword" onChange={this.inputSet} className="field_style" />
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
