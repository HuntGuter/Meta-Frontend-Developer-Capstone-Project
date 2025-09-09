import React from "react";

export default function SpecialCard({item}) {
    const src = item.image || "/public/placeholder.jpg";

    return (
        <article className="special-card">
            <img src={src} alt={item.title} className="card-image" />
            <div className="card-title-row">
                <h3>{item.title}</h3>
                <span className="card-price">{item.price}</span>
            </div>
            <p className="card-desc">{item.desc}</p>
            <a className="card-order-btn" href="#order">Order a delivery</a>
        </article>
    );
}