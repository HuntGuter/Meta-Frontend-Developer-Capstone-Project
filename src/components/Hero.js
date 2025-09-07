import React from "react";

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-grid">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat in purus in vulputate. Vivamus lacinia, nunc non interdum efficitur, arcu augue pharetra lorem, vitae tincidunt nisl nibh eu lectus.</p>
                    <div className="hero-actions">
                        <button className="btn">Reserve a table</button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-box">
                        <img src="./restauranfood.jpg" alt="Image of Chef" />
                    </div>
                </div>
            </div>
        </section>
    );
}