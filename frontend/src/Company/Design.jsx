import React, { Component } from 'react'
import './main.scss'
import './design.css'
import axios from 'axios';

import { HiOutlineClipboardCheck } from 'react-icons/hi'

export default class Designers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designData: [],
            categoryData: [],
            subcategoryData: [],
            category: "",
            subcategory: "",
        };
    }
    componentDidMount() {
        var id = window.sessionStorage.getItem("designer");
        axios
            .get("http://localhost/d-cart/backend/Company/DesignSearch.php?id=" + id)
            .then((response) => response.data)
            .then((data) => {
                this.setState({ designData: data });
            });
        axios
            .get("http://localhost/d-cart/backend/Admin/Category.php")
            .then((response) => response.data)
            .then((data) => {
                this.setState({ categoryData: data });
            });
    }
    buyNow(id) {
        window.sessionStorage.setItem('design', id);
        window.location = "/Payment";
    }
    ajaxSubcategory(id) {
        axios
            .get("http://localhost/d-cart/backend/Admin/AjaxSubcategory.php?id=" + id)
            .then((response) => response.data)
            .then((data) => {
                this.setState({ subcategoryData: data });
            });
    }
    searchData(sub) {
        var id = window.sessionStorage.getItem("designer");
        axios
            .get("http://localhost/d-cart/backend/Company/DesignSearch.php?id=" + id + "&sub=" + sub)
            .then((response) => response.data)
            .then((data) => {
                this.setState({ designData: data });
            });
    }
    render() {
        return (
            <section className='main container section'>
                <table>
                    <tr>
                        <td>Category</td>
                        <td>
                            <select onChange={(e) => this.ajaxSubcategory(e.target.value)}>
                                <option value="">--select category..</option>
                                {
                                    this.state.categoryData.map((val) => (
                                        <option key={val.id} value={val.category_id}>{val.category_name}</option>
                                    ))
                                }
                            </select>
                        </td>
                        <td>SubCategory</td>
                        <td>
                            <select onChange={(e) => this.searchData(e.target.value)}>
                                <option value="">--Select subcategory</option>
                                {
                                    this.state.subcategoryData.map((val) => (
                                        <option key={val.id} value={val.subcategory_id}>{val.subcategory_name}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                </table>
                <div className="secTitle"><br /><br /><br />
                    {/* <h3 data-aos="fade-right" className="title">
                      
                    </h3> */}
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="secContent grid">
                    {
                        this.state.designData.map((data, index) => {

                            return (
                                <div key={data.id} className='singleDestination'>
                                    {/*return single id from the map array*/}
                                    <div data-aos="fade-up" data-aos-duration="3000" className="imageDiv">
                                        <img
                                            alt=''
                                            // src={`data:image/jpeg;base64,${data.design_converted}`} 
                                            src={`http://localhost/d-cart/backend/Assets/${data.design_photo}`}
                                            height={120}
                                            width={120}
                                        />

                                    </div>
                                    <div data-aos="fade-up" data-aos-duration="3000" className="cardInfo">

                                        <h4 className="destTitle">
                                            {data.design_name}
                                        </h4>

                                        <span className="continent flex">

                                            <span className="name">{data.country_name}</span>
                                        </span>
                                        <div className="fees flex">
                                            <div className="grade">
                                                <b> <div style={{ color: "#004ADF" }} className='price'>₹{data.design_rate}</div></b>

                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p><b>
                                                <div>{data.design_details}</div>
                                            </b> </p>
                                        </div>
                                        {
                                            data.company_id !== "0" ?
                                                <button className="btn btn-primary">
                                                    Sold Out<HiOutlineClipboardCheck className="icon" />
                                                </button>
                                                : <button onClick={() => this.buyNow(data.design_id)} className="btn btn-primary">
                                                    Buy Now<HiOutlineClipboardCheck className="icon" />
                                                </button>
                                        }


                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </section>
        )
    }
}