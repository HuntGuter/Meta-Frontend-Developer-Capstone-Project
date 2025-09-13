import {useState} from "react";
import Nav from "./Nav.js"
import '../styles/header.css'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the mobile menu is open or closed
    
    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    return (
        <header className="siteHeader">
            <div className="header-grid">
                <div className="logo">
                    <a href="/">
                        <img src="/Logo.svg" alt="Little Lemon Logo" />
                    </a>
                </div>
                <div className="menu-container">
                    <button className="burger-menu" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-controls="main-nav">
                        <span className="burger-icon"></span>
                    </button>
                    <Nav navClass="header-nav" isMenuOpen={isMenuOpen} onLinkClick={toggleMenu}/>
                </div>
            </div>
        </header>
    );
}