import React from "react";
import "./footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            {/* Top Newsletter */}
            <div className="newsletter">
                <div className="newsletter-text">
                    <h2>Stay home & get your daily needs from our shop</h2>
                    <p>Start Your Daily Shopping with ShopNest</p>
                    <div className="subscribe">
                        <input type="email" placeholder="Your email address" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="newsletter-img">
                    <img src="/images/newsletter.png" alt="newsletter" />
                </div>
            </div>

            {/* Features Row */}
            <div className="features-row">
                <div className="feature-box">
                    <img src="/images/offers.svg" alt="best price" />
                    <div>
                        <h4>Best Prices&Offers</h4>
                        <p>Orders ₹500 or more</p>
                    </div>
                </div>
                <div className="feature-box">
                    <img src="/images/delivery.svg" alt="delivery" />
                    <div>
                        <h4>Free delivery</h4>
                        <p>Orders ₹500 or more</p>
                    </div>
                </div>
                <div className="feature-box">
                    <img src="/images/doller.svg" alt="deal" />
                    <div>
                        <h4>Great daily deal</h4>
                        <p>Save up to 25%</p>
                    </div>
                </div>
                <div className="feature-box">
                    <img src="/images/wide.svg" alt="assortment" />
                    <div>
                        <h4>Wide assortment</h4>
                        <p>Choice of products</p>
                    </div>
                </div>
                <div className="feature-box">
                    <img src="/images/returns.svg" alt="returns" />
                    <div>
                        <h4>Easy returns</h4>
                        <p>Within 7 days</p>
                    </div>
                </div>
            </div>

            
                

                {/* Footer Links */}
                <div className="footer-links">
                    <div className="footer-about">
                        <img src="/images/logo.png" alt="logo" className="footer-logo" />
                    </div>
                    <div className="">
                        <p>Awesome grocery store website template</p>
                        <p><FaMapMarkerAlt /> 5171 W Campbell Ave, Kent, Utah</p>
                        <p><FaPhoneAlt /> (+91) - 540-025-124553</p>
                        <p><FaEnvelope /> sale@shopnest.com</p>
                        <p><FaClock /> 10:00 - 18:00, Mon - Sat</p>
                    </div>

                    <div>
                        <h5>Company</h5>
                        <a href="#">About Us</a>
                        <a href="#">Delivery Information</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Careers</a>
                    </div>
                    <div>
                        <h5>Corporate</h5>
                        <a href="#">Account</a>
                        <a href="#">Support Center</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Returns</a>
                        <a href="#">Careers</a>
                    </div>
                </div>
        </footer>
    );
}
