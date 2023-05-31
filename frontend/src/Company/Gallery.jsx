import React, { Component } from 'react'
import "./gallery.scss";
import { Avatar, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { TbTextColor } from 'react-icons/tb';
import axios from 'axios';
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryData: [],
     
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "product_name",
          headerName: "Product",
          width: 260,
        },
        {
          field: "gallery_caption",
          headerName: "Caption",
          width: 260,
        },
        {
          field: "gallery_file",
          headerName: "File",
          width: 260,
          renderCell: (params) => {
            return (
                <>

                    < a href={`http://localhost/d-cart/backend/Assets/${params.row.gallery_file}`} target="_blank" rel="noreferrer" >

                        <Avatar
                            alt="Remy Sharp"
                            
                            src={`http://localhost/d-cart/backend/Assets/${params.row.gallery_file}`} >
                        </Avatar>
                    </a>



                </>
            )
        }

        },

      ]
    }
  }

  saveData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", this.state.photo);
    formData.append("caption", this.state.caption);
    formData.append("did", window.sessionStorage.getItem("product"));

    axios({
      method: "POST",
      url: "http://localhost/d-cart/backend/Company/Gallery.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      if (response.data) {
        window.location = "/Company/Gallery";

      }
    });
  };


  inputSet = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  inputPhoto = (e) => {
    const photo = e.target.files[0];
    this.setState({ photo });
  };
  componentDidMount() {
    axios
      .get("http://localhost/d-cart/backend/Company/Gallery.php?id=" + window.sessionStorage.getItem("product"))
      .then((response) => response.data)
      .then((data) => {
        this.setState({ galleryData: data });
       
      });
  }
  render() {
    return (
      <div
        className="reg" >
        <div className="head_pos">

        </div>
        <div className="table_pos" align="center">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  {/* {" "} */}
                  <h1 className="text_style">Gallery Caption</h1>
                </td>
                <td>
                  <input
                    type="text"
                    name="caption"
                    className="field_style"
                    placeholder="Caption"
                  onChange={this.inputSet}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {/* {" "} */}
                  <h1 className="text_style">Gallery File</h1>
                </td>
                <td>
                  <input
                    type="file"
                    name="caption"
                    className="field_style"
                    placeholder="Gallery file"
                  onChange={this.inputPhoto}
                  />
                </td>
              </tr>
            </tbody></table>
          <div className="btn_gall">
            <input
              className="btn"
                onClick={this.saveData}
              type="button"
              value="submit"
            />
            <input className="btn" type="button" name="Cancel" value="Cancel" />
          </div>
          <div className='logg'>
            <br /><br /><br /><br />
            <Box sx={{ height: 400, width: '100%', backgroundColor: "#E4B1EA" }}>
              <h1 align="center">Gallery</h1>
              <DataGrid
                rows={this.state.galleryData}
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













