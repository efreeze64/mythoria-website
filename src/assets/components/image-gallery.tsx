"use client";

import React, { useState } from "react";
import "./image-gallery.css";

const ImageGallery = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-gallery">
      <button className="arrow left-arrow" onClick={handlePrev}>
        &lt;
      </button>
      <img src={photos[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="arrow right-arrow" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default ImageGallery;
