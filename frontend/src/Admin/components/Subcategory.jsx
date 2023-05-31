import React, { Component } from 'react'
import "./subcategory.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box'

export default class Subsubcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      scategoryData: [],
      categoryId: "",
      subCategoryName: "",
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "category_name",
          headerName: "Category",
          width: 260,
        },
        {
          field: "subcategory_name",
          headerName: "Sub Category",
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
                  onClick={() => this.categoryDelete(params.row.subcategory_id)}
                />
              </>
            );
          },
        },
      ],
    };
  }



  categoryDelete = (id) => {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/Subcategory.php?id=" + id
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
      categoryId: this.state.categoryId,
      subCategoryName: this.state.subCategoryName,
    };

    axios
      .post(
        "http://localhost/d-cart/backend/Admin/Subcategory.php",
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
        "http://localhost/d-cart/backend/Admin/Category.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ categoryData: data });
      });
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/Subcategory.php"
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ scategoryData: data });
      });
  }
  render() {
    return (
      <div className='logc'>
        <div className='head_pos'>
          <h1 className='headc_style' >subcategory</h1>
          <form id="subcategoryForm">
            <div className="tablec_pos" align="center">
              <table className="table">
                <tbody>
                  <tr>
                    <td className='text_style' >Category</td>
                    <td>
                      <select name="categoryId" id="categoryId" onChange={this.inputSet}>
                        <option value="">-----Select Category------</option>
                        {this.state.categoryData.map((result) => (
                          <option value={result.category_id}>
                            {result.category_name}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className='text_style' >subcategory</td>
                    <td><input className='field_style' type='text' name="subCategoryName"
              onChange={this.inputSet} placeholder='Enter subcategory'  />   </td>
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
            rows={this.state.scategoryData}
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