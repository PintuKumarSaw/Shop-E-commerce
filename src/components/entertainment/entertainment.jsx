import React, { useState } from "react";
import "./entertainment.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../wishlistContext/wishlistContext";
import { useAuth } from "../login/authContext";
import { Link } from "react-router-dom";

const allProducts = [
    {
        id: 301,
        name: "Handheld Game Console with 400 Classic Games | Portable Retro Video Game Player ",
        brand: "HP",
        price: 1990,
        oldPrice: 4900,
        rating: 5,
        bought: "3.5k",
        image: "/images/e1.webp",
        date: "10 Oct",
    },
    {
        id: 302,
        name: "Crompton Galaxy | Strip Light | 5 Meter | 300 LED | 36W | with in-Built Adaptor",
        brand: "sumsung",
        price: 4900,
        oldPrice: 6900,
        rating: 4,
        image: "/images/e2.webp ",
        bought: "1.5kk",
        date: "19 Nov",
    },
    {
        id: 303,
        name: "Boat Smart Watch for Kids, Men, Boys, Girls, and Women, D20 Plus 2025",
        brand: "Boat",
        price: 1490,
        oldPrice: 1790,
        rating: 5,
        image: "/images/e3.webp",
        bought: "12k",
        date: "29 Oct",
    },
    {
        id: 304,
        name: "OnePlus / JBL / boAt Neckband Earphones – wireless Bluetooth earphones",
        brand: "One +",
        price: 1589,
        oldPrice: 7990,
        rating: 4,
        image: "/images/e4.webp",
        bought: "2k",
        date: "14 Oct",
    },
    {
        id: 305,
        name: " Samsung 43-inch Crystal 4K TV – smart TV with OTT support",
        brand: "Sumsung",
        price: 39990,
        oldPrice: 49999,
        rating: 4,
        image: "/images/e5.webp",
        bought: "2.8k",
        date: "10 Oct",
    },
    {
        id: 306,
        name: "HP M070 Ergonomic Wired Mouse / Optical Engine / Accurate/ 1600 DPI",
        brand: "Hp",
        price: 790,
        oldPrice: 990,
        rating: 4,
        image: "/images/e6.jpg",
        bought: "2.6k",
        date: "28 Oct",
    },
    {
        id: 307,
        name: "pTron Newly Launched Fusion Bliss 16W Bluetooth Speaker with Wireless Mic, Light",
        brand: "pTron",
        price: 890,
        oldPrice: 1290,
        rating: 4.5,
        image: "/images/e7.webp",
        bought: "1.8k",
        date: "17 Dec",
    },
    {
        id: 308,
        name: "Sony PlayStation 5 Digital Edition (slim) Console Video Game",
        brand: "Sony",
        price: 49990,
        oldPrice: 69900,
        rating: 4,
        image: "/images/e8.webp",
        bought: "4.5k",
        date: "29 Oct",
    },

];

