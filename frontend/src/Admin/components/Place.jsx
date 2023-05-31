import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box'
export default class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtData: [],
      countryData: [],
      stateData: [],
      placeData: [],
      districtId: "",
      placeName: "",
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "district_name",
          headerName: "District",
          width: 260,
        },
        {
          field: "place_name",
          headerName: "Place",
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
                  className="districtListDelete"
                  onClick={() => this.districtDelete(params.row.district_id)}
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

  ajaxDistrict = (id) => {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/AjaxDistrict.php?id=" + id
      )
      
      .then((response) => response.data)
      .then((data) => {
        this.setState({ districtData: data });
      });
  };

  districtDelete = (id) => {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/Place.php?id=" + id
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
      districtId: this.state.districtId[0],
      placeName: this.state.placeName[0],
    };


    console.log(dat);
    axios
      .post(
        "http://localhost/d-cart/backend/Admin/Place.php",
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
        "http://localhost/d-cart/backend/Admin/Place.php"
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ placeData: data });
      });
  }
  render() {
    return (
      <div className='logc'>
        <div className='head_pos'>
          <h1 className='headc_style' >place</h1>
          <form id="placeForm">
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
                      <select name="stateId" id="state_id" onChange={(e)=>this.ajaxDistrict(e.target.value)}>
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
                    <td> <select name="districtId" id="district_id"
                      onChange={this.inputSet}>  <option value="">-----Select District------</option>
                      {this.state.districtData.map((result, key) => (
                        <option key={key} value={result.district_id}>
                          {result.district_name}
                        </option>
                      ))}
                    </select>
                    </td>

                  </tr>
                  <tr>
                  <td className='text_style' >place</td>
                    <td><input className='field_style' type='text' name="placeName"
              onChange={this.inputSet} placeholder='Enter place'  />   </td>
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
            rows={this.state.placeData}
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

