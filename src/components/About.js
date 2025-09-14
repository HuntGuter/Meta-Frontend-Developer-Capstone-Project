import '../styles/about.css'

export default function About() {
    return (
        <section id="about" className="about" aria-label='About Section'>
            <div className="about-grid">
                <div className="about-text">
                    <h2>Little Lemon</h2>
                    <h4>Chicago</h4>
                    <p>
                        Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago.<br />
                        We blend traditional recipes with a modern twist, using only fresh, locally sourced ingredients.<br />
                        From light appetizers to hearty main courses, every dish is crafted with care and flavor.<br />
                    </p>
                </div>

                <div className="about-image">
                    <img src="/Mario and Adrian A.jpg" alt="Restaurant chef cooking" className="about-image-1" />
                    <img src="/restaurant chef B.jpg" alt="Mario and Adrian talking" className="about-image-2" />
                </div>
            </div>
        </section>
    );
}