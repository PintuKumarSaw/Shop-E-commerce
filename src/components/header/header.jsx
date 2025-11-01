import React, { useState, useEffect } from "react";
import "./header.css";
import { FaBars, FaTimes, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../cartContext/cartContext";
import CartModal from "../cart/cart";
import { useWishlist } from "../wishlistContext/wishlistContext";
import WishlistModal from "../wishlistModal/wishlistModal";
import { useNavigate } from "react-router-dom";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const { cartItems, removeFromCart } = useCart();
    const { wishlist, removeFromWishlist } = useWishlist();
    const [showWishlist, setShowWishlist] = useState(false);
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        if (value) {
            navigate(value);
        }
    };

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20); // if scrolled more than 20px
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="nav-logo">
                <img src="/images/logo.png" alt="logo" />
            </div>

            <div className={`nav-right ${menuOpen ? "active" : ""}`}>
                <div className="nav-search">
                    <select onChange={handleCategoryChange}>
                        <option value="/">All</option>
                        <option value="/deals">Trending Product</option>
                        <option value="/beauty">Beauty</option>
                        <option value="/mobile">Mobile</option>
                        <option value="/laptop">Laptop</option>
                        <option value="/entertainment">Entertainment</option>
                        <option value="/kids">Kid's Fashion</option>
                        <option value="/women">Women's Fashion</option>
                        <option value="/men">Men's Fashion</option>
                        <option value="/men">Women's Shoes</option>
                        <option value="/men">Men's Shoes</option>
                        <option value="/groceries">Groceries</option>

                    </select>
                    <input type="text" placeholder="Search for items..." />
                    <button className="search-btn">
                        <FaSearch />
                    </button>
                </div>

                {/* Icons */}
                <div className="nav-icons">
                    <div className="icon-box" onClick={() => setShowWishlist(true)}>
                        <FaHeart /> <span className="badge">{wishlist.length}</span> Wishlist
                    </div>


                    {/* 🛒 Cart icon opens modal */}
                    <div className="icon-box" onClick={() => setShowCart(true)}>
                        <FaShoppingCart /> <span className="badge">{totalQty}</span> Cart
                    </div>

                    <div className="dropdown account-dropdown">
                        <button className="login-btn bi bi-person-check me-3"></button>
                        <div className="dropdown-menu dropdown-menu-end">
                            <div className="dropdown-header">
                                <h6>Welcome to <span>ShopNest</span></h6>
                                <p className="mb-0">Access account</p>
                            </div>
                            <div className="dropdown-footer mt-2">
                                <Link to="/register"><button className="btn btn-primary m-2">Register</button></Link>
                                <Link to="/login"><button className="btn btn-success m-2">Login</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toggle button for mobile */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Wishlist Modal */}
            {showWishlist && (
                <WishlistModal
                    wishlist={wishlist}
                    onClose={() => setShowWishlist(false)}
                    removeFromWishlist={removeFromWishlist}
                />
            )}


            {/* ✅ Cart Modal (corrected) */}
            {showCart && (
                <CartModal onClose={() => setShowCart(false)}>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="info">
                                        <h4>{item.name}</h4>
                                        <p>Qty: {item.qty}</p>
                                        <p>₹{item.price * item.qty}</p>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)}>❌</button>
                                </div>
                            ))}

                            {/* 🧾 Total Section */}
                            <div className="cart-total">
                                <h4>Total Amount:</h4>
                                <h3>₹{totalAmount.toFixed(2)}</h3>
                            </div>

                            <button className="btn btn-success w-100 mt-2">
                                Proceed to Checkout
                            </button>
                        </>
                    )}
                </CartModal>
            )}
        </nav>
    );
}
