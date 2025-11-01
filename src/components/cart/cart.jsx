import React from "react";
import "./cart.css";
import { useCart } from "../cartContext/cartContext";

export default function CartModal({ onClose }) {
    const { cartItems, removeFromCart, addToCart, decreaseFromCart } = useCart();

    const handleIncrease = (item) => {
        addToCart(item, 1); 
    };

    const handleDecrease = (item) => {
    if (item.qty > 1) {
        decreaseFromCart(item);
    } else {
        removeFromCart(item.id);  
    }
};

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const discount = Math.floor(subtotal * 0.05);
    const total = subtotal - discount;

    return (
        <div className="cart-modal-overlay">
            <div className="cart-modal">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>🛍️ Your Cart</h2>

                {cartItems.length === 0 ? (
                    <p className="empty">Your cart is empty</p>
                ) : (
                    <>
                        <div className="cart-header">
                            <span>Image</span>
                            <span>Name</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Remove</span>
                        </div>

                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div className="cart-item" key={item.id}>
                                    <div className="cart-col image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="cart-col name">{item.name}</div>
                                    <div className="cart-col price">₹{item.price}</div>
                                    <div className="cart-col quantity">
                                        <button onClick={() => handleDecrease(item)}>-</button>
                                        <span>{item.qty}</span>
                                        <button onClick={() => handleIncrease(item)}>+</button>
                                    </div>
                                    <div className="cart-col remove">
                                        <button onClick={() => removeFromCart(item.id)}>🗑</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="summary">
                            <h3>Order Summary</h3>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>₹{subtotal}</span>
                            </div>
                            <div className="summary-row">
                                <span>Discount</span>
                                <span>₹{discount}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping</span>
                                <span className="free">Free</span>
                            </div>
                            <hr />
                            <div className="summary-row total">
                                <strong>Total</strong>
                                <strong>₹{total}</strong>
                            </div>

                            <button className="checkout-btn">Proceed to Checkout</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
