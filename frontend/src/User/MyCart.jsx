import React, { Component } from 'react';
import './MyCart.css';
import axios from 'axios';

class MyCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: [],
            totalPrice: 0
        };
    }

    componentDidMount() {
        axios
        .get("http://localhost/d-cart/backend/User/Cart.php?uid="+window.sessionStorage.getItem("user-id"))
        .then((response) => response.data)
        .then((data) => {
          this.setState({ cartItems: data });
        });
      } 

    handleQuantityChange = (id, event) => {
       
        const { cartItems } = this.state;
        const updatedCartItems = cartItems.map(item => {
            if (item.cart_id === id) {
                return { ...item, cart_qty: event.target.value };
            } else {
                return item;
            }
        });

        this.setState({ cartItems: updatedCartItems });
        axios
        .get("http://localhost/d-cart/backend/User/CartUpdate.php?action=update&id="+id+"&qty="+event.target.value)
        .then((response) => response.data)
        .then((data) => {
          
        });
    }

    handleContinueShopping = () => {
        window.location="/User";
    }

    handleRemoveItem = (id) => {
        const { cartItems } = this.state;
        const updatedCartItems = cartItems.filter(item => item.cart_id !== id);

        this.setState({ cartItems: updatedCartItems });
        axios
        .get("http://localhost/d-cart/backend/User/CartUpdate.php?action=Delete&id="+id)
        .then((response) => response.data)
        .then((data) => {
          
        });
    }

    getTotalPrice = () => {
        const { cartItems } = this.state;
        let totalPrice = 0;

        cartItems.forEach(item => {
            totalPrice += item.product_rate * item.cart_qty;
        });

        this.setState({totalPrice})

        return totalPrice;
    }

    checkOut=()=>{
        axios
        .get("http://localhost/d-cart/backend/User/CheckOut.php?amt="+this.state.totalPrice+"&uid="+window.sessionStorage.getItem("user-id"))
        .then((response) => response.data)
        .then((data) => {
            window.sessionStorage.setItem("bookingid",data)
            window.location="/PaymentCart"
        });
    }

    render() {
        const { cartItems } = this.state;

        return (
            <div className="shopping-cart">
                <h2 className="shopping-cart__title">Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div className="shopping-cart__empty-message">
                        <span>Your shopping cart is empty</span>
                        <button onClick={this.handleContinueShopping}>Continue shopping</button>
                    </div>

                ) : (
                    <div>
                        {cartItems.map((item, index) => (
                            <div key={item.id} className="shopping-cart__item">
                                <div className="shopping-cart__item-details">
                                    <div className="shopping-cart__item-img">
                                        <img src={`http://localhost/d-cart/backend/Assets/${item.product_photo}`} alt={item.product_name} />
                                    </div>
                                    <div className="shopping-cart__item-info">
                                        <div className="shopping-cart__item-slno">#{index + 1}</div>
                                        <div className="shopping-cart__item-name">{item.product_name}</div>
                                        <div className="shopping-cart__item-rate">Rate: ${item.product_rate}</div>
                                    </div>
                                </div>
                                <div className="shopping-cart__item-actions">
                                    <label className="shopping-cart__item-quantity-label">Quantity:</label>
                                    <input className="shopping-cart__item-quantity-input" type="number" value={item.cart_qty} min="1" onChange={(event) => this.handleQuantityChange(item.cart_id, event)} />
                                    <button className="shopping-cart__item-remove-btn" onClick={() => this.handleRemoveItem(item.cart_id)}>Remove</button>
                                </div>
                            </div>
                        ))}

                        <h4 className="shopping-cart__total-price">Total Price: ${this.getTotalPrice()}</h4>
                        <button className="shopping-cart__checkout-btn" onClick={this.checkOut}>Checkout</button>
                    </div>
                )}
            </div>
        );
    }
}

export default MyCart;
