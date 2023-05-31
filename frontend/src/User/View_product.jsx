import React, { Component } from 'react'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import axios from 'axios';

export default class View_product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designData: [],
      categoryData: [],
      subcategoryData: [],
      category: "",
      subcategory: "",
      productData: [],
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost/d-cart/backend/User/product.php?id=" + window.sessionStorage.getItem("companyProduct"))
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ productData: data });
      });

    axios
      .get("http://localhost/d-cart/backend/Admin/Category.php")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ categoryData: data });
      });
  }
  ajaxSubcategory(id) {
    axios
      .get("http://localhost/d-cart/backend/Admin/AjaxSubcategory.php?id=" + id)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ subcategoryData: data });
      });
  }
  searchData(sub) {
    axios
      .get("http://localhost/d-cart/backend/User/Searchproduct.php?sub=" + sub)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ productData: data });
      });
  }

  addcart(id) {
    axios
      .get("http://localhost/d-cart/backend/User/AddCart.php?uid=" + window.sessionStorage.getItem("user-id") + "&pid=" + id)
      .then((response) => response.data)
      .then((data) => {
        alert(data);
      });
  }


  viewMore(id) {
    window.sessionStorage.setItem("viewProduct", id);
    window.location = "/User/view_mo";
  }


  render() {
    return (
      <section className='main container section'>
        <div style={{ margin: "" }}>
          <table border={0} >
            <tr>
              <td>Category</td>
              <td>
                <select onChange={(e) => this.ajaxSubcategory(e.target.value)}>
                  <option value="">--select category..</option>
                  {
                    this.state.categoryData.map((val) => (
                      <option key={val.id} value={val.category_id}>{val.category_name}</option>
                    ))
                  }

                </select>
              </td>
              <td>SubCategory</td>
              <td>
                <select onChange={(e) => this.searchData(e.target.value)}>
                  <option value="">--Select subcategory</option>
                  {
                    this.state.subcategoryData.map((val) => (
                      <option key={val.id} value={val.subcategory_id}>{val.subcategory_name}</option>
                    ))
                  }
                </select>
              </td>

            </tr>
          </table>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="secContent grid">
          {
            this.state.productData.map((data, index) => {

              return (
                <div key={data.id} className='singleDestination'>
                  {/*return single id from the map array*/}
                  <div data-aos="fade-up" data-aos-duration="3000" className="imageDiv">
                    <img
                      alt=''
                      src={`data:image/jpeg;base64,${data.design_converted}`}
                      // src={`http://localhost/d-cart/backend/Assets/${data.product_photo}`}
                      height={120}
                      width={120}
                    />

                  </div>
                  <div data-aos="fade-up" data-aos-duration="3000" className="cardInfo">

                    <h4 className="destTitle">
                      {data.product_name}
                    </h4>

                    <span className="continent flex">

                      <span className="name">{data.country_name}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <b> <div style={{ color: "#004ADF" }} className='price'>₹{data.product_rate}</div></b>

                      </div>
                    </div>
                    <div className="desc">
                      <p><b>
                        <div>{data.product_details}</div>
                      </b> </p>
                    </div>




                    <button onClick={() => this.addcart(data.product_id)} className="btn btn-primary">
                      Add to Cart<HiOutlineClipboardCheck className="icon" />
                    </button>
                    <button onClick={() => this.viewMore(data.product_id)} className="btn btn-primary">
                      View More<HiOutlineClipboardCheck className="icon" />
                    </button>



                  </div>
                </div>
              )
            })
          }


        </div>
      </section>
    )
  }
}


