import React, { useState } from "react";
import "./men.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../wishlistContext/wishlistContext";
import { Link } from "react-router-dom";

const allProducts = [
    {
        id: 1,
        name: "Altecia Tie and Dye Jogger",
        brand: "Altecia",
        price: 999,
        oldPrice: 1999,
        rating: 5,
        image: "/images/mns1.webp",
        bought: "3.5k",
    },
    {
        id: 2,
        name: "Black Solid Casual Shirt",
        brand: "V-Mart",
        price: 459,
        oldPrice: 899,
        rating: 2,
        image: "/images/mns2.webp",
        bought: "1.8k",
    },
    {
        id: 3,
        name: "Glito Black Solid Dry-Fit",
        brand: "V-Mart",
        price: 460,
        oldPrice: 490,
        rating: 3,
        image: "/images/mns3.webp ",
        bought: "2.7k",
    },
    {
        id: 4,
        name: "Men Checkered Long Sleeve",
        brand: "Bushirt",
        price: 850,
        oldPrice: 1200,
        rating: 5,
        image: "/images/mns4.webp",
        bought: "3.5k",
    },
    {
        id: 5,
        name: "GESCO Peach Solid Mandar",
        brand: "GESPO",
        price: 1500,
        oldPrice: 2000,
        rating: 4,
        image: "/images/mns5.webp",
        bought: "2k",

    },
    {
        id: 6,
        name: "Men Layerr Regular Fit Spread Collar Cotton Shirt",
        brand: "GESPO",
        price: 699,
        oldPrice: 1799,
        rating: 4,
        bought: "1.8k",
        image: "/images/mns6.webp",
    },
    {
        id: 7,
        name: "Men long sleeve casual shirt",
        brand: "GESPO",
        price: 990,
        oldPrice: 1999,
        rating: 4.5,
        bought: "2.8k",
        image: "/images/mns7.webp",
    },
    {
        id: 8,
        name: "Fit Half Sleeves Colorblocked T-Shirt",
        brand: "GESPO",
        price: 490,
        oldPrice: 1499,
        rating: 3,
        bought: "3.8k",
        image: "/images/mns8.webp",
    },

];

export default function MenPage() {
    const navigate = useNavigate();
    const [price, setPrice] = useState(1000);
    const [ratingFilter, setRatingFilter] = useState(0);
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

    // ✅ Filter Logic
    const filteredProducts = allProducts.filter(
        (p) => p.price <= price && p.rating >= ratingFilter
    );

    // ❤️ Wishlist Toggle
    const toggleWishlist = (product) => {
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
                <h2>Men</h2>
                <div className="breadcrumb">
                    <Link to='/'><span> Home  </span></Link>&nbsp; | &nbsp; <Link to='/women'><span> Women </span></Link> &nbsp;| &nbsp;<Link to='/kids'><span> Kid's </span></Link>
                </div>
            </div>

            <div className="men-content">


                <div className="sidebar">
                    <div className="filter-box">
                        <h3>Category</h3>
                        <div className="progress-bar"></div>

                        <div className="category-list">
                            <div className="category-item">
                                <span>👕</span>
                                <span>Shirt</span>
                            </div>

                            <div className="category-item">
                                <span>👖</span>
                                <span>Jeans</span>
                            </div>
                            <div className="category-item">
                                <span>🧥</span>
                                <Link to='/men'><span>Jacket</span></Link>
                            </div>
                            <div className="category-item">
                                <span>👔</span>
                                <span>Formal</span>
                            </div>
                            <div className="category-item">
                                <span>🕶️</span>
                                <span>Goggles</span>
                            </div>

                            <div className="category-item">
                                <span>🎒</span>
                                <span>Bags</span>
                            </div>

                            <div className="category-item">
                                <span>👟</span>
                                <Link to='/menshoes'><span>Footwear</span></Link>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Filters */}
                    <div className="filter-box">
                        <h3>Filter by Price</h3>
                        <input
                            type="range"
                            min="500"
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
