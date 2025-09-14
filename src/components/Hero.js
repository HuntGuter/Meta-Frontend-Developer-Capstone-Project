import '../styles/hero.css'
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section id="home" className="hero" aria-label="Hero Section">
            <div className="hero-grid">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes serced with a modern twist.</p>
                    <div className="hero-actions">
                        <button className="btn" aria-label='Reserve a table on click'>
                            <Link to="/booking">
                                Reserve a table
                            </Link>
                        </button>
                    </div>
                </div>  
            </div>
            <div className="hero-image">
                    <img src="/restauranfood.jpg" alt="Chef preparing food in the restaurant" />
            </div>
        </section>
    );
}