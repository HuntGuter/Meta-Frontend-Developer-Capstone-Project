import React from "react";
import Hero from "./Hero.js";
import Specials from "./Specials.js";
import Testimonials from "./Testimonials.js";
import About from "./About.js";

export default function Main() {
    return (
        <main className="main-grid">
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </main>
    );
}