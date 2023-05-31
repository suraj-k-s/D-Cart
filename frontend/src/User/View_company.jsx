import React, { Component } from 'react'
import axios from 'axios';
import "./view_company.scss"
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import { Link } from 'react-router-dom';
export default class View_company extends Component {
    constructor(props){
        super(props);
        this.state = {
            comapnyData : [],
        }
    }

    componentDidMount(){
        axios
        .get("http://localhost/d-cart/backend/User/Viewcompanies.php")
        .then((response) => response.data)
        .then((data) => {
            console.log(data);
            this.setState({ comapnyData: data });
        });
    }

    viewProduct=(id)=>
    {
        window.sessionStorage.setItem("companyProduct",id);
        // alert(id);
        window.location="/User/view_po";

    }


    render() {
        return (
            <div className="main_div">
                <section className='main container section'>
                    <div data-aos="fade-up" data-aos-duration="3000" className="secContent grid">
                        {this.state.comapnyData.map((result,key)=>(
                        <div className='singleDestination' key={key}>
                            {/*return single id from the map array*/}
                            <div data-aos="fade-up" data-aos-duration="3000" className="imageDiv">
                                <img src={`http://localhost/d-cart/backend/Assets/${result.company_logo}`} />

                            </div>
                            <div data-aos="fade-up" data-aos-duration="3000" className="cardInfo">

                                <h4 className="destTitle">

                                </h4>
                                <span className="continent flex" style={{fontFamily: "fantasy", fontSize: "20px"}}>
                                    {result.company_name}
                                </span>

                                
                                <div className="fees flex">
                                    <div className="grade">
                                        <b> </b>
                                     {result.company_address}

                                        <br /><b></b> </div>
                                </div>
                                <div className="desc">
                                    <p><b>
                                        Mail : <a href={`mailto:`} >{result.company_email}</a><br />
                                        Whatsapp <a href={`https://wa.me/`} >{result.company_contact}</a>
                                    </b> </p>
                                </div>
                              
                                <button  className='btn flex' onClick={()=>this.viewProduct(result.company_id)}>
                                   VIEW PRODUCTS<HiOutlineClipboardCheck className="icon" />
                                </button>
                                
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
                
            </div>
        )
    }
}
