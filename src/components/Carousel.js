import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";

export default function Carousel({ items, visibleCards = 4, renderItem, autoScroll = true, interval = 5000, className = ''}) {
  const extendedItems = useMemo(() => { // Memoize extended items for infinite effect
    return [
      ...items.slice(-visibleCards),
      ...items,
      ...items.slice(0, visibleCards),
    ];
  }, [items, visibleCards]);
    

  const [currentIndex, setCurrentIndex] = useState(visibleCards);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(-visibleCards * (100 / visibleCards));
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(visibleCards);
    setTranslateX(-visibleCards * (100 / visibleCards));
  }, [visibleCards]);

  // Slide to index
  const slideTo = useCallback(
    (index) => {
        setTransitionEnabled(true);
        setCurrentIndex(index);
        setTranslateX(-index * (100 / visibleCards));
    },
    [visibleCards]
  );
  
  // Auto scroll
  useEffect(() => {
    if (!autoScroll) return;
    intervalRef.current = setInterval(() => {
      slideTo(currentIndex + 1);
    }, interval);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, autoScroll, interval, slideTo]);

  // Handle transition end for infinite effect
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

      requestAnimationFrame(() => { // Re-enable transition after jump
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  };

  // Drag handlers
  const handleMouseDown = (e) => {
    clearInterval(intervalRef.current);
    setIsDragging(true);
    setStartX(e.pageX);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
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
    <div
      className={className}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ overflow: "hidden", cursor: isDragging ? "grabbing" : "grab" }} // Add cursor style here
    >
      <div
        className={`${className}-card-grid`}
        style={{
          display: "flex",
          transform: `translateX(${translateX}%)`,
          transition: transitionEnabled ? "transform 0.5s ease" : "none",
          willChange: "transform",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedItems.map((item, i) => ( // Use extendedItems for infinite effect
          <div
            key={`${item.id}-${i}`}
            style={{
              flex: `0 0 calc(100% / ${visibleCards})`,
              padding: "0 10px",
              boxSizing: "border-box",
            }}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