export default function Mobile() {
    const [price, setPrice] = useState(5000);
    const [ratingFilter, setRatingFilter] = useState(0);
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();
    const { isAuth } = useAuth();


    // ✅ Filter Logic
    const filteredProducts = allProducts.filter(
        (p) => p.price <= price && p.rating >= ratingFilter
    );

    // ❤️ Wishlist Toggle
    const toggleWishlist = (product) => {
        if (!isAuth) {
            navigate("/login");
            return;
        }
        if (wishlist.find((item) => item.id === product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className="men-page">
            {/* Header */}
            <div className="men-header">
                <h2>Entertainment</h2>
                <div className="breadcrumb">
                    <Link to='/'><span> Home  </span></Link> &nbsp; | &nbsp; <Link to='/mobile'><span> Mobile </span></Link> &nbsp;| &nbsp; <Link to='/laptop'><span> Laptop </span></Link>
                </div>
            </div>

            <div className="men-content">


                <div className="sidebar">
                    <div className="filter-box">
                        <h3>Category</h3>
                        <div className="progress-bar"></div>

                        <div className="category-list">
                            <div className="category-item">
                                <span>📺</span>
                                <span>TV</span>
                            </div>

                            <div className="category-item">
                                <span>🔊</span>
                                <span>Speaker</span>
                            </div>
                            <div className="category-item">
                                <span>⌚</span>
                                <span>Watch</span>
                            </div>
                            <div className="category-item">
                                <span>🎧</span>
                                <span>Bluetoth</span>
                            </div>
                            <div className="category-item">
                                <span>🎮</span>
                                <span>Game</span>
                            </div>

                            <div className="category-item">
                                <span>🔦</span>
                                <span>Lights</span>
                            </div>

                            <div className="category-item">
                                <span>📠</span>
                                <span>Machine</span>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Filters */}
                    <div className="filter-box">
                        <h3>Filter by Price</h3>
                        <input
                            type="range"
                            min="500"
                            max="50000"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                        <div className="price-range">
                            <span>Up to ₹{price}</span>
                        </div>
                    </div>

                    <div className="filter-box">
                        <h3>Filter by Ratings</h3>
                        <div className="ratings">
                            {[5, 4, 3, 2, 1].map((r) => (
                                <p
                                    key={r}
                                    className={ratingFilter === r ? "active" : ""}
                                    onClick={() => setRatingFilter(r)}
                                >
                                    {"⭐".repeat(r)} & Up
                                </p>
                            ))}
                            {ratingFilter > 0 && (
                                <button
                                    className="clear-btn"
                                    onClick={() => setRatingFilter(0)}
                                >
                                    Clear Filter
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="product-section">
                    <p className="found-text">
                        We found {filteredProducts.length} items for you!
                    </p>
                    <div className="product-grid">
                        {filteredProducts.map((item) => {
                            // Convert bought string like "2k" to number
                            const boughtNumber = item.bought.toLowerCase().includes("k")
                                ? parseFloat(item.bought) * 1000
                                : parseFloat(item.bought);

                            // Determine which tag to show
                            let tag = "";
                            if (boughtNumber >= 2000 && item.rating === 5) {
                                tag = "trending";
                            } else if (boughtNumber >= 2000) {
                                tag = "bestseller";
                            }

                            return (
                                <div
                                    className="product-card"
                                    key={item.id}
                                    onClick={() => navigate(`/product/${item.id}`)}
                                >
                                    <div className="image-container">
                                        <img src={item.image} alt={item.name} />
                                        <div
                                            className="wishlist-icon"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleWishlist(item);
                                            }}
                                        >
                                            {wishlist.some((w) => w.id === item.id) ? (
                                                <FaHeart className="heart filled" />
                                            ) : (
                                                <FaRegHeart className="heart" />
                                            )}
                                        </div>

                                        {/* Conditional Tag */}
                                        {tag === "trending" && <div className="trending">TRENDING</div>}
                                        {tag === "bestseller" && <p className="bestseller mt-2">Best seller</p>}
                                    </div>

                                    <div className="product-info">
                                        <p className="brand">By {item.brand}</p>
                                        <span className="fw-bold">{item.name}</span>
                                        <p className="m-0">
                                            {"⭐".repeat(item.rating)} <span>({item.bought})</span>
                                        </p>
                                        <div className="bought">{item.bought}+ bought in past month</div>
                                        <span className="great">Great Indian Festival</span>
                                        <div className="price m-0">
                                            <span className="new price fs-3">₹{item.price}</span>
                                            <sub>
                                                <span>M.R.P:</span>
                                            </sub>
                                            <sub>
                                                <span className="old m-0">₹{item.oldPrice}</span>
                                            </sub>
                                            <sub>
                                                <span className="discount m-0">({item.discount}%off)</span>
                                            </sub>
                                        </div>
                                        <p className="bankcard m-0">10% on select bank cards</p>
                                        <h6 className="m-0">
                                            FREE delivery , <span className="fw-bold">{item.date}</span>
                                        </h6>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
