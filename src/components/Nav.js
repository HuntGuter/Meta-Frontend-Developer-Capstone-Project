import { Link } from "react-router-dom";

const Nav = ({navClass, isMenuOpen, onLinkClick}) => {
    const navClasses = `${navClass} ${isMenuOpen ? 'open' : ''}`; // Add 'open' class if menu is open
    
    return (
        <nav className={navClasses} aria-label="Main Navigation">
            <ul className="main-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><Link to="/booking">Reservation</Link></li>
            <li><a href="#orderonline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;