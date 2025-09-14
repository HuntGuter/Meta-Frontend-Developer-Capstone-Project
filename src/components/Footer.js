import '../styles/footer.css'
import Nav from "./Nav.js";

export default function Footer() {
    return (
        <footer className="footer" aria-label='Footer'>
            <div className="footer-grid">
                {/*Logo*/}
                <div className="footer-logo">
                    <a href="/" aria-label="Go to homepage">
                        <img src="/Logo.svg" alt="Little Lemon Logo" />
                    </a>
                </div>

                {/*Nav*/}
                <div className="footer-nav" aria-label="Footer Navigation">
                    <h5>Navigation</h5>
                    <Nav navClass="footer-nav" />
                </div>

                {/*Contacts*/}
                <div className="footer-contact" aria-label="Contact Information">
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="/" aria-label="Address link">Address</a></li>
                        <li><a href="/" aria-label="Phone link">Phone</a></li>
                        <li><a href="/" aria-label="Email link">E-Mail</a></li>
                    </ul>
                </div>

                {/*Social Media*/}
                <div className="footer-social" aria-label="Social Media Links">
                    <h5>Social Media</h5>
                    <ul>
                        <li><a href="/" aria-label="Facebook">Facebook</a></li>
                        <li><a href="/" aria-label="Instagram">Instagram</a></li>
                        <li><a href="/" aria-label="YouTube">YouTube</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}