import React from "react";
import TestimonialCard from "./TestimonialCard.js";
import Carousel from "./Carousel.js";

const SAMPLE_TESTIMONIALS = [
  {
    id: 1,
    name: "Emily R.",
    text: "The pasta was absolutely delicious! I’ll definitely come back with friends.",
    rating: 5,
    avatar: "/avatars/emily.png",
  },
  {
    id: 2,
    name: "Michael T.",
    text: "Perfect spot for a family dinner. Cozy atmosphere and amazing service.",
    rating: 4,
    avatar: "/avatars/michael.png",
  },
  {
    id: 3,
    name: "Sofia L.",
    text: "Best Mediterranean flavors I’ve had in a long time. Highly recommend the specials!",
    rating: 5,
    avatar: "/avatars/sofia.png",
  },
  {
    id: 4,
    name: "Daniel K.",
    text: "Quick service and fresh ingredients. The salads are incredible.",
    rating: 4,
    avatar: "/avatars/daniel.png",
  },
  {
    id: 5,
    name: "Olivia M.",
    text: "I loved the desserts — especially the lemon cake. Light and tasty!",
    rating: 5,
    avatar: "/avatars/olivia.png",
  },
  {
    id: 6,
    name: "James P.",
    text: "Friendly staff and a very welcoming vibe. My go-to place now.",
    rating: 5,
    avatar: "/avatars/james.png",
  },
  {
    id: 7,
    name: "Isabella D.",
    text: "Tried the grilled fish, and it was cooked to perfection. So flavorful!",
    rating: 4,
    avatar: "/avatars/isabella.png",
  },
  {
    id: 8,
    name: "Ethan S.",
    text: "A hidden gem! Affordable prices for such high-quality dishes.",
    rating: 5,
    avatar: "/avatars/ethan.png",
  },
];



export default function Testimonials ({items = SAMPLE_TESTIMONIALS}) {
    return (
        <section className="testimonials">
          <div className="testimonials-title">
            <h2>What our customers say</h2>
          </div>
          <Carousel 
            items={SAMPLE_TESTIMONIALS}
            visibleItems={4}
            autoScroll={true}
            interval={4000}
            renderItem={(item) => <TestimonialCard item={item} />}
          />
        </section>
    );
}