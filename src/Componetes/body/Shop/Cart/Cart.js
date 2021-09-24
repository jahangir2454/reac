import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const uptaotal = (pre, cart) => pre + cart.price;
    const total = cart.reduce(uptaotal, 0)
    const usshipping = (pre, cart) => pre + cart.shipping;
    const shipping = cart.reduce(usshipping, 0)
    const tex = (total + shipping) * 0.20;
    const Estimated = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tex + Estimated;
    return (
        <div className="carts">
            <div className="summry">
                <h3>Order Summary</h3>
                <p>Items ordered:{cart.length}</p>
            </div>
            <div className="total">
                <p>Items</p>
                <p>${total.toFixed(2)}</p>
            </div>
            <div className="total">
                <p>Shipping & Handling:	</p>
                <p>$ {shipping.toFixed(2)} </p>
            </div>
            <div className="total">
                <p>Total before tax:</p>
                <p>$ {tex.toFixed(2)} </p>
            </div>
            <div className="total">
                <p>Estimated Tax:</p>
                <p>${Estimated.toFixed(2)}</p>
            </div>
            <div className="total">
                <p>Order Total:</p>
                <p>$ {grandTotal.toFixed(2)}</p>
            </div>
            <button>Review your oder</button>
        </div>
    );
};

export default Cart;