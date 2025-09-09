import React, {useEffect, useState, useRef} from "react";
import SpecialCard from "./SpecialCard";

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
  const visibleCards = 3; // Number of cards visible at a time
  
  const extendedItems = [
    ...items.slice(-visibleCards),
    ...items,
    ...items.slice(0, visibleCards),
  ]; // Duplicate Cards for infinite scroll effect

  const [currentIndex, setCurrentIndex] = useState(visibleCards);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(-visibleCards * (100 / visibleCards));
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
        slideTo(currentIndex + 1);
    }, 5000); // Change slide every 5 second
    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  
  const slideTo = (index) => {
    setTransitionEnabled(true);
    setCurrentIndex(index);
    setTranslateX(-index * 100 / visibleCards);
    // Handle infinite scroll effect
  };

  const handleTransitionEnd = () => {
    let jumpIndex = currentIndex;

    if (currentIndex <= visibleCards - 1) {
      jumpIndex = currentIndex + items.length;
    } else if (currentIndex >= items.length + visibleCards) {
      jumpIndex = currentIndex - items.length;
    }

    if (jumpIndex !== currentIndex) {
      setTransitionEnabled(false);
      setCurrentIndex(jumpIndex);
      setTranslateX(-jumpIndex * (100 / visibleCards));

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
    });
    }
  };

  /* Dragging Handlers */
  const handleMouseDown = (e) => {
    clearInterval(intervalRef.current); // Stop auto-scroll while dragging
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent text selection
    const dx = e.pageX - startX;
    setTranslateX(-currentIndex * (100 / visibleCards) + (dx / (sliderRef.current.offsetWidth / visibleCards)) * 100);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const dx = e.pageX - startX;

    if (dx < -50) {
      slideTo(currentIndex + 1);
    } else if (dx > 50) {
      slideTo(currentIndex - 1);
    } else {
      slideTo(currentIndex);
    }
  };
  

  return (
      <section className="specials">
        <div className="specials-header">
              <h2>This week specials!</h2>
              <button className="btn">Order Online</button>
        </div>
        <div 
          className="specials-grid" 
          ref={sliderRef} 
          onMouseDown={handleMouseDown} 
          onMouseMove={handleMouseMove} 
          onMouseUp={handleMouseUp} 
          onMouseLeave={handleMouseUp}
          style={{ overflow: 'hidden',
                  cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div 
            className="specials-card-grid" 
            style={{ 
              transform: `translateX(${translateX}%)`,
              transition: transitionEnabled ? 'transform 0.5s ease' : 'none',
              willChange: 'transform',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedItems.map((it, i) => (
              <div 
                key={`${it.id}-${i}`} 
                style={{ 
                  flex: `0 0 calc(100% / 3)`,
                  padding: "0 10px",
                  boxSizing: "border-box",
                }}
              >
                <SpecialCard item={it} className="special-card" />
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}