import React from "react";
import "./popup.css";
import { Link } from "react-router-dom";

const Popup = ({ onClose }) => {
    const handleShopNow = () => {
        onClose();  
        window.scrollTo(0, 0); 
    };

    return (
        <div className="popup-overlay">
            <div className="popup-container offer-layout">
                <button className="close-btn bg-light ps-2 pe-2" onClick={onClose}>
                    &times;
                </button>

                <div className="popup-left">
                    <h2 className="popup-title">New collection</h2>
                    <h1 className="popup-offer">50% OFF</h1>
                    <p className="popup-desc">
                        Get a discount on all items in your next order
                    </p>

                    <Link to="/deals" onClick={handleShopNow}>
                        <span className="shop-btn">Shop now</span>
                    </Link>
                </div>

                <div className="popup-right">
                    <img
                        src="/images/popup2.avif"
                        alt="Offer"
                        className="promo-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Popup;
