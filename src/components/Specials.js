import SpecialCard from "./SpecialCard";
import Carousel from "./Carousel.js";
import { useState, useEffect } from "react";
import '../styles/specials.css'

const SAMPLE_Cards = [
  { 
    id: 1, 
    title: "Greek Salad", 
    price: "$12.95", 
    desc: "A refreshing mix of crisp lettuce, juicy tomatoes, cucumbers, red onions, Kalamata olives, and creamy feta cheese, drizzled with extra virgin olive oil.", 
    image: "/greek salad.jpg" 
  },
  { 
    id: 2, 
    title: "Bruschetta", 
    price: "$8.75", 
    desc: "Grilled rustic bread topped with a vibrant mix of fresh tomatoes, garlic, and basil, finished with a drizzle of olive oil and balsamic glaze.", 
    image: "/bruchetta.svg" 
  },
  { 
    id: 3, 
    title: "Pasta al forno", 
    price: "$10.99", 
    desc: "Oven-baked pasta layered with rich tomato sauce, creamy béchamel, and melted mozzarella, creating a comforting and hearty Italian classic.", 
    image: "/al-forno.jpg" 
  },
  { 
    id: 4, 
    title: "Marinated Olives", 
    price: "$6.50", 
    desc: "A selection of house-marinated olives infused with citrus, herbs, and spices for a savory Mediterranean snack.", 
    image: "/olives.jpg" 
  },
  { 
    id: 5, 
    title: "Lemon Tart", 
    price: "$5.50", 
    desc: "A buttery shortcrust pastry filled with silky lemon cream, topped with a dusting of sugar and a dollop of whipped cream.", 
    image: "/lemon dessert.jpg" 
  },

];

export default function Specials({items = SAMPLE_Cards}) {
  const [visibleCards, setVisibleCards] = useState(3);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 860) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  
  return (
      <section className="specials" aria-label="This Week Special Section">
        <div className="specials-header">
              <h2>This week specials!</h2>
              <button className="btn" aria-label="Order online button">Order Online</button>
        </div>
        <Carousel
          items={SAMPLE_Cards}
          className="specials-carousel-grid"
          visibleCards={visibleCards}
          interval={3000}
          renderItem={(item) => 
            <SpecialCard 
              item={item} 
              className="special-card"
              aria-label={`Special dish: ${item.title}, ${item.price}`}
            />}
        />
      </section>
  );
}