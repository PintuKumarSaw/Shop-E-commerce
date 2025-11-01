import React, { useState, useEffect } from "react";
import "./products.css";
import { useCart } from "../cartContext/cartContext";
import { useWishlist } from "../wishlistContext/wishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAuth } from "../login/authContext";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");

    const { isAuth } = useAuth();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => setCategories(["all", ...data]));
    }, []);

    const filteredProducts =
        activeCategory === "all"
            ? products
            : products.filter((p) => p.category === activeCategory);

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

    const handleBuyNow = (product) => {
        if (!isAuth) {
            navigate("/login");  
            return;
        }
        addToCart({ ...product, qty: 1 });
        alert(`${product.title} added to cart!`);
    };

    const trendingProducts = [...products]
        .sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0))
        .slice(0, 3)
        .map((p) => p.id);

    return (
        <div className="product-page">
            <h2 className="section-title">Popular Products</h2>

            {/* Category Tabs */}
            <div className="category-tabs">
                {categories.map((cat, i) => (
                    <button
                        key={i}
                        className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <div className="product-card" key={product.id}>
                        {/* Trending Sticker */}
                        {trendingProducts.includes(product.id) && (
                            <div className="trending">TRENDING</div>
                        )}

                        {/* Wishlist */}
                        <div
                            className={`wishlist ${wishlist.some((w) => w.id === product.id) ? "active" : ""
                                }`}
                            onClick={() => toggleWishlist(product)}
                        >
                            {wishlist.some((w) => w.id === product.id) ? (
                                <FaHeart />
                            ) : (
                                <FaRegHeart />
                            )}
                        </div>

                        <div className="img-box">
                            <img src={product.image} alt={product.title} />
                        </div>

                        {/* Product Info */}
                        <div className="product-info">
                            <p className="category">{product.category}</p>
                            <h4 className="title">{product.title.slice(0, 35)}...</h4>

                            <div className="rating">
                                {"⭐".repeat(Math.round(product.rating?.rate || 0))}
                                <span className="rating-count">
                                    ({product.rating?.count || 0})
                                </span>
                            </div>
                            <br />

                            <div className="price">
                                <span className="current">
                                    Rs {(product.price * 80).toFixed(0)}
                                </span>
                                <span className="old">
                                    Rs {(product.price * 100).toFixed(0)}
                                </span>
                            </div>

                            <button
                                className="buy-btn"
                                onClick={() => handleBuyNow(product)}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
