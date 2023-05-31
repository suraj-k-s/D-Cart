import axios from 'axios';
import React, { Component } from 'react'

export default class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complaintReply: "",
    }
  }
  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };


  saveData = (e) => {
    e.preventDefault();

    const id = window.sessionStorage.getItem('complaint');
    const formData = new FormData();
    formData.append("id", id);
    formData.append("reply", this.state.complaintReply);
        axios({
            method: "POST",
            url: "http://localhost/d-cart/backend/Admin/Reply.php",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(function (response) {
            if (response.data) {
              alert('Replied');
               window.location = "/Admin/View_complaints";
            }
          });
  };
  render() {
    return (
      <div className='logc'>
        <div className='head_pos'>
          <h1 className='headc_style' >Reply</h1>
          <div className="tablec_pos" align="center">
            <table className="table">
              <tr>
                <td className='text_style' >Reply</td>
                <td><textarea className='field_style' onChange={this.inputSet} type='text' name='complaintReply' placeholder='Enter reply' ></textarea></td>
              </tr>
            </table>
          </div>
        </div>
        <div className="btnc_pos">
          <input className='btn' type='button' onClick={this.saveData} value='submit'></input>
        </div>
      </div>
    )
  }
}
