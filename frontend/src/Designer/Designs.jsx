import React, { Component } from 'react'
import "./design_upload.scss";
import axios from 'axios';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from "@mui/material";
import { blue } from '@mui/material/colors';
import { BorderColor } from '@mui/icons-material';

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
                {
                    field: "action",
                    headerName: "Action",
                    width: 150,
                    renderCell: (params) => {
                        return (
                            <>
                                {
                                    params.row.design_status == "1" ? "Accepted" : "Rejected"
                                }
                            </>
                        );
                    },
                },
            ],
        };
    }
    componentDidMount() {
        var id = window.sessionStorage.getItem("designer-id");
        axios
            .get("http://localhost/d-cart/backend/Designer/DesignSearch.php?id=" + id)
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
            <div className='logp' style={{ backgroundColor: "#7FD1FC" }}>
                <div className='head_pos'>

                    <div className="tablec_pos" align="center">
                        <Box sx={{ height: 400, width: '100%' }}>
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
                </div>

            </div>
        )
    }
}

