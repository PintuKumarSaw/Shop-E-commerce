import React, { useState } from "react";
import './deals.css'
import { FaHeart, FaRegHeart } from "react-icons/fa"; // ❤️ Wishlist icons
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../wishlistContext/wishlistContext";
import { useAuth } from "../login/authContext";
import { Link } from "react-router-dom";

const allProducts = [
    {
        id: 405,
        name: "Mens Profoam Fuegi Res Running Shoe ",
        price: 2290,
        oldPrice: 4999,
        rating: 4,
        image: "/images/ms5.webp",
        bought: "2k",
        date: "10 Oct",
        offers: 20,
    },
    {
        id: 406,
        name: " Mens Skate Smart Sneakers",
        price: 1990,
        oldPrice: 3990,
        rating: 4,
        image: "/images/ms6.webp",
        bought: "2.6k",
        date: "28 Oct",
        offers: 40,
    },
    {
        id: 252,
        name: "Dell Inspiron 15 3530: Typically comes with Intel Core i3 / i5, 8 GB RAM, and 512 GB SSD.",
        brand: "Dell",
        price: 54900,
        oldPrice: 69900,
        rating: 5,
        image: "/images/l2.webp ",
        bought: "4.8k",
        date: "19 Nov",
        offers: 40,
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
        offers: 60,
    },
    {
        id: 201,
        name: "iPhone 15 (128 GB) - Black",
        brand: "Apple",
        price: 49990,
        oldPrice: 69900,
        rating: 5,
        bought: "2k",
        image: "/images/m1.jpg",
        offers: 50,
        date: "10 Oct",
    },
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
        offers: '70',
    },
    {
        id: 106,
        name: " light, airy dresses for hot weather ",
        brand: "GESPO",
        price: 499,
        oldPrice: 899,
        rating: 4,
        image: "/images/k6.webp",
        offers: 80,
    },
    {
        id: 107,
        name: " fancy dress for parties or weddings",
        brand: "GESPO",
        price: 690,
        oldPrice: 999,
        rating: 4.5,
        image: "/images/k7.webp",
        offers: 70,
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
        offers: 40,
        date: "10 Oct",
    },
    {
        id: 53,
        name: "Siril Poly Silk White & Beige Color Saree With Blouse Piece | sarees for Women",
        brand: "V-Mart",
        price: 799,
        oldPrice: 1990,
        rating: 3,
        image: "/images/w3.webp ",
        offers: 60,
    },
    {
        id: 54,
        name: "VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for Women",
        brand: "Bushirt",
        price: 699,
        oldPrice: 1290,
        rating: 5,
        offers: 40,
        image: "/images/w4.webp",

    },
    {
        id: 407,
        name: "Cause Shoes For Men | Comfortable",
        price: 2190,
        oldPrice: 3990,
        rating: 4.5,
        image: "/images/ms7.webp",
        bought: "1.8k",
        date: "17 Dec",
        offers: 60,
    },

];

export default function TodayDeals() {
    const [price, setPrice] = useState(60000);
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
            <div className="banner-container">
                <img src="/images/db.jpg" alt="Diwali Sale Banner" className="banner-image" />
            </div>
            <div className="banner-container">
                <img src="/images/db2.jpg" alt="Diwali Sale Banner" className="banner-image" />
            </div>
            <div className="men-content">


                <div className="sidebar">
                    <div className="filter-box">
                        <h3>Department</h3>
                        <div className="progress-bar"></div>

                        <div className="category-list">
                            <div className="category-item">
                                <Link to='/entertainment'><span>Electronics</span></Link>
                            </div>

                            <div className="category-item">
                                <Link to='/women'><span>Fashion</span></Link>
                            </div>
                            <div className="category-item">
                                <Link to='/mobile'><span>Mobile</span></Link>
                            </div>
                            <div className="category-item">
                                <Link to='/laptop'><span>Laptop</span></Link>
                            </div>
                            <div className="category-item">
                                <Link to='/beauty'><span>Beauty</span></Link>
                            </div>

                            <div className="category-item">
                                <Link to='/men'><span>Clothing</span></Link>
                            </div>

                            <div className="category-item">
                                <Link to='/groceries'><span>Groceries</span></Link>
                            </div>

                            <div className="category-item">
                                <Link to='/kids'><span>Kid's Fashion</span></Link>
                            </div>

                            <div className="category-item">
                                <Link to='/menshoes'><span>Shoes</span></Link>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Filters */}
                    <div className="filter-box">
                        <h3>Filter by Price</h3>
                        <input
                            type="range"
                            min="99"
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
                        {filteredProducts.map((item) => (
                            <div className="product-card " key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
                                <div className="dimage-container">
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
                                </div>

                                <div className="product-info">
                                    <span className="fw-bold">{item.name}</span>
                                    <p className="m-0">{"⭐".repeat(item.rating)} <span>({item.offers})</span></p>
                                    <div className="">
                                        <span className="great">{item.offers}% off</span>
                                        <span className="text-danger ms-2">Great Indian Festival</span>
                                    </div>
                                    <div className="price m-0">
                                        <span className="new price fs-3">₹{item.price}</span>
                                        <sub><span >M.R.P:</span></sub>
                                        <sub><span className="old m-0">₹{item.oldPrice}</span></sub>
                                    </div>
                                    <p className="bankcard m-0">20% on select bank cards</p>
                                    <h6 className="m-0">FREE delivery , <span className="fw-bold">{item.date}</span></h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
