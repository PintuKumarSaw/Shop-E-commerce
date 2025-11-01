import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import Slider from "react-slick";
import { useState } from "react";
import { useCart } from "../cartContext/cartContext";
import { allProducts } from "./ProductData";
import { useAuth } from "../login/authContext";


// ====== SLIDER SETTINGS ======
const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
};

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { isAuth } = useAuth();


    // State for selected product and image
    const [product, setProduct] = React.useState(null);
    const [mainImage, setMainImage] = React.useState("");
    const [qty, setQty] = React.useState(1);
    const [selectedSize, setSelectedSize] = React.useState("M");
    const [selectedStorage, setSelectedStorage] = React.useState("128GB");
    const [selectedOption, setSelectedOption] = useState("noExchange");

    const related = product
        ? allProducts.filter(
            (p) => p.id !== product.id && p.category === product.category
        )
        : [];


    const handleAddToCart = () => {
        if (!isAuth) {
            navigate("/login");
            return;
        }
        addToCart({
            id: product.id,
            name: product.name,
            image: product.images[0],
            price: product.price,
            qty: qty,
        });
        alert(`${product.name} added to cart!`);
    };


    // Load product when id changes
    useEffect(() => {
        const selected = allProducts.find((p) => p.id === Number(id));
        setProduct(selected || null);
        if (selected) setMainImage(selected.images[0]);
    }, [id]);

    if (!product) return <h2>Product not found</h2>;

    return (
        <div className="product-details-page">
            <button className="back-btn" onClick={() => navigate(-1)}>
                ← Back
            </button>

            <div className="product-main">
                {/* LEFT SIDE IMAGE SECTION */}
                <div className="image-section">
                    <img src={mainImage} alt={product.name} className="main-image" />
                    <div className="thumbnail-row">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="thumb"
                                onClick={() => setMainImage(img)}
                                className={mainImage === img ? "thumb active" : "thumb"}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE DETAILS */}
                <div className="details-section">
                    <h2>{product.name}</h2>
                    <p className="rating">
                        {"⭐".repeat(product.rating)} <span>{product.reviews} reviews</span>
                    </p><br />
                    <div className="price-row">
                        <h3 className="new">₹{product.price}</h3>
                        <p className="discount">
                            {Math.floor(
                                ((product.oldPrice - product.price) / product.oldPrice) * 100
                            )}
                            % Off
                        </p>
                        <p className="old">₹{product.oldPrice}</p>
                    </div>

                    <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>

                    {(product.category === "men" ||
                        product.category === "women" ||
                        product.category === "kids") && (
                            <div className="size-section">
                                <span>Size:</span>
                                {["S", "M", "L", "XL", "XS"].map((size) => (
                                    <button
                                        key={size}
                                        className={selectedSize === size ? "size active" : "size"}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        )}

                        {(product.category === "menshoes" ||
                        product.category === "womenshoes") && (
                            <div className="size-section">
                                <span>Size:</span>
                                {["6", "7", "8", "9"].map((size) => (
                                    <button
                                        key={size}
                                        className={selectedSize === size ? "size active" : "size"}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        )}

                    {(product.category === "mobile" || product.category === "laptop" )&& (
                        <>
                            <div className="storage-section">
                                <span>Storage:</span>
                                {["8/128GB", "8/256GB", "16/256GB", "16/512GB", "16/1TB"].map((storage) => (
                                    <button
                                        key={storage}
                                        className={selectedStorage === storage ? "storage active" : "storage"}
                                        onClick={() => setSelectedStorage(storage)}
                                    >
                                        {storage}
                                    </button>
                                ))}
                            </div>

                            <div className="exchange-box">
                                <div
                                    className={`option ${selectedOption === "noExchange" ? "selected" : ""}`}
                                    onClick={() => setSelectedOption("noExchange")}
                                >
                                    <input
                                        type="radio"
                                        checked={selectedOption === "noExchange"}
                                        onChange={() => setSelectedOption("noExchange")}
                                    />
                                    <label>Buy without Exchange</label>
                                    <span className="price">₹{product.price}</span>
                                </div>

                                <div
                                    className={`option ${selectedOption === "exchange" ? "selected" : ""}`}
                                    onClick={() => setSelectedOption("exchange")}
                                >
                                    <input
                                        type="radio"
                                        checked={selectedOption === "exchange"}
                                        onChange={() => setSelectedOption("exchange")}
                                    />
                                    <label>Buy with Exchange</label>
                                    <span className="offer">up to ₹{Math.floor((product.price * 90) / 100)}</span>
                                </div>
                            </div>
                        </>
                    )}

                    <p className="fw-bold mt-2">Delivery by {product.date}, 2025</p>
                    <div className="offers-section">
                        <h4>Available offers</h4>
                        <ul>
                            <li>
                                <span className="offer-icon">🏷️</span>
                                <strong>Bank Offer</strong> 5% cashback on Axis Bank Flipkart Debit Card up to ₹750{" "}
                                <a href="#">T&amp;C</a>
                            </li>
                            <li>
                                <span className="offer-icon">🏷️</span>
                                <strong>Bank Offer</strong> 5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter{" "}
                                <a href="#">T&amp;C</a>
                            </li>
                            <li>
                                <span className="offer-icon">🏷️</span>
                                <strong>Bank Offer</strong> Flat ₹50 off on Flipkart Bajaj Finserv Insta EMI Card. Min Booking Amount: ₹2,500{" "}
                                <a href="#">T&amp;C</a>
                            </li>
                            <li>
                                <span className="offer-icon">🏷️</span>
                                <strong>Special Price</strong> Get extra 18% off <a href="#">T&amp;C</a>
                            </li>
                        </ul>
                    </div>


                    <div className="cart-actions">
                        <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
                        <span>{qty}</span>
                        <button onClick={() => setQty((q) => q + 1)}>+</button>
                        <button
                            className="add-to-cart"
                            onClick={() => handleAddToCart({
                                id: product.id,
                                name: product.name,
                                image: product.images[0],
                                price: product.price,
                                qty
                            })}
                        >
                            🛒 Add To Cart
                        </button>

                    </div>
                </div>
            </div>

            {/* RELATED PRODUCTS */}
            <div className="related-section">
                <h3>Similar Products</h3>
                <Slider {...sliderSettings}>
                    {related.map((item) => (
                        <div
                            key={item.id}
                            className="related-card"
                            onClick={() => navigate(`/product/${item.id}`)}
                        >
                            <div className="card-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="card-info">
                                <p className="brand">{item.brand}</p>
                                <p className="name">
                                    {item.name.length > 35
                                        ? item.name.slice(0, 35) + "..."
                                        : item.name}
                                </p>
                                <div className="price-row">
                                    <span className="new">₹{item.price}</span>
                                    <span className="old">₹{item.oldPrice}</span>
                                    <span className="discount">
                                        {Math.floor(
                                            ((item.oldPrice - item.price) / item.oldPrice) * 100
                                        )}
                                        % off
                                    </span>
                                </div>
                                <span className="assured">🛡️ Assured</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
