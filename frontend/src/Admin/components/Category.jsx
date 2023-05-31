import React, { Component } from 'react'
import "./category.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box'

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      categoryData: [],
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
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline
                  className="categoryListDelete"
                  onClick={() => this.categoryDelete(params.row.category_id)}
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
        "http://localhost/d-cart/backend/Admin/Category.php?id=" + id
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
      category_name: this.state.category,
    };

    axios
      .post(
        "http://localhost/d-cart/backend/Admin/Category.php",
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
        "http://localhost/d-cart/backend/Admin/Category.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ categoryData: data });
      
      });
  }

  cancelCourse = () => {
    document.getElementById("categoryForm").reset();
  };

  render() {
    return (
      <div className='logc'>
        <div className='head_pos'>
          <h1 className='headc_style' >Category</h1>
          <form id="categoryForm">
            <div className="tablec_pos" align="center">
              <table className="table">
                <tbody>
                  <tr>
                    <td className='text_style' >Category</td>
                    <td><input className='field_style' type='text' name='category' placeholder='Enter Category' onChange={this.inputSet} />   </td> 
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
            rows={this.state.categoryData}
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