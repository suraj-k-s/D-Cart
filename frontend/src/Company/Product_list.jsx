import React, { Component } from 'react'
import "./product_list.scss";
import axios from 'axios';
import { Avatar } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';

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
                    field: "product_photo",
                    headerName: "Product",
                    width: 260,
                    renderCell: (params) => {
                        return (
                            <>

                                < a href={`http://localhost/d-cart/backend/Assets/${params.row.product_photo}`} target="_blank" rel="noreferrer" >

                                    <Avatar
                                        alt="Remy Sharp"
                                        
                                        src={`http://localhost/d-cart/backend/Assets/${params.row.product_photo}`} >
                                    </Avatar>
                                </a>



                            </>
                        )
                    }

                },
                {
                    field: "design_name",
                    headerName: "Design",
                    width: 260,
                },
                {
                    field: "designer_name",
                    headerName: "Designer",
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
                    width: 260,
                    renderCell: (params) => {
                        return (
                            <>

                                    <button className="btn btn-primary" onClick={() => this.addStock(params.row.product_id)}>Add Stock</button><br/>
                                    <button className="btn btn-primary" onClick={() => this.addGallery(params.row.product_id)}>gallery</button>


                            </>
                        )
                    }

                },

            ]


        };
    }
    componentDidMount() {
        axios
            .get("http://localhost/d-cart/backend/Company/OwnProduct.php?id=" + window.sessionStorage.getItem("company-id"))
            .then((response) => response.data)
            .then((data) => {
                this.setState({ designData: data });
                console.log(data);
            });
    }
    addStock(id) {
        window.sessionStorage.setItem('product', id);
        window.location = "/Company/Stock";
    }
    addGallery(id) {
        window.sessionStorage.setItem('product', id);
        window.location = "/Company/Gallery";
    }
    render() {
        return (

             <div className='logc'>
                <br/><br/><br/><br/>
           <Box sx={{ height: 400, width: '100%', background: "aquamarine;" }}>
          <h1 align="center">Product List</h1>
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