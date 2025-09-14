import React from "react";

export default function TestimonialCard({item}) {
    return (
        <article className="testimonial-card" aria-label={`Testimonial by ${item.name}, rating ${item.rating} stars`}> 
            <img 
                src={item.avatar}
                alt={`Avatar of ${item.name}`}
                className="testimonial-avatar"
            />
            <h4 className="testimonial-name">{item.name}</h4>
            <div className="testimonial-rating" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }, (_, i) => (
                    <span key={i} className="star" aria-hidden="true">⭐</span>
                ))}
            </div>
            <p className="testimonial-text">"{item.text}"</p>
        </article>
    );
}