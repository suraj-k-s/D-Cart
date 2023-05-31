import React, { Component } from 'react'
import { Avatar, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

export default class My_orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderData: [],
            columns: [
                {
                    field: "id",
                    headerName: "ID",
                    width: 130,
                },
                {
                    field: "product_name",
                    headerName: "Name",
                    width: 260,
                },
                {
                    field: "product_photo",
                    headerName: "Product",
                    width: 260,
                    renderCell: (params) => {
                        return (
                            <>

                                < a href={`http://localhost/d-cart/backend/Assets/${params.row.product_photo}`} target="_blank" rel="noreferrer" >

                                    <Avatar
                                        alt="Remy Sharp"

                                        src={`http://localhost/d-cart/backend/Assets/${params.row.product_photo}`} >
                                    </Avatar>
                                </a>

                            </>
                        )
                    }
                },
                {
                    field: "product_rate",
                    headerName: "Price",
                    width: 260,
                },
                {
                    field: "cart_status",
                    headerName: "Status",
                    width: 260,
                    renderCell: (params) => {
                        return (
                            <>
                                {params.row.cart_status === "1" ? (
                                    <div>
                                        Ordered
                                        <button onClick={()=>this.updateOrder(params.row.cart_id,"8")}>Cancel</button>
                                    </div>
                                ) : params.row.cart_status === "2" ? (
                                    <div>
                                        Dispatched
                                        <button onClick={()=>this.updateOrder(params.row.cart_id,"8")}>Cancel</button>
                                    </div>
                                    
                                ) : params.row.cart_status === "3" ? (
                                    <div>
                                        Shipped
                                        <button onClick={()=>this.updateOrder(params.row.cart_id,"8")}>Cancel</button>
                                    </div>
                                    
                                ) : params.row.cart_status === "4" ? (
                                    <div>
                                        Delivered
                                        <button onClick={()=>this.updateOrder(params.row.cart_id,"5")}>Return</button>
                                        <button onClick={()=>this.giveFeedback(params.row.product_id)}>Feedback</button>
                                    </div>
                                    
                                ) : params.row.cart_status === "5" ? (
                                    <div>
                                        Returned
                                    </div>
                                    
                                ) : (
                                    <div>Cancelled</div>
                                )
                                }
                            </>
                        )
                    }
                },
            ]
        }
    }

    giveFeedback(id)
    {
        window.sessionStorage.setItem("feedbackId",id);
        window.location="/User/review";
    }

    updateOrder(id,status)
    {
        axios
        .get("http://localhost/d-cart/backend/User/UpdateOrder.php?id=" +id+"&sts="+status)
        .then((response) => response.data)
        .then((data) => {
            this.componentDidMount()
        });
    }




    componentDidMount() {
        axios
            .get("http://localhost/d-cart/backend/User/Orders.php?id=" + window.sessionStorage.getItem("user-id"))
            .then((response) => response.data)
            .then((data) => {
                this.setState({ orderData: data });
            });
    }



    render() {
        return (
            <div >
                <br /><br /><br /><br /><br /><br />
                <Box sx={{ height: 400, width: '100%', backgroundColor: "#E4B1EA" }}>
                    <h1 align="center">My Orders</h1>
                    <br /><br />
                    <DataGrid
                        rows={this.state.orderData}
                        columns={this.state.columns}
                        pageSize={9}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </Box>
                <br /><br /><br /><br /><br /><br />
            </div>
        );
    }
}



