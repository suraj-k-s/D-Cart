import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';

export default class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      countryData: [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "country_name",
          headerName: "Country",
          width: 260,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline
                  className="categoryListDelete"
                  onClick={() => this.countryDelete(params.row.country_id)}
                />
              </>
            );
          },
        },
      ],
    };
  }



  countryDelete = (id) => {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/Country.php?id=" + id
      )
      .then((response) => {
        if (response.data === "Success") {
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    var dat = {
      country_name: this.state.country,
    };

    axios
      .post(
        "http://localhost/d-cart/backend/Admin/Country.php",
        dat
      )
      .then((response) => {
        if (response.data === "Success") {
          this.cancelCourse();
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/Country.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ countryData: data });
      
      });
  }

  cancelCourse = () => {
    document.getElementById("countryForm").reset();
  };

  render() {
    return (
      <div className='logc'>
        <div className='head_pos'>
          <h1 className='headc_style' >Country</h1>
          <form id="countryForm">
            <div className="tablec_pos" align="center">
              <table className="table">
                <tbody>
                  <tr>
                    <td className='text_style' >Country</td>
                    <td><input className='field_style ' type='text' name='country' onChange={this.inputSet} placeholder='Enter Country' ></input></td>
                  </tr>
                  <tr>
                    <td colSpan="2" align="center">
                      <div className="btnc_pos">
                        <input className='btn' type='button' onClick={this.saveData} value='submit'></input>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <Box sx={{ height: 400, width: '100%', background: "black" }}>
          <DataGrid
            rows={this.state.countryData}
            columns={this.state.columns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </div>
    );
  }
}
