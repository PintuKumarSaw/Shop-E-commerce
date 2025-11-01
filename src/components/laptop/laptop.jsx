import React, { useState } from "react";
import "./laptop.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../wishlistContext/wishlistContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../login/authContext";
import { Link } from "react-router-dom";

const allProducts = [
    {
        id: 251,
        name: "HP , 13th Gen Intel Core i3-1215H 8 GB RAM, and 512 GB SSD, 15.6cm, FHD, MS Office",
        brand: "HP",
        price: 69990,
        oldPrice: 89900,
        rating: 5,
        bought: "3.5k",
        image: "/images/l1.webp",
        date: "10 Oct",
    },
    {
        id: 252,
        name: "Dell Inspiron 15 3530: Typically comes with Intel Core i3 / i5, 8 GB RAM, and 512 GB SSD.",
        brand: "Dell",
        price: 54900,
        oldPrice: 69900,
        rating: 3,
        image: "/images/l2.webp ",
        bought: "4.8k",
        date: "19 Nov",
    },
    {
        id: 253,
        name: "Apple MacBook Air M4: Apple M2 chip, 8 GB or 16 GB RAM, 256 GB / 512 GB SSD.",
        brand: "Apple",
        price: 149990,
        oldPrice: 179990,
        rating: 5,
        image: "/images/l9.webp",
        bought: "12k",
        date: "29 Oct",
    },
    {
        id: 254,
        name: "Lenovo IdeaPad Slim 3: AMD Ryzen 5, 8 GB / 16 GB RAM, 512 GB SSD.",
        brand: "Lenovo",
        price: 58900,
        oldPrice: 87990,
        rating: 4,
        image: "/images/l4.webp",
        bought: "2k",
        date: "14 Oct",
    },
    {
        id: 255,
        name: " Acer Nitro 5 AN517-41-R7FP: Ryzen 5 5600H, RTX 3060, 16GB, 512GB,″ 144 Hz display.",
        brand: "realme",
        price: 69990,
        oldPrice: 89999,
        rating: 4,
        image: "/images/l5.webp",
        bought: "1.8k",
        date: "10 Oct",
    },
    {
        id: 256,
        name: "Acer Nitro V and Predator / Helios lines have higher-end graphics (RTX 40-/50-series)",
        brand: "Acer",
        price: 79990,
        oldPrice: 98990,
        rating: 5,
        image: "/images/l6.webp",
        bought: "2.6k",
        date: "28 Oct",
    },
    {
        id: 257,
        name: "Apple MacBook Air M2: Apple M2 chip, 8 GB or 16 GB RAM, 256 GB / 512 GB SSD .",
        brand: "Apple",
        price: 89900,
        oldPrice: 124990,
        rating: 4.5,
        image: "/images/l7.webp",
        bought: "1.8k",
        date: "17 Dec",
    },
    {
        id: 258,
        name: "Samsung Galaxy Book4: Intel Core i3 / i5 (13th Gen), 8 GB / 16 GB RAM, 512 GB SSD.",
        brand: "Sumsung",
        price: 129990,
        oldPrice: 169900,
        rating: 4,
        image: "/images/l8.webp",
        bought: "4.5k",
        date: "29 Oct",
    },

];

export default function Mobile() {
    const [price, setPrice] = useState(90000);
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
                <h2>Laptop</h2>
                <div className="breadcrumb">
                    <Link to='/'><span> Home  </span></Link> &nbsp; | &nbsp; <Link to='/mobile'><span> Mobile </span></Link> &nbsp;| &nbsp; <Link to='/entertainment'><span> Entertainment </span></Link>
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
                            min="30000"
                            max="300000"
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
