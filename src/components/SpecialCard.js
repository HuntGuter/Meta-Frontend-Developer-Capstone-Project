import React from "react";

export default function SpecialCard({item}) {
    const src = item.image || "/public/placeholder.jpg";

    return (
        <article className="card">  
            <figure className="card-figure">
                <img src={src} alt={item.title} className="card-image" />
            </figure>
        
            <h3>
                {item.title} <span className="price">{item.price}</span>
            </h3>
            <p>{item.desc}</p>
            <a className="link-btn" href="#order">Order a delivery</a>
        </article>
    );
}