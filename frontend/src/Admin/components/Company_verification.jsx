import React, { Component } from "react";
import axios from "axios";
import {  Clear, Done } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import { Avatar } from "@mui/material";
export default class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CompanyData: [],
      aCompanyData: [],
      rCompanyData: [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "company_name",
          headerName: "Company",
          width: 260,
        },
        {
          field: "company_contact",
          headerName: "Contact",
          width: 260,
        },
        {
          field: "company_email",
          headerName: "Email",
          width: 260,
        },
        {
          field: "company_address",
          headerName: "Address",
          width: 260,
        },
        {
          field: "company_logo",
          headerName: "Logo",
          width: 260,
          renderCell: (params) => {
            return (
              <>
                < a href={`http://localhost/d-cart/backend/Assets/${params.row.company_logo}`} target="_blank" rel="noreferrer" >
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost/d-cart/backend/Assets/${params.row.company_logo}`} >
                  </Avatar>
                </a>
              </>
            )
          }
        },
        {
          field: "company_proof",
          headerName: "Proof",
          width: 260,
          renderCell: (params) => {
            return (
              <>
                < a href={`http://localhost/d-cart/backend/Assets/${params.row.company_proof}`} target="_blank" rel="noreferrer" >
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost/d-cart/backend/Assets/${params.row.company_proof}`} >
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
                <Done
                  onClick={() => this.CompanyAccept(params.row.company_id,1)}
                />
                <Clear
                  onClick={() => this.CompanyReject(params.row.company_id,2)}
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
          field: "company_name",
          headerName: "Company",
          width: 260,
        },
        {
          field: "company_contact",
          headerName: "Contact",
          width: 260,
        },
        {
          field: "company_email",
          headerName: "Email",
          width: 260,
        },
        {
          field: "company_address",
          headerName: "Address",
          width: 260,
        },
        {
          field: "company_logo",
          headerName: "Logo",
          width: 260,
          renderCell: (params) => {
            return (
              <>
                < a href={`http://localhost/d-cart/backend/Assets/${params.row.company_logo}`} target="_blank" rel="noreferrer" >
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost/d-cart/backend/Assets/${params.row.company_logo}`} >
                  </Avatar>
                </a>
              </>
            )
          }
        },
        {
          field: "company_proof",
          headerName: "Proof",
          width: 260,
          renderCell: (params) => {
            return (
              <>
                < a href={`http://localhost/d-cart/backend/Assets/${params.row.company_proof}`} target="_blank" rel="noreferrer" >
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost/d-cart/backend/Assets/${params.row.company_proof}`} >
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
                  onClick={() => this.CompanyReject(params.row.company_id,2)}
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
          field: "company_name",
          headerName: "Company",
          width: 260,
        },
        {
          field: "company_contact",
          headerName: "Contact",
          width: 260,
        },
        {
          field: "company_email",
          headerName: "Email",
          width: 260,
        },
        {
          field: "company_address",
          headerName: "Address",
          width: 260,
        },
        {
          field: "company_logo",
          headerName: "Logo",
          width: 260,
          renderCell: (params) => {
            return (
              <>
                < a href={`http://localhost/d-cart/backend/Assets/${params.row.company_logo}`} target="_blank" rel="noreferrer" >
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost/d-cart/backend/Assets/${params.row.company_logo}`} >
                  </Avatar>
                </a>
              </>
            )
          }
        },
        {
          field: "company_proof",
          headerName: "Proof",
          width: 260,
          renderCell: (params) => {
            return (
              <>
                < a href={`http://localhost/d-cart/backend/Assets/${params.row.company_proof}`} target="_blank" rel="noreferrer" >
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost/d-cart/backend/Assets/${params.row.company_proof}`} >
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
                <Done
                  onClick={() => this.CompanyAccept(params.row.company_id,1)}
                />
              </>
            );
          },
        },
      ],
    };
  }



  CompanyAccept = (id,sts) => {
    axios
      .post(
        "http://localhost/d-cart/backend/Admin/CompanyList.php?id=" + id+"&status="+sts
      )
      .then((response) => {
        if (response.data === "Updated") {
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };

  CompanyReject = (id,sts) => {
    axios
      .post(
        "http://localhost/d-cart/backend/Admin/CompanyList.php?id=" + id+"&status="+sts
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
        "http://localhost/d-cart/backend/Admin/CompanyList.php"
      )
      .then((response) => response.data)
      .then((data) => {
        
        this.setState({ CompanyData: data });
      
      });
      axios
      .get(
        "http://localhost/d-cart/backend/Admin/AcceptCompanyList.php"
      )
      .then((response) => response.data)
      .then((data) => {
        
        this.setState({ aCompanyData: data });
      
      });
      axios
      .get(
        "http://localhost/d-cart/backend/Admin/RejectCompanyList.php"
      )
      .then((response) => response.data)
      .then((data) => {
        
        this.setState({ rCompanyData: data });
      
      });
  }


  render() {
    return (
      <div className='logc'>
        <Box sx={{ height: 400, width: '100%', background: "black" }}>
        <h1 align="center">New Company List</h1>
          <DataGrid
            rows={this.state.CompanyData}
            columns={this.state.columns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
        <Box sx={{ height: 400, width: '100%', background: "black" }}>
        <h1 align="center">Accepted Company List</h1>
          <DataGrid
            rows={this.state.aCompanyData}
            columns={this.state.acolumns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
        <Box sx={{ height: 400, width: '100%', background: "black" }}>
        <h1 align="center">Rejected Company List</h1>
          <DataGrid
            rows={this.state.rCompanyData}
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
