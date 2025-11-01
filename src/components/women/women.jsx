import React, { useState } from "react";
import "./women.css";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // ❤️ Wishlist icons
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../wishlistContext/wishlistContext";
import { useAuth } from "../login/authContext";
import { Link } from "react-router-dom";

const allProducts = [
    {
        id: 51,
        name: "Cotton Set-Tie & Dye Tracksuit with Insert Pockets-Women ",
        brand: "Altecia",
        price: 999,
        oldPrice: 1999,
        rating: 4,
        image: "/images/w1.jpg",
        bought: "2.5k",
    },
    {
        id: 52,
        name: "Siril Poly Silk White & Beige Color Saree With Blouse Piece | sarees for Women",
        brand: "V-Mart",
        price: 459,
        oldPrice: 899,
        rating: 5,
        image: "/images/w2.webp",
        bought: "5.7k",
    },
    {
        id: 53,
        name: "Siril Poly Silk White & Beige Color Saree With Blouse Piece | sarees for Women",
        brand: "V-Mart",
        price: 799,
        oldPrice: 1990,
        rating: 3,
        image: "/images/w3.webp ",
    },
    {
        id: 54,
        name: "VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for Women",
        brand: "Bushirt",
        price: 699,
        oldPrice: 1290,
        rating: 5,
        bought: "2.5k",
        image: "/images/w4.webp",
    },
    {
        id: 55,
        name: "Deel Band Women Rayon Embroidered Kurta Pant Dupatta Set",
        brand: "GESPO",
        price: 1490,
        oldPrice: 1999,
        rating: 5,
        bought: "3.5k",
        image: "/images/w5.webp",
    },
    {
        id: 56,
        name: "A-Line Kurti With Sharara & Dupatta",
        brand: "GESPO",
        price: 799,
        oldPrice: 1799,
        rating: 4,
        image: "/images/w6.jpg",
        bought: "3.5k",
    },
    {
        id: 57,
        name: "Buy New Trend Women Black Cotton Blend Top | top for women  ",
        brand: "GESPO",
        price: 990,
        oldPrice: 1999,
        rating: 4.5,
        bought: "3.5k",
        image: "/images/w7.webp",
    },
    {
        id: 58,
        name: "Glowworld Women Blue Printed Cotton Kurta",
        brand: "GESPO",
        price: 490,
        oldPrice: 1499,
        rating: 3,
        bought: "1.7k",
        image: "/images/w8.jpg",
    },

];

export default function WomenPage() {
    const [price, setPrice] = useState(1000);
    const [ratingFilter, setRatingFilter] = useState(0);
    const navigate = useNavigate();
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
                <h2>Women</h2>
                <div className="breadcrumb">
                    <Link to='/'><span> Home  </span></Link> &nbsp; | &nbsp;<Link to='/men'><span> Men </span></Link>&nbsp;| &nbsp; <Link to='/kids'><span> Kid's </span></Link>
                </div>
            </div>

            <div className="men-content">
                <div className="sidebar">
                    <div className="filter-box">
                        <h3>Category</h3>
                        <div className="progress-bar"></div>

                        <div className="category-list">
                            <div className="category-item">
                                <span>💄</span>
                                <Link to='/beauty'><span>Beauty</span></Link>
                            </div>

                            <div className="category-item">
                                <span>👖</span>
                                <span>Jeans</span>
                            </div>
                            <div className="category-item">
                                <span>🥼</span>
                                <span>Jacket</span>
                            </div>
                            <div className="category-item">
                                <span>💎</span>
                                <span>Jewelery</span>
                            </div>
                            <div className="category-item">
                                <span>🕶️</span>
                                <span>Sunglasses</span>
                            </div>

                            <div className="category-item">
                                <span>👜</span>
                                <span>Handbags</span>
                            </div>

                            <div className="category-item">
                                <span>👠</span>
                                <Link to='/womenshoes'><span>Heels</span></Link>
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
