import React, { useState } from "react";
import "./womenShoes.css";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // ❤️ Wishlist icons
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../wishlistContext/wishlistContext";
import { useAuth } from "../login/authContext";
import { Link } from "react-router-dom";

const allProducts = [
    {
        id: 451,
        name: "Sports Air Max Ultraboost",
        price: 890,
        oldPrice: 1900,
        rating: 5,
        bought: "2k",
        image: "/images/ws1.webp",
        date: "10 Oct",
    },
    {
        id: 452,
        name: "Soft Frequence Street Runnig Shoe",
        price: 990,
        oldPrice: 1900,
        rating: 3,
        image: "/images/ws2.webp ",
        bought: "1.8k",
        date: "19 Nov",
    },
    {
        id: 453,
        name: "Girl Go Run Ekevate Runnnig Shoe",
        price: 1190,
        oldPrice: 1990,
        rating: 5,
        image: "/images/ws3.webp",
        bought: "12k",
        date: "29 Oct",
    },
    {
        id: 454,
        name: " Skechers Go Walk Street Shoe",
        price: 699,
        oldPrice: 990,
        rating: 4,
        image: "/images/ws4.webp",
        bought: "2k",
        date: "14 Oct",
    },
    {
        id: 455,
        name: "Adidas Profoam Fuegi Running Shoe ",
        price: 2290,
        oldPrice: 4999,
        rating: 4,
        image: "/images/ws5.webp",
        bought: "2k",
        date: "10 Oct",
    },
    {
        id: 456,
        name: "Timberland Courma Girl",
        price: 1990,
        oldPrice: 3990,
        rating: 4,
        image: "/images/ws6.webp",
        bought: "2.6k",
        date: "28 Oct",
    },
    {
        id: 457,
        name: "Cause Shoes For Women | Comfortable",
        price: 2190,
        oldPrice: 3990,
        rating: 4.5,
        image: "/images/ws7.webp",
        bought: "1.8k",
        date: "17 Dec",
    },
    {
        id: 458,
        name: "Women Vans Classic Slip-On | Formal",
        price: 1199,
        oldPrice: 3987,
        rating: 3,
        image: "/images/ws8.webp",
        bought: "4.5k",
        date: "29 Oct",
    },

];

export default function WomenShoes() {
    const [price, setPrice] = useState(2000);
    const [ratingFilter, setRatingFilter] = useState(0);
    // const numbers = [5, 6, 7, 8];
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
                <h2>Women's Shoes</h2>
                <div className="breadcrumb">
                    <Link to='/'><span> Home  </span></Link>&nbsp;&nbsp; | &nbsp;&nbsp;<Link to='/menshoes'><span> Men's Shoes </span></Link>&nbsp;
                </div>
            </div>

            <div className="men-content">


                <div className="sidebar">
                    <div className="filter-box">
                        <h3>Brand</h3>
                        <div className="progress-bar"></div>

                        <div className="category-list">
                            <div className="category-item">
                                <span>Nike</span>
                            </div>

                            <div className="category-item">
                                <span>Adidas</span>
                            </div>
                            <div className="category-item">
                                <span>Puma</span>
                            </div>
                            <div className="category-item">
                                <span>Skechers</span>
                            </div>
                            <div className="category-item">
                                <span>Reebok</span>
                            </div>

                            <div className="category-item">
                                <span>Campus</span>
                            </div>

                            <div className="category-item">
                                <span>Asian</span>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Filters */}
                    <div className="filter-box">
                        <h3>Filter by Price</h3>
                        <input
                            type="range"
                            min="500"
                            max="5000"
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
                                    <div className="msimage-container">
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
