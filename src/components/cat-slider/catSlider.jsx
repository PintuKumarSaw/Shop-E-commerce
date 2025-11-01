import React, { useRef, useEffect, useState } from "react";
import "./catSlider.css";
import { useNavigate } from "react-router-dom";

const bannerImages = [
  {
    id: 1,
    src: "/images/hb1.webp",
    link: "/men"
  },
  {
    id: 2,
    src: "/images/hb2.webp",
    link: "/menshoes"
  },
  {
    id: 3,
    src: "/images/hb3.webp",
    link: "/women"
  },
  {
    id: 4,
    src: "/images/hb6.webp",
    link: "/groceries"
  },
  {
    id: 5,
    src: "/images/hb4.webp",
    link: "/menshoes"
  },
  {
    id: 6,
    src: "/images/hb5.webp",
    link: "/beauty"
  },
];

export function CatSlider() {
  const carouselRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  // Scroll function (full width slide)
  const scroll = (direction) => {
    const containerWidth = carouselRef.current.offsetWidth;
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -containerWidth, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: containerWidth, behavior: "smooth" });
    }
  };

  // Fetch categories with product images
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const categoryNames = await res.json();

        const categoryData = await Promise.all(
          categoryNames.map(async (cat) => {
            const prodRes = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
            const products = await prodRes.json();
            return {
              name: cat.charAt(0).toUpperCase() + cat.slice(1),
              img: products[0]?.image || "https://via.placeholder.com/150"
            };
          })
        );

        // Duplicate categories to allow smooth infinite-like scrolling
        setCategories([...categoryData, ...categoryData, ...categoryData]);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    }

    fetchCategories();
  }, []);

  return (

    <div className="">
      <div className="banner-container">
        <img src="/images/banner.webp" alt="Offer Banner" className="banner-image" />
      </div>
      <div className="categories-section">

        <img className="banner-image cat" src="/images/categoryText.png" alt="" />

        <div className="banner-section">
          <div className="banner-grid">
            {bannerImages.map((item) => (
              <div key={item.id} className="banner-card">
                <img
                  src={item.src}
                  alt={`banner-${item.id}`}
                  className="banner-img"
                  onClick={() => navigate(item.link)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-wrapper">
          {/* Prev Button */}
          <button className="carousel-btn prev" onClick={() => scroll("left")}>
            &#10094;
          </button>

          {/* Categories Scroll */}
          <div className="categories-carousel" ref={carouselRef}>
            {categories.map((cat, index) => (
              <div className="category-card" key={index}>
                <div className="circle">
                  <img src={cat.img} alt={cat.name} />
                </div>
                <p>{cat.name}</p>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button className="carousel-btn next" onClick={() => scroll("right")}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}
