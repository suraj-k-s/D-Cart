import axios from 'axios';
import React, { Component } from 'react'

export default class View_more extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      galleryData: [],
      reviewData: [],
    }
  }


  componentDidMount() {
    axios
      .get("http://localhost/d-cart/backend/User/ProductViewMore.php?id=" + window.sessionStorage.getItem("viewProduct"))
      .then((response) => response.data)
      .then((data) => {
        this.setState({ productData: data[0] });
        this.setState({ galleryData: data[0].gallery });
        this.setState({ reviewData: data[0].review });
      });
  }

  render() {
    return (
      <div>
        <table style={{ padding: "100px" }}>
          <tbody>
            <tr>
              <td>
                <table style={{ padding: "100px" }}>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          alt=''
                          src={`http://localhost/d-cart/backend/Assets/${this.state.productData.product_photo}`}
                          style={{ width: "260px", height: "260px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Rate &nbsp; &nbsp;  &nbsp; :  {this.state.productData.product_rate}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Product : {this.state.productData.product_name}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Details &nbsp; :  {this.state.productData.product_details}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table style={{ padding: "100px" }}>
                  <tbody>
                    {
                      this.state.galleryData.map((e, key) => (
                        <tr key={key}>
                          <td >
                            <img
                              alt=''
                              src={`http://localhost/d-cart/backend/Assets/${e.gallery_file}`}
                              style={{ width: "60px", height: "60px" }}
                            /><br />
                            {e.gallery_caption}
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td colSpan='2'>
                <table style={{ padding: "100px" }}>
                  <tbody>
                    {
                      this.state.reviewData.map((e, key) => (
                        <tr key={key}>
                          <td>
                            <img
                              alt=''
                              src={`http://localhost/d-cart/backend/Assets/${e.user_photo}`}
                              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                            />
                          </td>
                          <td>
                            {e.user_name}
                          </td>
                          <td>
                            {e.review_details}
                          </td>
                          <td>
                            {[...Array(5)].map((_, i) => {
                              return (
                                <label key={i}>
                                  {i < e.review_count ? <span style={{ color: "#ffca28" }}> &#9733;</span> : <span > &#9733;</span>}
                                </label>
                              );
                            })}
                          </td>

                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
