import React from "react";

export default function TestimonialCard({item}) {
    return (
        <article className="card">
            <img 
                src={item.avatar}
                alt={`Avatar of ${item.name}`}
                className="testimonial-avatar"
            />
            <h4 className="testimonial-name">{item.name}</h4>
            <div className="testimonial-rating">
                {Array.from({ length: item.rating }, (_, i) => (
                    <span key={i} className="star">⭐</span>
                ))}
            </div>
            <p className="testimonial-text">"{item.text}"</p>
        </article>
    );
}