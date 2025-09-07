import React from "react";
import Nav from "./Nav.js"

export default function Header() {
    return (
        <header className="siteHeader">
            <div className="header-grid">
                <div className="logo">
                    <a href="#">
                        <img src="/Logo.svg" alt="Little Lemon Logo" />
                    </a>
                </div>
            
            <Nav navClass="header-nav"/>
            </div>
        </header>
    );
}