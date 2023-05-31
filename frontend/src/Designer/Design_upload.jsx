import React, { Component } from "react";
import "./design_upload.scss";
import axios from "axios";

export default class Design_upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materialData: [],
      categoryData: [],
      subcategoryData: [],
      name: "",
      subcategory: "",
      photo: "",
      details: "",
      rate: "",
      material: "",
      watermarkedFile: "",
      converted: ""
    };
  }

  saveData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", this.state.watermarkedFile);
    formData.append("name", this.state.name);
    formData.append("details", this.state.details);
    formData.append("rate", this.state.rate);
    formData.append("material", this.state.material);
    formData.append("subcategory", this.state.subcategory);
    formData.append("converted", this.state.converted);
    formData.append("id", window.sessionStorage.getItem("designer-id"));

    axios({
      method: "POST",
      url: "http://localhost/d-cart/backend/Designer/Design.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      if (response.data==true) {
        window.location = "/Designer/Design_upload";
      }
      else{
        alert(response.data);
      }
    });
  };

  addWatermarkToImage = (imageFile, watermarkText) => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      const img = new Image();
      img.onload = () => {
        // set canvas size to image size
        canvas.width = img.width;
        canvas.height = img.height;

        // draw image on canvas
        ctx.drawImage(img, 0, 0);

        // draw text watermark on canvas
        ctx.font = 'bold 30px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.textAlign = 'center';
        ctx.fillText(watermarkText, canvas.width / 2, canvas.height / 2);

        // convert canvas to data URL
        const watermarkedDataURL = canvas.toDataURL('image/jpeg');

        // convert data URL to Blob object
        const watermarkedBlob = this.dataURLToBlob(watermarkedDataURL);

        // resolve with watermarked image blob
        resolve(watermarkedBlob);
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(imageFile);
    });
  };

  dataURLToBlob = (dataURL) => {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  };



  inputSet = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  inputPhoto = (e) => {
    const photo = e.target.files[0];
    const name = window.sessionStorage.getItem("designer-name");
    this.addWatermarkToImage(photo, name)
      .then((watermarkedBlob) => {
        const watermarkedFile = new File([watermarkedBlob], photo.name, { type: photo.type });
        this.setState({ watermarkedFile });
      })
      .catch(console.error);


    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1];
      this.setState({ converted : base64String });
    };
    reader.readAsDataURL(photo);
    // src={`data:image/jpeg;base64,${base64String}`}
  };


  getSubcategory = (e) => {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/AjaxSubcategory.php?id=" +
        e.target.value
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ subcategoryData: data });
      });
  };

  componentDidMount() {
    axios
      .get("http://localhost/d-cart/backend/Admin/Material.php")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ materialData: data });
      });


    axios
      .get(
        "http://localhost/d-cart/backend/Admin/Category.php")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ categoryData: data });
      });
  }
  render() {
    return (
      <div
        className="reg"
      >
        <div className="head_pos">
          <h1 className="head_style">Design Registration</h1>
        </div>
        <div className="table_pos" align="center">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">Name</h1>
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    className="field_style"
                    placeholder="Enter Name"
                    onChange={this.inputSet}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h1 className="text_style">Details</h1>
                </td>
                <td>
                  <textarea
                    name="details"
                    className="field_style"
                    defaultValue={""}
                    onChange={this.inputSet}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">rate</h1>
                </td>
                <td>
                  <input
                    type="text"
                    name="rate"
                    onChange={this.inputSet}
                    className="field_style"
                    placeholder="Enter Rate"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">Material</h1>
                </td>
                <td>
                  <select name="material" required onChange={this.inputSet}>
                    <option value={""}>Select Material</option>
                    {this.state.materialData.map((result) => (
                      <option key={result.material_id} value={result.material_id}>
                        {result.material_name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className="text_style">Category</h1>
                </td>
                <td>
                  <select name="category" required onChange={this.getSubcategory}>
                    <option value={""}>Select Category</option>
                    {this.state.categoryData.map((result) => (
                      <option key={result.category_id} value={result.category_id}>
                        {result.category_name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className="text_style">Sub category</h1>
                </td>
                <td>
                  <select name="subcategory" required onChange={this.inputSet}>
                    <option value={""}>Select category</option>
                    {this.state.subcategoryData.map((result) => (
                      <option
                        key={result.subcategory_id}
                        value={result.subcategory_id}
                      >
                        {result.subcategory_name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <h1 className="text_style">Photo</h1>
                </td>
                <td>
                  <input
                    name="photo"
                    onChange={this.inputPhoto}
                    type="file"
                    className="field_style"
                    placeholder="upload photo"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btn_reg">
            <input
              className="btn"
              onClick={this.saveData}
              type="button"
              value="submit"
            />
            <input className="btn" type="button" name="Cancel" value="Cancel" />
          </div>
        </div>
      </div>
    );
  }
}
