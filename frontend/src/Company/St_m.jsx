import React, { Component } from 'react'
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default class St_m extends Component {
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
                  field: "stock_date",
                  headerName: "Date",
                  width: 260,
                },
                {
                  field: "stock_qty",
                  headerName: "Quantity",
                  width: 260,
                },
                {
                  field: "product_name",
                  headerName: "Product",
                  width: 260,
                },
        
        
              ]
            };
        
        
        
          }



  render() {
    return (
      
        <div className='logg'>
        <br/><br/><br/><br/>
   <Box sx={{ height: 400, width: '100%',backgroundColor:"#E4B1EA" }}>
  <h1 align="center">Stock</h1>
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
    )
  }
}


