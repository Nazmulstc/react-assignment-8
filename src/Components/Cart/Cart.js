import React from 'react';
import './Cart.css'

// Data Recived to Appointment 
const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.Appointment;
    }
    return (
        <div className="cart">
            <h1>Appointment Summary</h1>
            <h3>Appointment With: {cart.length}</h3>
            <p>Total Cost: {total} Tk</p>
            <button className="pay-button">Pay to Confirm</button>
        </div>
    );
};

export default Cart;