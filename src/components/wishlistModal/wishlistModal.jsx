import React from "react";
import "./wishlistModal.css";

export default function WishlistModal({ wishlist, onClose, removeFromWishlist }) {
    return (
        <div className="wishlist-overlay">
            <div className="wishlist-modal">
                <div className="wishlist-header">
                    <h3>My ❤️Wishlist ({wishlist.length})</h3>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>
                </div>

                {wishlist.length > 0 ? (
                    <div className="wishlist-table">
                        <div className="wishlist-header-row">
                            <span>Image</span>
                            <span>Name</span>
                            <span>Price</span>
                            <span>Remove</span>
                        </div>

                        {wishlist.map((item) => (
                            <div key={item.id} className="wishlist-row">
                                <img src={item.image} alt={item.name} />
                                <span>{item.name}</span>
                                <span>₹{item.price}</span>
                                <button onClick={() => removeFromWishlist(item.id)}>🗑️</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="empty-msg">Your wishlist is empty.</p>
                )}
            </div>
        </div>
    );
}
