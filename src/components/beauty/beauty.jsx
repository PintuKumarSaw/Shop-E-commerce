import React, { useEffect, useState } from "react";
import "./beauty.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart } from "../cartContext/cartContext";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../wishlistContext/wishlistContext";
import { useAuth } from "../login/authContext";

const slides = [
    { img: "/images/bb1.webp" },
    { img: "/images/bb2.webp" },
    { img: "/images/bb4.webp" },
    { img: "/images/bb5.webp" },
    { img: "/images/bb6.webp" },
    { img: "/images/bb3.webp" },
];

const allProducts = [
    {
        id: 1,
        name: "Crystal-Infused Skincare – serums, creams",
        price: 98,
        oldPrice: 139,
        rating: 5,
        bought: "3.5k",
        image: "/images/b1.webp",
        date: "10 Oct",
    },
    {
        id: 2,
        name: "Eco-Beauty – zero-waste, sustainable products",
        price: 679,
        oldPrice: 279,
        rating: 5,
        image: "/images/b2.webp ",
        bought: "4.8k",
        date: "19 Nov",
    },
    {
        id: 3,
        name: "Vegan Makeup – cruelty-free and plant-based cosmetics",
        price: 490,
        oldPrice: 690,
        rating: 5,
        image: "/images/b3.webp",
        bought: "12k",
        date: "29 Oct",
    },
    {
        id: 4,
        name: "DermaGlow – radiant skin focus premium skincare line",
        price: 287,
        oldPrice: 490,
        rating: 4,
        image: "/images/b4.webp",
        bought: "2k",
        date: "14 Oct",
    },
    {
        id: 5,
        name: "Aurene – elegant and soft like Avène",
        price: 298,
        oldPrice: 399,
        rating: 4,
        image: "/images/b5.webp",
        bought: "2k",
        date: "10 Oct",
    },
    {
        id: 6,
        name: "TanVansi Glow – radiant skin focus",
        price: 289,
        oldPrice: 329,
        rating: 4,
        image: "/images/b6.webp",
        bought: "2.6k",
        date: "28 Oct",
    },
    {
        id: 7,
        name: "Cetaphil – soft, gentle, clinical, yet appealing",
        price: 689,
        oldPrice: 990,
        rating: 4.5,
        image: "/images/b7.webp",
        bought: "1.8k",
        date: "17 Dec",
    },
    {
        id: 8,
        name: "Surf Excel Easy Wash Powder",
        price: 990,
        oldPrice: 900,
        rating: 4,
        image: "/images/b8.webp",
        bought: "4.5k",
        date: "29 Oct",
    },

];

export default function Groceries() {
    const [price, setPrice] = useState(500);
    const [ratingFilter, setRatingFilter] = useState(0);
    const [quantities, setQuantities] = useState({});
    const { addToCart } = useCart();
    const [index, setIndex] = useState(0);
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();
    const { isAuth } = useAuth();

    const increment = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 1) + 1,
        }));
    };

    const decrement = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) - 1),
        }));
    };


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

    const handleAddToCart = (product) => {
        if (!isAuth) {
            navigate("/login");
            return;
        }
        const quantity = quantities[product.id] || 1;
        addToCart(product, quantity);
        alert(`${product.name} (x${quantity}) added to cart!`);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Calculate slide width: 100 / 3 = 33.33%
    const slideWidth = 100 / 3;


    return (
        <div className="men-page">
            <div className="multi-slider">
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(-${(index * slideWidth) % (slides.length * slideWidth)}%)`,
                    }}
                >
                    {[...slides, ...slides].map((slide, i) => (
                        <div className="slide-card" key={i}>
                            <img src={slide.img} alt={`slide-${i}`} className="slide-image" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="men-content">


                <div className="sidebar">
                    <div className="filter-box">
                        <h3>Category</h3>
                        <div className="progress-bar"></div>

                        <div className="category-list">
                            <div className="category-itemg">
                                <span>Beauty Tools</span>
                            </div>

                            <div className="category-itemg">
                                <span>Skincare & Glow</span>
                            </div>
                            <div className="category-itemg">
                                <span>Nails & Manicure</span>
                            </div>
                            <div className="category-itemg">
                                <span>Perfumes</span>
                            </div>
                            <div className="category-itemg">
                                <span>Hair Care & Styling</span>
                            </div>

                            <div className="category-itemg">
                                <span>Makeup & Cosmetics</span>
                            </div>

                            <div className="category-itemg">
                                <span>Ayurvedic Beauty</span>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Filters */}
                    <div className="filter-box">
                        <h3>Filter by Price</h3>
                        <input
                            type="range"
                            min="100"
                            max="2000"
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
                            <div className="product-card " key={item.id}>
                                <div className="gimage-container ">
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
                                    <p className="category">Best seller</p>
                                    <div className=" d-flex justify-content-between">
                                        <div className="brand"> Sponored</div>
                                        <div className="counter-box">
                                            <div className="counter-inner">
                                                <button onClick={() => decrement(item.id)} className="counter-btn">−</button>
                                                <span className="counter-value">{quantities[item.id] || 1}</span>
                                                <button onClick={() => increment(item.id)} className="counter-btn">+</button>
                                            </div>
                                        </div>
                                    </div>

                                    <span className="fw-bold">{item.name}</span>
                                    <p className="m-0">{"⭐".repeat(item.rating)} <span>({item.bought})</span></p>
                                    <div className="bought">{item.bought}+ bought in past month</div>
                                    <span className="great">Great Indian Festival</span>
                                    <div className="price m-0">
                                        <span className="new price fs-3">₹{item.price}</span>
                                        <sub><span >M.R.P:</span></sub>
                                        <sub><span className="old m-0">₹{item.oldPrice}</span></sub>
                                        <sub><span >₹{item.price}/100 ml</span></sub>
                                        {/* <sub><span className="discount m-0">({item.discount}%off)</span></sub> */}
                                    </div>
                                    <p className="bankcard m-0">10% on select bank cards</p>
                                    <h6 className="m-0">FREE delivery , <span className="fw-bold">{item.date}</span></h6>
                                    <button
                                        className="addCart"
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        Add to Cart <span className="bi bi-cart"></span>
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
