import React from "react";
import "./slider.css";

export function Slider() {
    return (
        <div id="banner" className="carousel slide slider-container m-2" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src="/images/slider2.jpg" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="/images/slider3.jpg" className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="/images/slider4.jpg" className="d-block w-100" alt="Slide 3" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="/images/slider5.jpg" className="d-block w-100" alt="Slide 4" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="/images/slider6.jpg" className="d-block w-100" alt="Slide 5" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="/images/slider1.jpg" className="d-block w-100" alt="Slide 6" />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
                <span className="carousel-control-prev-icon custom-arrow" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            
            <button className="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
                <span className="carousel-control-next-icon custom-arrow" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#banner" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#banner" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#banner" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#banner" data-bs-slide-to="3"></button>
                <button type="button" data-bs-target="#banner" data-bs-slide-to="4"></button>
                <button type="button" data-bs-target="#banner" data-bs-slide-to="5"></button>
            </div>
        </div>
    );
};
