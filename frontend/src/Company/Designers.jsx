import React, { Component } from 'react'
import './main.scss'
import axios from 'axios';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

export default class Designers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designerData: [],
        };
    }
    componentDidMount() {
        axios
            .get("http://localhost/d-cart/backend/Company/DesignerSearch.php")
            .then((response) => response.data)
            .then((data) => {
                console.log(data);
                this.setState({ designerData: data });
            });
    }
    designView(id) {
        window.sessionStorage.setItem('designer', id);
        window.location = "/Company/Design";
    }
    render() {
        return (
            <section className='main container section'>
                <div className="secTitle">
                    <h3 data-aos="fade-right" className="title">
                       Top Designers
                    </h3>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="secContent grid">
                    {
                        this.state.designerData.map((data) => {

                            return (
                                <div key={data.id} className='singleDestination'>
                                    {/*return single id from the map array*/}
                                    <div data-aos="fade-up" data-aos-duration="3000" className="imageDiv">
                                        <img src={`http://localhost/d-cart/backend/Assets/${data.designer_photo}`}  />

                                    </div>
                                    <div data-aos="fade-up" data-aos-duration="3000" className="cardInfo">

                                        <h4 className="destTitle">
                                          {data.designer_name}
                                        </h4>

                                        <span className="continent flex">
                                            <HiOutlineLocationMarker className='icon' />
                                            <span className="name">{data.country_name}</span>
                                        </span>
                                        <div className="fees flex">
                                            <div className="grade">
                                              <b> <div className='name'>State:{data.state_name}</div></b>
                                           
                                          
                                            <br/><b><div className="name">District:{data.district_name}
                                            
                                            </div></b> </div> 
                                        </div>
                                        <div className="desc">
                                            <p><b>
                                               Mail : <a href={`mailto:${data.designer_email}`} >{data.designer_email}</a><br/>
                                               Whatsapp <a href={`https://wa.me/${data.designer_contact}`} >{data.designer_contact}</a>
                                           </b> </p>
                                        </div>
                                        <button onClick={()=>this.designView(data.designer_id)} className='btn flex'>
                                            DESIGNS<HiOutlineClipboardCheck className="icon" />
                                        </button>
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
