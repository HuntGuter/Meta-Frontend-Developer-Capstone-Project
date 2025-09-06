import React from "react";

export default function Nav() {
    return (
        <nav className={'main-nav ${className}'} aria-label="Main Navigation">
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservation">Reservation</a></li>
            <li><a href="#orderonline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    )
}