import axios from 'axios';
import React, { Component } from 'react'

export default class View_complaints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complaintData: [],
    }
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost/d-cart/backend/Admin/Complaint.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ complaintData: data });
      });
  }


  submitReply(id) {
    window.sessionStorage.setItem('complaint', id);
    window.location = "/Admin/Reply";
  }

  render() {
    return (
      <div className='logc'>
        <div className='head_pos'>
          <h1 className='headc_style' >View Complaints</h1>
          <div className='tablec_pos' align="center">
            <table className='tablec' border={1}>
              <tbody>
                <tr>
                  <td>SL.NO</td>
                  <td>Date</td>
                  <td>Company</td>
                  <td>Complaint</td>
                  <td>Action</td>
                </tr>
                {
                  this.state.complaintData.map((data, key) => (
                    <tr>
                      <td>{data.id}</td>
                      <td>{data.complaint_date}</td>
                      <td>{data.complaint_details}</td>
                      <td>{data.company_name}</td>
                      <td>
                        <button onClick={() => this.submitReply(data.complaint_id)}>
                          Reply
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
