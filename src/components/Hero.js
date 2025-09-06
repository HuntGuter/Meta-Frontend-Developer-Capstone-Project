import React from "react";

export default function Hero() {
    return (
        <section id="home" className="hero container">
            <div className="hero-grid">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat in purus in vulputate.</p>
                </div>
                <div className="hero-actions">
                    <button className="btn">Reserve a table</button>
                </div>
                <div className="hero-image">
                    <div className="image-box">
                        <img src="./public/restauranfood.jpg" alt="Image of Chef" />
                    </div>
                </div>
            </div>
        </section>
    );
}