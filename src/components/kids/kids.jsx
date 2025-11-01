import React, { useState } from "react";
import "./kids.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // ❤️ Wishlist icons
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../wishlistContext/wishlistContext";
import { useAuth } from "../login/authContext";
import { Link } from "react-router-dom";

const allProducts = [
    {
        id: 101,
        name: "Baby Girls Calf Length Casual Dress",
        brand: "Altecia",
        price: 999,
        oldPrice: 1999,
        rating: 5,
        bought: "3.5k",
        image: "/images/k1.webp",
    },
    {
        id: 102,
        name: " Girls Below Knee Festive/Wedding Dress",
        brand: "V-Mart",
        price: 399,
        oldPrice: 899,
        rating: 2,
        bought: "1.5k",
        image: "/images/k2.webp",
    },
    {
        id: 103,
        name: "Girls Below Knee Party Dress ",
        brand: "V-Mart",
        price: 699,
        oldPrice: 1590,
        rating: 3,
        bought: "2.5k",
        image: "/images/k3.webp ",
    },
    {
        id: 104,
        name: "skirt and top set for festivals or weddings",
        brand: "Bushirt",
        price: 850,
        oldPrice: 1200,
        rating: 5,
        bought: "3.5k",
        image: "/images/k4.webp",
    },
    {
        id: 5,
        name: "long-sleeve dresses, often layered",
        brand: "GESPO",
        price: 399,
        oldPrice: 799,
        rating: 4,
        bought: "3.5k",
        image: "/images/k5.webp",
    },
    {
        id: 106,
        name: " light, airy dresses for hot weather ",
        brand: "GESPO",
        price: 499,
        oldPrice: 899,
        rating: 4,
        bought: "2.1k",
        image: "/images/k6.webp",
    },
    {
        id: 107,
        name: " fancy dress for parties or weddings",
        brand: "GESPO",
        price: 690,
        oldPrice: 999,
        rating: 4.5,
        bought: "1.8k",
        image: "/images/k7.webp",
    },
    {
        id: 108,
        name: "casual, comfy, often with fun prints",
        brand: "GESPO",
        price: 490,
        oldPrice: 1499,
        rating: 3,
        bought: "1.5k",
        image: "/images/k8.webp",
    },

];

export default function KidsPage() {
    const navigate = useNavigate();
    const [price, setPrice] = useState(60000);
    const [ratingFilter, setRatingFilter] = useState(0);
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
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
                <h2>Kid's</h2>
                <div className="breadcrumb">
                    <Link to='/'><span> Home  </span></Link> &nbsp; | &nbsp;<Link to='/women'><span> Women </span></Link>&nbsp;| &nbsp;<Link to='/men'><span> Men </span></Link>
                </div>
            </div>

            <div className="men-content">


                <div className="sidebar">
                    <div className="filter-box">
                        <h3>Category</h3>
                        <div className="progress-bar"></div>

                        <div className="category-list">
                            <div className="category-item">
                                <span>👗</span>
                                <span>Frocks</span>
                            </div>

                            <div className="category-item">
                                <span>👖</span>
                                <span>Jeans</span>
                            </div>
                            <div className="category-item">
                                <span>🩳</span>
                                <span>Shorts</span>
                            </div>
                            <div className="category-item">
                                <span>❄️</span>
                                <span>Winter </span>
                            </div>
                            <div className="category-item">
                                <span>🏃‍♂️</span>
                                <span>Sportswear</span>
                            </div>

                            <div className="category-item">
                                <span>🎒</span>
                                <span>Bags</span>
                            </div>

                            <div className="category-item">
                                <span>👟</span>
                                <span>Shoes</span>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Filters */}
                    <div className="filter-box">
                        <h3>Filter by Price</h3>
                        <input
                            type="range"
                            min="100"
                            max="3000"
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
                            // Ensure bought exists
                            const boughtNumber = item.bought
                                ? item.bought.toLowerCase().includes("k")
                                    ? parseFloat(item.bought) * 1000
                                    : parseFloat(item.bought)
                                : 0;

                            let tag = "";
                            if (boughtNumber >= 2000 && item.rating === 5) tag = "trending";
                            else if (boughtNumber >= 2000) tag = "bestseller";

                            return (
                                <div className="product-card" key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
                                    <div className="mimage-container">
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

                                        {tag === "trending" && <div className="trending">TRENDING</div>}
                                        {tag === "bestseller" && <p className="bestseller mt-2">Best seller</p>}
                                    </div>

                                    <div className="product-info">
                                        <p className="category">Fashion</p>
                                        <h4>{item.name}</h4>
                                        <p className="brand">By {item.brand}</p>
                                        <div className="rating">{"⭐".repeat(item.rating)}</div>
                                        <div className="price">
                                            <span className="new">₹{item.price}</span>
                                            <span className="old">₹{item.oldPrice}</span>
                                        </div>
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
