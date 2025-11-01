import React, { useState } from "react";
import "./mobile.css";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // ❤️ Wishlist icons
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../wishlistContext/wishlistContext";
import { useAuth } from "../login/authContext";
import { Link } from "react-router-dom";

const allProducts = [
    {
        id: 201,
        name: "iPhone 15 (128 GB) - Black",
        brand: "Apple",
        price: 49990,
        oldPrice: 69900,
        rating: 5,
        bought: "2k",
        image: "/images/m1.jpg",
        date: "10 Oct",
    },
    {
        id: 202,
        name: "Narzo 80 lite (128 GB) - Blue",
        brand: "Narzo",
        price: 19990,
        oldPrice: 27900,
        rating: 5,
        image: "/images/m3.jpg ",
        bought: "4.8k",
        date: "19 Nov",
    },
    {
        id: 203,
        name: "Sumsung s25 Ultra (512 GB)",
        brand: "Sumsung",
        price: 149990,
        oldPrice: 179990,
        rating: 5,
        image: "/images/m9.webp",
        bought: "12k",
        date: "29 Oct",
    },
    {
        id: 204,
        name: "One Plus 1+ (512 GB) - Black",
        brand: "One Plus",
        price: 18900,
        oldPrice: 37990,
        rating: 4,
        image: "/images/m4.jpg",
        bought: "2k",
        date: "14 Oct",
    },
    {
        id: 205,
        name: "Narzo 80 Lite (254 GB ) - Black",
        brand: "realme",
        price: 17990,
        oldPrice: 29999,
        rating: 4,
        image: "/images/m5.jpg",
        bought: "2k",
        date: "10 Oct",
    },
    {
        id: 206,
        name: "IQOO Z10R (128 GB) - Silver",
        brand: "IQOO",
        price: 21990,
        oldPrice: 28990,
        rating: 4,
        image: "/images/m6.jpg",
        bought: "2.6k",
        date: "28 Oct",
    },
    {
        id: 207,
        name: "iPhone 17 Air (1 TB) - Black",
        brand: "iPhone",
        price: 89900,
        oldPrice: 124990,
        rating: 4.5,
        image: "/images/m7.webp",
        bought: "1.8k",
        date: "17 Dec",
    },
    {
        id: 208,
        name: "Galaxy Z fold7 (512 GB) - Grey",
        brand: "Sumsung",
        price: 129990,
        oldPrice: 169900,
        rating: 3,
        image: "/images/m8.webp",
        bought: "4.5k",
        date: "29 Oct",
    },

];

export default function Mobile() {
    const [price, setPrice] = useState(60000);
    const [ratingFilter, setRatingFilter] = useState(0);
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();
    const { isAuth } = useAuth();

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

    // ✅ Filter Logic
    const filteredProducts = allProducts.filter(
        (p) => p.price <= price && p.rating >= ratingFilter
    );


    return (
        <div className="men-page">
            {/* Header */}
            <div className="men-header">
                <h2>Mobile</h2>
                <div className="breadcrumb">
                    <Link to='/'><span> Home  </span></Link> &nbsp; | &nbsp; <Link to='/laptop'><span> Laptop </span></Link>&nbsp;| &nbsp;<Link to='/entertainment'><span> Entertainment </span></Link>
                </div>
            </div>

            <div className="men-content">


                <div className="sidebar">
                    <div className="filter-box">
                        <h3>Brand</h3>
                        <div className="progress-bar"></div>

                        <div className="category-list">
                            <div className="category-item">
                                <span>Sumsung</span>
                            </div>

                            <div className="category-item">
                                <span>iPhone</span>
                            </div>
                            <div className="category-item">
                                <span>Vivo</span>
                            </div>
                            <div className="category-item">
                                <span>Nokia</span>
                            </div>
                            <div className="category-item">
                                <span>IQOO</span>
                            </div>

                            <div className="category-item">
                                <span>OPPO</span>
                            </div>

                            <div className="category-item">
                                <span>Motorola</span>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Filters */}
                    <div className="filter-box">
                        <h3>Filter by Price</h3>
                        <input
                            type="range"
                            min="10000"
                            max="200000"
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
