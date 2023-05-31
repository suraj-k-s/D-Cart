import React, { Component } from 'react'
import "./product_list.scss";
import axios from 'axios';
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';

export default class Complaint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complaintData: [],
            columns: [
                {
                    field: "id",
                    headerName: "ID",
                    width: 130,
                },
                {
                    field: "complaint_date",
                    headerName: "Date",
                    width: 260,
                },
                {
                    field: "complaint_details",
                    headerName: "Complaint",
                    width: 260,
                },
                {
                    field: "complaint_reply",
                    headerName: "Reply",
                    width: 260,
                },
               
    
            ]


        };
    }
    componentDidMount() {
        axios
            .get("http://localhost/d-cart/backend/Company/ViewComplaint.php?id=" + window.sessionStorage.getItem("company-id"))
            .then((response) => response.data)
            .then((data) => {
                this.setState({ complaintData: data });
               
            });
    }
    
    render() {
        return (

             <div className='logc'>
                <br/><br/><br/><br/>
           <Box sx={{ height: 400, width: '100%', background: "aquamarine;" }}>
          
          <DataGrid
            rows={this.state.complaintData}
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