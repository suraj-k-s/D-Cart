import React, { Component } from "react";
import "./product.scss";
import axios from "axios";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      qty: "",
      stockData: [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "stock_date",
          headerName: "Date",
          width: 260,
        },
        {
          field: "stock_qty",
          headerName: "Quantity",
          width: 260,
        },
        {
          field: "product_name",
          headerName: "Product",
          width: 260,
        },


      ]
    };



  }


  componentDidMount() {


    axios
      .get("http://localhost/d-cart/backend/Company/Stock.php?id=" + window.sessionStorage.getItem("product"))
      .then((response) => response.data)
      .then((data) => {
        this.setState({ stockData: data });
        console.log(data);
      });


     
  }



  saveData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("qty", this.state.qty);
    formData.append("date", this.state.date);
    formData.append("product", window.sessionStorage.getItem("product"));

    axios({
      method: "POST",
      url: "http://localhost/d-cart/backend/Company/Stock.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      
      if (response.data) {
       
        window.location = "/Company/Stock";
      }
    });
  };


  inputSet = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


  render() {
    return (
      <div
        className="reg"
      >
        <br /> <br />
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
                    type="date"
                    name="date"
                    className="field_style"
                    placeholder="Enter Date"
                    onChange={this.inputSet}
                  />
                </td>
              </tr>


              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">rate</h1>
                </td>
                <td>
                  <input
                    type="number"
                    name="qty"
                    onChange={this.inputSet}
                    className="field_style"
                    placeholder="Enter QTY"
                  />
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
            />
            <input className="btn" type="button" name="Cancel" value="Cancel" />
          </div>
          <div className='logg'>
            <br /><br /><br /><br />
            <Box sx={{ height: 400, width: '100%', backgroundColor: "#E4B1EA" }}>
              <h1 align="center">Stock</h1>
              <DataGrid
                rows={this.state.stockData}
                columns={this.state.columns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
              />
            </Box>
          </div>
        </div>
      </div>

    );
  }
}



