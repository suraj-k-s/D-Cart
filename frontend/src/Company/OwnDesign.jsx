import React, { Component } from 'react'
import "./product_list.scss";
import axios from 'axios';
import { Avatar, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

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
                                  <button className="btn btn-primary" onClick={() => this.addProduct(params.row.design_id)}>Add as Product</button>

          
                        </>
                      )
                    }
                  },
            ]
        };
    }
    componentDidMount() {
        axios
            .get("http://localhost/d-cart/backend/Company/OwnDesign.php?id="+window.sessionStorage.getItem("company-id"))
            .then((response) => response.data)
            .then((data) => {
                this.setState({ designData: data });
            });
    }
    addProduct(id) {
        window.sessionStorage.setItem('designProduct', id);
        window.location = "/Company/Product";
    }
    render() {
      
            return (

                <div className='logc'>
                   <br/><br/><br/><br/>
              <Box sx={{ height: 400, width: '100%', background: "aquamarine;" }}>
            <br/><br/>
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
//             <div style={{backgroundColor:" pink"}} className='logp'>
               
//                     <div className="tablec_pos" align="center">
//                         <table className="table" style={{borderWidth:"thick", boxShadow:"30px", borderSpacing:"5px" , borderColor:"white"}} border={1}>
//                             <tr style={{backgroundColor:" rgb(254, 165, 180)", fontSize:"20px"}}>
//                                 <th>SL NO</th>
//                                 <th>Design</th>
//                                 <th>Name</th>
//                                 <th>Designer</th>
//                                 <th>Rate</th>
//                                 <th>Category</th>
//                                 <th>Sub category</th>
//                                 <th>Material</th>
//                                 <th>Action</th>
//                             </tr>
//                             {
//                                 this.state.designData.map((data, index) => {
//                                     return (
//                                         <tr key={index}>
//                                             <td>{data.id}</td>
//                                             <td>
//                                                 <img
//                                                     alt=''
//                                                     //src={`data:image/jpeg;base64,${data.design_converted}`} 
//                                                    src={`http://localhost/d-cart/backend/Assets/${data.design_photo}`}
//                                                     height={120}
//                                                     width={120}
//                                                 />
//                                             </td>
//                                             <td>{data.design_name}</td>
//                                             <td>{data.designer_name}</td>
//                                             <td>{data.design_rate}</td>
//                                             <td>{data.category_name}</td>
//                                             <td>{data.subcategory_name}</td>
//                                             <td>{data.material_name}</td>
//                                             <td>
                                                

//                                             </td>
//                                         </tr>
//                                     )
//                                 })
//                             }
                            
//                         </table>
//                     </div>
                
//             </div>
//         )
//     }
// }
