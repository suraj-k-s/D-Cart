import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box'
export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: [],
      stateData: [],
      countryId: "",
      stateName: "",
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
          field: "state_name",
          headerName: "State",
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
                  onClick={() => this.countryDelete(params.row.state_id)}
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
        "http://localhost/d-cart/backend/Admin/State.php?id=" + id
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
      countryId: this.state.countryId[0],
      stateName: this.state.stateName[0],
    };

  

    axios
      .post(
        "http://localhost/d-cart/backend/Admin/State.php",
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
        "http://localhost/d-cart/backend/Admin/State.php"
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ stateData: data });
      });
  }
  render() {
    return (
      <div className='logc'>
        <div className='head_pos'>
          <h1 className='headc_style' >state</h1>
          <form id="stateForm">
            <div className="tablec_pos" align="center">
              <table className="table">
                <tbody>
                  <tr>
                    <td className='text_style' >Country</td>
                    <td>
                      <select name="countryId" id="country_id" onChange={this.inputSet}>
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
                    <td className='text_style' >state</td>
                    <td><input className='field_style' type='text' name="stateName"
              onChange={this.inputSet} placeholder='Enter state'  />   </td>
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
            rows={this.state.stateData}
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

