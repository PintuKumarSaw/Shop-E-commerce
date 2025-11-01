import React, { useEffect, useState } from "react";
import "./groceries.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart } from "../cartContext/cartContext";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../wishlistContext/wishlistContext";
import { useAuth } from "../login/authContext";

const slides = [
    { img: "/images/gb1.avif" },
    { img: "/images/gb2.avif" },
    { img: "/images/gb4.webp" },
    { img: "/images/gb5.webp" },
    { img: "/images/gb6.webp" },
    { img: "/images/gb3.avif" },
];


const allProducts = [
    {
        id: 1,
        name: "Tata Salt, Pure and hygienic iodized salt ",
        kg: "1",
        price: 28,
        oldPrice: 30,
        rating: 5,
        bought: "3.5k",
        image: "/images/g1.webp",
        date: "10 Oct",
    },
    {
        id: 2,
        name: "Tata Sampann Unpolished Moong Dal",
        kg: "1",
        price: 65,
        oldPrice: 79,
        rating: 5,
        image: "/images/g2.webp ",
        bought: "4.8k",
        date: "19 Nov",
    },
    {
        id: 3,
        name: "Dabur Apple Cider Vinegar",
        kg: "1",
        price: 90,
        oldPrice: 90,
        rating: 5,
        image: "/images/g3.webp",
        bought: "12k",
        date: "29 Oct",
    },
    {
        id: 4,
        name: "Natureland Organics Maida",
        kg: "1",
        price: 50,
        oldPrice: 90,
        rating: 4,
        image: "/images/g4.webp",
        bought: "2k",
        date: "14 Oct",
    },
    {
        id: 5,
        name: "Fortune Sunlite Refined Sunflower Oil",
        kg: "1",
        price: 80,
        oldPrice: 99,
        rating: 4,
        image: "/images/g5.webp",
        bought: "2k",
        date: "10 Oct",
    },
    {
        id: 6,
        name: "Maggi Mega Pack",
        kg: 1,
        price: 89,
        oldPrice: 129,
        rating: 4,
        image: "/images/g6.webp",
        bought: "2.6k",
        date: "28 Oct",
    },
    {
        id: 7,
        name: "Dettol Kitchen Gel (Lemon)",
        kg: 1,
        price: 100,
        oldPrice: 990,
        rating: 4.5,
        image: "/images/g7.webp",
        bought: "1.8k",
        date: "17 Dec",
    },
    {
        id: 8,
        name: "Surf Excel Easy Wash Powder",
        kg: "1",
        price: 990,
        oldPrice: 900,
        rating: 4,
        image: "/images/g8.webp",
        bought: "4.5k",
        date: "29 Oct",
    },

];

export default function Groceries() {
    const [price, setPrice] = useState(500);
    const [ratingFilter, setRatingFilter] = useState(0);
    const [quantities, setQuantities] = useState({});
    const { addToCart } = useCart();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
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
        }, 3000); // slide every 3s
        return () => clearInterval(interval);
    }, []);

    // Calculate slide width: 100 / 3 = 33.33%
    const slideWidth = 100 / 3;


    return (
        <div className="men-page">
            {/* Header */}
            {/* <div className="men-header">
                <h2>Groceries</h2>
                <div className="breadcrumb">
                    <span> Home  </span>&nbsp; | &nbsp;<span>  </span>&nbsp;| &nbsp;<span>  </span>
                </div>
            </div> */}

            <div className="multi-slider">
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(-${(index * slideWidth) % (slides.length * slideWidth)}%)`,
                    }}
                >
                    {/* Duplicate slides for smooth infinite loop */}
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
                                <span>Fruits & Vegetables</span>
                            </div>

                            <div className="category-itemg">
                                <span>Dairy & Eggs</span>
                            </div>
                            <div className="category-itemg">
                                <span>Bakery & Breads</span>
                            </div>
                            <div className="category-itemg">
                                <span>Beverages</span>
                            </div>
                            <div className="category-itemg">
                                <span>Oils & Spices</span>
                            </div>

                            <div className="category-itemg">
                                <span>Frozen Foods</span>
                            </div>

                            <div className="category-itemg">
                                <span>Grains & Rice</span>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Filters */}
                    <div className="filter-box">
                        <h3>Filter by Price</h3>
                        <input
                            type="range"
                            min="10"
                            max="1000"
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
                                        <div className="brand">{item.kg} Kg</div>
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
                                        <sub><span >₹{item.price}/kg</span></sub>
                                        <sub><span className="discount m-0">({item.discount}%off)</span></sub>
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
