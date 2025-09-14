import { Link } from "react-router-dom";

const Nav = ({navClass, isMenuOpen, onLinkClick}) => {
    const navClasses = `${navClass} ${isMenuOpen ? 'open' : ''}`; // Add 'open' class if menu is open
    
    return (
        <nav className={navClasses} aria-label="Main Navigation">
            <ul className="main-nav">
            <li><a href="/" aria-label="Home Page">Home</a></li>
            <li><a href="#about" aria-label="About Section">About</a></li>
            <li><a href="#menu" aria-label="Menu Section">Menu</a></li>
            <li><Link to="/booking" aria-label="Reservation Page">Reservation</Link></li>
            <li><a href="#orderonline" aria-label="Order Online Section">Order Online</a></li>
            <li><a href="#login" aria-label="Login Section">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;