import React from "react";

const Nav = ({navClass}) => {
    return (
        <nav className={navClass} aria-label="Main Navigation">
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