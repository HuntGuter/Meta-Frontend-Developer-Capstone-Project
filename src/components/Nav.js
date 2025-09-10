import React from "react";

const Nav = ({navClass, isMenuOpen, onLinkClick}) => {
    const navClasses = `${navClass} ${isMenuOpen ? 'open' : ''}`; // Add 'open' class if menu is open
    
    return (
        <nav className={navClasses} aria-label="Main Navigation">
            <ul className="main-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservation">Reservation</a></li>
            <li><a href="#orderonline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;