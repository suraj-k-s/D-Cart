import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box'
export default class District extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countryData:[],
      stateData: [],
      districtData: [],
      stateId: "",
      districtName: "",
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "state_name",
          headerName: "State",
          width: 260,
        },
        {
          field: "district_name",
          headerName: "District",
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
                  className="countryListDelete"
                  onClick={() => this.stateDelete(params.row.state_id)}
                />
              </>
            );
          },
        },
      ],
    };
  }

  ajaxState = (id) => {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/AjaxState.php?id=" + id
      )
      
      .then((response) => response.data)
      .then((data) => {
        this.setState({ stateData: data });
      });
  };

  stateDelete = (id) => {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/District.php?id=" + id
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
      stateId: this.state.stateId[0],
      districtName: this.state.districtName[0],
    };

  
console.log(dat);
    axios
      .post(
        "http://localhost/d-cart/backend/Admin/District.php",
        dat
      )
      .then((response) => {
        if (response.data === "Success") {
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
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/District.php"
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ districtData: data });
      });
  }
  render() {
    return (
      <div className='logc'>
        <div className='head_pos'>
          <h1 className='headc_style' >district</h1>
          <form id="districtForm">
            <div className="tablec_pos" align="center">
              <table className="table">
                <tbody>
                  <tr>
                    <td className='text_style' >Country</td>
                    <td>
                      <select name="countryId" id="country_id" onChange={(e)=>this.ajaxState(e.target.value)}>
                        <option value="">-----Select Country------</option>
                        {this.state.countryData.map((result,key) => (
                          <option key={key} value={result.country_id}>
                            {result.country_name}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className='text_style' >State</td>
                    <td>
                      <select name="stateId" id="state_id" onChange={this.inputSet}>
                        <option value="">-----Select State------</option>
                        {this.state.stateData.map((result,key) => (
                          <option key={key} value={result.state_id}>
                            {result.state_name}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className='text_style' >district</td>
                    <td><input className='field_style' type='text' name="districtName"
              onChange={this.inputSet} placeholder='Enter district'  />   </td>
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
            rows={this.state.districtData}
            columns={this.state.columns}
            pageSize={20}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </div>
    );
  }
}

