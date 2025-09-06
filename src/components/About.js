import React from "react";

export default function About() {
    return (
        <section id="about" className="about container">
            <div className="about-grid">
                <div className="about-text">
                    <h2>Little Lemon</h2>
                    <h4>Chicago</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, nunc non interdum efficitur, 
                        arcu augue pharetra lorem, vitae tincidunt nisl nibh eu lectus. Our story began with a small family kitchen — 
                        now we serve the neighborhood every day.
                    </p>
                </div>

                <div className="about-image">
                    <img src="#" alt="#" className="about-image-1" />
                    <img src="#" alt="#" className="about-image-2" />
                </div>
            </div>
        </section>
    );
}