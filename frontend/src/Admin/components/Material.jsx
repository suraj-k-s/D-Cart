import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box'

export default class Material extends Component {
  constructor(props) {
    super(props);
    this.state = {
      material: "",
      materialData: [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "material_name",
          headerName: "Material",
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
                  className="materialListDelete"
                  onClick={() => this.materialDelete(params.row.material_id)}
                />
              </>
            );
          },
        },
      ],
    };
  }



  materialDelete = (id) => {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/Material.php?id=" + id
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
      material_name: this.state.material,
    };

    axios
      .post(
        "http://localhost/d-cart/backend/Admin/Material.php",
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
        "http://localhost/d-cart/backend/Admin/Material.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ materialData: data });
      
      });
  }

  cancelCourse = () => {
    document.getElementById("materialForm").reset();
  };

  render() {
    return (
      <div className='logc'>
        <div className='head_pos'>
          <h1 className='headc_style' >Material</h1>
          <form id="materialForm">
            <div className="tablec_pos" align="center">
              <table className="table">
                <tbody>
                  <tr>
                    <td className='text_style' >Material</td>
                    <td><input className='field_style' type='text' name='material' placeholder='Enter Material' onChange={this.inputSet} />   </td> 
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
            rows={this.state.materialData}
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