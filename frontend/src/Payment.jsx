import React, { Component } from "react";
import anime from "animejs";
import './payment.css'
import { Button } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import axios from "axios";

export default class PaymentClass extends Component {
  state = {
    cardNumber: "0000 0000 0000 0000",
    cardHolderName: "",
    cardExpirationDate: "",
    cardCVV: "",
    cardType: "💳",
  };
  flipCard = () => {
    anime({
      targets: ".credit-card-inner",
      rotateY: "180deg",
      duration: "100",
      easing: "linear",
    });
  };
  unFlipCard = () => {
    anime({
      targets: ".credit-card-inner",
      rotateY: "360deg",
      duration: "100",
      easing: "linear",
    });
  };
  setCardType = (type) => {
    this.setState({ cardType: type });
  };
  checkSubstring = (length, match) => {
    return this.state.cardNumber.substring(0, length) === match;
  };
  setNumber = (e) => {
    const cardNumber = e.target.value;
    this.setState({ cardNumber }, () => {
      const { cardNumber } = this.state;
      if (cardNumber[0] === "4") {
        this.setCardType("Visa");
      } else if (this.checkSubstring(4, "6011")) {
        this.setCardType("Discover");
      } else if (this.checkSubstring(2, "51")) {
        this.setCardType("MasterCard");
      } else if (this.checkSubstring(2, "34")) {
        this.setCardType("American Express");
      } else if (this.checkSubstring(3, "300")) {
        this.setCardType("Diners Club");
      } else if (this.checkSubstring(2, "35")) {
        this.setCardType("JCB");
      } else {
        this.setCardType("💳");
      }
    });
  };
  setName = (e) => {
    const cardHolderName = e.target.value.toUpperCase();
    this.setState({ cardHolderName });
  };
  setDate = (e) => {
    let data = e.target.value.split("");
    console.log(data);
    let cardExpirationDate = data
      .map((x) => {
        return x === "-" ? "/" : x;
      })
      .join("");
    console.log(cardExpirationDate);
    this.setState({ cardExpirationDate });
  };
  setCVV = (e) => {
    const cardCVV = e.target.value;
    this.setState({ cardCVV });
  };
  submitData()
  {
    const id = window.sessionStorage.getItem('design');
    const formData = new FormData();
    formData.append("id", id);
    formData.append("cid", window.sessionStorage.getItem("company-id"));
        axios({
            method: "POST",
            url: "http://localhost/d-cart/backend/Company/DesignInsert.php",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(function (response) {
            console.log(response);
            if (response.data) {
              alert('Payment Completed');
              window.location = "/Company";
            }
          });
  }
  render() {
    const {
      cardNumber,
      cardHolderName,
      cardExpirationDate,
      cardCVV,
      cardType,
    } = this.state;
    return (
      <div className="pcontainer">
        <div className="credit-card">
          <div className="credit-card-inner">
            <div className="credit-card-front">
              <div id="card-type">{cardType}</div>
              <div id="card-number">{cardNumber}</div>

              <div id="card-expiration">
                {cardExpirationDate !== "" && (
                  <div id="validthru">Valid Thru</div>
                )}
                {cardExpirationDate}
              </div>

              <div id="card-holder-name">{cardHolderName}</div>
            </div>
            <div className="credit-card-back">
              <div className="card-stripe" />
              <div className="card-sig-container">
                <div className="signature">{cardHolderName}</div>
                CVC {cardCVV}
              </div>
              <p className="credits">
                Built with Cleave.js, Anime.js, and React Icons By Suraj K S.
              </p>
            </div>
          </div>
        </div>
        <form className="card-form">
          <label className="pinput-label">Credit Card Number</label>
          <input
            placeholder="Enter your credit card number"
            options={{ creditCard: true }}
            id="number-input"
            name="number-input"
            className="ptext-input"
            maxLength="16"
            onChange={this.setNumber}
          />
          <label className="pinput-label">Card Holder Name</label>
          <input
            type="text"
            placeholder="Enter card holder name"
            value={cardHolderName}
            onChange={(e) => this.setName(e)}
            className="ptext-input"
            maxLength="30"
          />
          <div className="date-and-csv" style={{ display: "flex" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <label className="pinput-label">Expiration Date</label>
              <input
                type="month"
                placeholder="Enter expiration date"
                className="ptext-input"
                onChange={(e) => this.setDate(e)}
                // style={{ height: "23px", fontSize: "16px", fontWeight: "100" }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <label className="pinput-label">CVC Security Code</label>
              <input
                options={{
                  numeral: "true",
                }}
                placeholder="Enter CVC"
                maxLength="3"
                value={cardCVV}
                className="ptext-input"
                onChange={(e) => this.setCVV(e)}
                onFocus={this.flipCard}
                onBlur={this.unFlipCard}
              />
            </div>
          </div>
        </form>
        <div>
          <Button className="pay_btn" onClick={this.submitData}>
            Click to Pay
            <PaymentIcon />
          </Button>
        </div>
      </div>
    );
  }
}