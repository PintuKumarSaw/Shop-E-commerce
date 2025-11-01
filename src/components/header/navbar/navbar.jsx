import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaThLarge, FaChevronDown, FaHeadset } from "react-icons/fa";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="category-navbar">
            <div className="dropdown">
                <button className="browse-btn">
                    <FaThLarge className="icon" />
                    Browse All Categories <FaChevronDown className="chevron" />
                </button>
                <ul className="dropdown-menu">
                    <Link to='/men'><li>Men’s Clothing</li></Link>
                    <Link to='/women'><li>Women’s Clothing</li></Link>
                    <Link to='/mobile'><li>Mobiles & Accessories</li></Link>
                    <Link to='/laptop'><li>Laptops</li></Link>
                    <Link to='/groceries'><li>Home & Kitchen</li></Link>
                    <Link to='/beauty'><li>Beauty & Skin Care </li></Link>
                </ul>
            </div>

            <ul className={`menu-links ${menuOpen ? "active" : ""}`}>
                <Link to="/"><li className="dropdown">Home </li></Link>

                <li className="dropdown">
                    Fashion <FaChevronDown className="chevron" />
                    <ul className="dropdown-menu">
                        <Link to="/men"><li>Men</li></Link>
                        <Link to="/women"><li>Women</li></Link>
                        <Link to="/kids"><li>Kid's</li></Link>
                    </ul>
                </li>

                <li className="dropdown">
                    Electronics <FaChevronDown className="chevron" />
                    <ul className="dropdown-menu">
                        <Link to="/mobile"><li>Mobiles</li></Link>
                        <Link to="/laptop"><li>Laptops</li></Link>
                        <Link to="/entertainment"><li>Entertainment</li></Link>
                    </ul>
                </li>

                <Link to="/deals"><li>Today's Deals</li></Link>

                <li className="dropdown">
                    Footwear <FaChevronDown className="chevron" />
                    <ul className="dropdown-menu">
                        <Link to="/menshoes"><li>Men Shoes</li></Link>
                        <Link to="/womenshoes"><li>Women Shoes</li></Link>
                    </ul>
                </li>

                <Link to="/groceries"><li>Groceries</li></Link>
                <Link to="/beauty"><li>Beauty</li></Link>

                <li className="dropdown">
                    Shop <FaChevronDown className="chevron" />
                    <ul className="dropdown-menu">
                        <Link to="/mobile"><li>Mobile</li></Link>
                        <Link to="/women"><li>Women's Fashion</li></Link>
                        <Link to="/menshoes"><li>Men's Shoes</li></Link>
                        <Link to="/laptop"><li>Laptop</li></Link>
                        <Link to="/kids"><li>Kid's Toy</li></Link>
                    </ul>
                </li>

                <Link to="/contact"><li>Contact</li></Link>
            </ul>

            <div className="support">
                <FaHeadset className="support-icon" />
                <div>
                    <span className="support-number">1900 - 888</span>
                    <p>24/7 Support Center</p>
                </div>
            </div>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span className="bi bi-toggle-on"></span>
            </button>
        </nav>
    );
};

