import '../styles/footer.css'
import Nav from "./Nav.js";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                {/*Logo*/}
                <div className="footer-logo">
                    <a href="/">
                        <img src="/Logo.svg" alt="Little Lemon Logo" />
                    </a>
                </div>

                {/*Nav*/}
                <div className="footer-nav">
                    <h5>Navigation</h5>
                    <Nav navClass="footer-nav" />
                </div>

                {/*Contacts*/}
                <div className="footer-contact">
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="/">Address</a></li>
                        <li><a href="/">Phone</a></li>
                        <li><a href="/">E-Mail</a></li>
                    </ul>
                </div>

                {/*Social Media*/}
                <div className="footer-social">
                    <h5>Social Media</h5>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">YouTube</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}