import React, { Component } from "react";
import axios from "axios";
import {  Clear, Done } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import { Avatar } from "@mui/material";

export default class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designData: [],
      adesignData: [],
      rdesignData: [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "design_name",
          headerName: "Design",
          width: 260,
        },
        {
          field: "design_photo",
          headerName: "Photo",
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
          field: "designer_name",
          headerName: "Designer",
          width: 260,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Done
                  onClick={() => this.designAccept(params.row.design_id,1)}
                />
                <Clear
                  onClick={() => this.designReject(params.row.design_id,2)}
                />
              </>
            );
          },
        },
      ],
      acolumns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "design_name",
          headerName: "Design",
          width: 260,
        },
        {
          field: "design_photo",
          headerName: "Photo",
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
          field: "designer_name",
          headerName: "Designer",
          width: 260,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Clear
                  onClick={() => this.designReject(params.row.design_id,2)}
                />
              </>
            );
          },
        },
      ],
      rcolumns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "design_name",
          headerName: "Design",
          width: 260,
        },
        {
          field: "design_photo",
          headerName: "Photo",
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
          field: "designer_name",
          headerName: "Designer",
          width: 260,
        },
       
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                 <Done
                  onClick={() => this.designAccept(params.row.design_id,1)}
                />
                
              </>
            );
          },
        },
      ],
    };
  }



  designAccept = (id,sts) => {
    axios
      .post(
        "http://localhost/d-cart/backend/Admin/DesignList.php?id=" + id+"&status="+sts
      )
      .then((response) => {
        if (response.data === "Updated") {
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };

  designReject = (id,sts) => {
    axios
      .post(
        "http://localhost/d-cart/backend/Admin/DesignList.php?id=" + id+"&status="+sts
      )
      .then((response) => {
        if (response.data === "Updated") {
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };



  componentDidMount() {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/DesignList.php"
      )
      .then((response) => response.data)
      .then((data) => {
        
        
        this.setState({ designData: data });
      
      });
      axios
      .get(
        "http://localhost/d-cart/backend/Admin/AcceptedDesign.php"
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ adesignData: data });
      
      });
      axios
      .get(
        "http://localhost/d-cart/backend/Admin/RejectedDesignList.php"
      )
      .then((response) => response.data)
      .then((data) => {
        
        this.setState({ rdesignData: data });
      
      });
      
  }


  render() {
    return (
      <div className='logc'>
        <Box sx={{ height: 400, width: '100%', background: "black" }}>
          <h1 align="center">New Designs List</h1>
          <DataGrid
            rows={this.state.designData}
            columns={this.state.columns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
        <Box sx={{ height: 400, width: '100%', background: "black" }}>
          <h1 align="center">Accepted Designs List</h1>
          <DataGrid
            rows={this.state.adesignData}
            columns={this.state.acolumns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
        <Box sx={{ height: 400, width: '100%', background: "black" }}>
          <h1 align="center">Rejected Designs List</h1>
          <DataGrid
            rows={this.state.rdesignData}
            columns={this.state.rcolumns}
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
