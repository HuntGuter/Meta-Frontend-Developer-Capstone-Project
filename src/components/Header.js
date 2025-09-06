import React from "react";
import Nav from "./Nav.js"

export default function Header() {
    return (
        <header className="siteHeader">
            <div className="container header-inner">
                <div className="logo">
                    <a href="/">
                        <img src="./public/Logo .svg" alt="Little Lemon Logo" />
                    </a>
                </div>
            
            <Nav />
            </div>
        </header>
    );
}