import React, { Component } from 'react'
import { Avatar, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


export default class Booking_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: [],

      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 50,
        },
        {
          field: "product_name",
          headerName: "Product",
          width: 260,
        },
        {
          field: "product_photo",
          headerName: "Image",
          width: 80,
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
          field: "cart_qty",
          headerName: "Quantity",
          width: 100,
        },
        {
          field: "booking_date",
          headerName: "Date",
          width: 150,
        },
        {
          field: "user_name",
          headerName: "Customer",
          width: 200,
        },
        {
          field: "user_contact",
          headerName: "Contact",
          width: 150,
        },
        {
          field: "user_address",
          headerName: "Address",
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
                              New Order
                              <button onClick={()=>this.updateOrder(params.row.cart_id,"2")}>Dispatch</button>
                          </div>
                      ) : params.row.cart_status === "2" ? (
                          <div>
                              Dispatched
                              <button onClick={()=>this.updateOrder(params.row.cart_id,"3")}>Ship Package</button>
                          </div>
                          
                      ) : params.row.cart_status === "3" ? (
                          <div>
                              Shipped
                              <button onClick={()=>this.updateOrder(params.row.cart_id,"4")}>Deliver</button>
                          </div>
                          
                      ) : params.row.cart_status === "4" ? (
                          <div>
                              Delivered
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



  updateOrder(id, status) {
    axios
      .get("http://localhost/d-cart/backend/User/UpdateOrder.php?id=" + id + "&sts=" + status)
      .then((response) => response.data)
      .then((data) => {
        this.componentDidMount()
      });
  }




  componentDidMount() {
    axios
      .get("http://localhost/d-cart/backend/Company/Orders.php?id=" + window.sessionStorage.getItem("company-id"))
      .then((response) => response.data)
      .then((data) => {
        this.setState({ bookingData: data });
      });
  }



  render() {
    return (
      <div >
        <br /><br /><br /><br />
        <Box sx={{ height: 400, width: '100%', backgroundColor: "#E4B1EA" }}>
          <h1 align="center">My Bookings</h1>
          <br /><br />
          <DataGrid
            rows={this.state.bookingData}
            columns={this.state.columns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </div>
    )
  }
}
