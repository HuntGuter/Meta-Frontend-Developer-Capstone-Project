import React from "react";
import Nav from "./Nav.js";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                {/*Logo*/}
                <div className="footer-logo">
                    <a href="/">
                        <img src="./public/Logo.svg" alt="Little Lemon Logo" />
                    </a>
                </div>

                {/*Nav*/}
                <div className="footer-nav">
                    <h5>Navigation</h5>
                    <Nav />
                </div>

                {/*Contacts*/}
                <div className="footer-contact">
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="#">Address</a></li>
                        <li><a href="#">Phone</a></li>
                        <li><a href="#">E-Mail</a></li>
                    </ul>
                </div>

                {/*Social Media*/}
                <div className="footer-social">
                    <h5>Social Media</h5>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}