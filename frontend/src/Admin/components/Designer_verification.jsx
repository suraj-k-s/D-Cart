import React, { Component } from "react";
import axios from "axios";
import { Clear, Done } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import { Avatar } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';

export default class Designer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designerData: [],
      adesignerData: [],
      rdesignerData: [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "designer_name",
          headerName: "Contact",
          width: 260,
        },
        {
          field: "designer_address",
          headerName: "Address",
          width: 260,
        },
        {
          field: "designer_email",
          headerName: "Email",
          width: 260,
        },
        {
          field: "designer_photo",
          headerName: "Photo",
          width: 260,
          renderCell: (params) => {
            return (
              <>
                < a href={`http://localhost/d-cart/backend/Assets/${params.row.designer_photo}`} target="_blank" rel="noreferrer" >
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost/d-cart/backend/Assets/${params.row.designer_photo}`} >
                  </Avatar>
                </a>
              </>
            )
          }
        },
        {
          field: "designer_proof",
          headerName: "Proof",
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
                  onClick={() => this.designerAccept(params.row.designer_id, 1)}
                />
                <Clear
                  onClick={() => this.designerReject(params.row.designer_id, 2)}
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
          field: "designer_name",
          headerName: "Designer",
          width: 260,
        },
        {
          field: "designer_contact",
          headerName: "Contact",
          width: 260,
        },
        {
          field: "designer_address",
          headerName: "Address",
          width: 260,
        },
        {
          field: "designer_email",
          headerName: "Email",
          width: 260,
        },
        {
          field: "designer_photo",
          headerName: "photo",
          width: 260,
          renderCell: (params) => {
            return (
              <>

                < a href={`http://localhost/d-cart/backend/Assets/${params.row.designer_photo}`} target="_blank" rel="noreferrer" >

                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost/d-cart/backend/Assets/${params.row.designer_photo}`} >
                  </Avatar>
                </a>



              </>
            )
          }
        },
        {
          field: "designer_proof",
          headerName: "Proof",
          width: 260,
        
        renderCell: (params) => {
          return (
            <>

              < a href={`http://localhost/d-cart/backend/Assets/${params.row.designer_photo}`} target="_blank" rel="noreferrer" >

                <Avatar
                  alt="Remy Sharp"
                  src={`http://localhost/d-cart/backend/Assets/${params.row.designer_photo}`} >
                </Avatar>
              </a>



            </>
          )
        }
      },
      
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Clear
                  onClick={() => this.designerReject(params.row.designer_id, 2)}
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
          field: "designer_name",
          headerName: "Designer",
          width: 260,
        },
        {
          field: "designer_contact",
          headerName: "Designer",
          width: 260,
        },
        {
          field: "designer_address",
          headerName: "Address",
          width: 260,
        },
        {
          field: "designer_email",
          headerName: "Email",
          width: 260,
        },
        {
          field: "designer_photo",
          headerName: "photo",
          width: 260,
          renderCell: (params) => {
            return (
              <>

                < a href={`http://localhost/d-cart/backend/Assets/${params.row.designer_photo}`} target="_blank" rel="noreferrer" >

                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost/d-cart/backend/Assets/${params.row.designer_photo}`} >
                  </Avatar>
                </a>



              </>
            )
          }
        },
        
        {
          field: "designer_proof",
          headerName: "Proof",
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
                  onClick={() => this.designerAccept(params.row.designer_id, 1)}
                />
              </>
            );
          },
        },
      ],
    };
  }



  designerAccept = (id, sts) => {
    axios
      .post(
        "http://localhost/d-cart/backend/Admin/DesignerList.php?id=" + id + "&status=" + sts
      )
      .then((response) => {
        if (response.data === "Updated") {
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };

  designerReject = (id, sts) => {
    axios
      .post(
        "http://localhost/d-cart/backend/Admin/DesignerList.php?id=" + id + "&status=" + sts
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
        "http://localhost/d-cart/backend/Admin/DesignerList.php"
      )
      .then((response) => response.data)
      .then((data) => {

        this.setState({ designerData: data });

      });
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/AcceptedDesignerList.php"
      )
      .then((response) => response.data)
      .then((data) => {

        this.setState({ adesignerData: data });

      });
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/RejectedDesignerList.php"
      )
      .then((response) => response.data)
      .then((data) => {

        this.setState({ rdesignerData: data });

      });

  }


  render() {
    return (
      <div className='logc'>
        {/* Data Grid Start */}
        <Box sx={{ height: 400, width: '100%', background: "black" }}>
          <h1 align="center">New Designers List</h1>
          <DataGrid
            rows={this.state.designerData}
            columns={this.state.columns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
        {/* Data Grid End */}
        <Box sx={{ height: 400, width: '100%', background: "black" }}>
          <h1 align="center">Accepted Designers List</h1>
          <DataGrid
            rows={this.state.adesignerData}
            columns={this.state.acolumns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
        <Box sx={{ height: 400, width: '100%', background: "black" }}>
          <h1 align="center">Rejected Designers List</h1>
          <DataGrid
            rows={this.state.rdesignerData}
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
