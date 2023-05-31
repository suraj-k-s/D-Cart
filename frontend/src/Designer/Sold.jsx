import React, { Component } from 'react'
import "./design_upload.scss";
import axios from 'axios';
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import { Avatar } from "@mui/material";
export default class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designData: [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "design_photo",
          headerName: "Design",
          width: 260,
          renderCell: (params) => {
            return (
              <>

                < a href={`http://localhost/d-cart/backend/Assets/${params.row.design_photo}`} target="_blank" rel="noreferrer" >

                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost/d-cart/backend/Assets/${params.row.design_photo}`} >
                  </Avatar>
                </a>



              </>
            )
          }
        },
        {
          field: "design_name",
          headerName: "Name",
          width: 260,
        },
        {
          field: "company_name",
          headerName: "Company",
          width: 260,
        },
        {
          field: "design_rate",
          headerName: "Rate",
          width: 260,
        },
        {
          field: "category_name",
          headerName: "Category",
          width: 260,
        },
        {
          field: "subcategory_name",
          headerName: "Subcategory",
          width: 260,
        },

        {
          field: "material_name",
          headerName: "Material",
          width: 260,
        },



      ]

    };
  }
  componentDidMount() {
    var id = window.sessionStorage.getItem("designer-id");
    axios
      .get("http://localhost/d-cart/backend/Designer/Designs.php?id=" + id)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ designData: data });
      });
  }
  buyNow(id) {
    window.sessionStorage.setItem('design', id);
    window.location = "/Payment";
  }
  render() {

    return (

      <div className='logc' style={{ backgroundColor: "pink" }}>
        <br/><br/><br/><br/>
        <Box sx={{ height: 400, width: '100%', background: "pink" }}>
          <h1 align="center">Sold List</h1>
          <DataGrid
            rows={this.state.designData}
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

