import React, { useState, useEffect } from 'react';

const images = [
  'https://via.placeholder.com/800x300?text=Banner+1',
  'https://via.placeholder.com/800x300?text=Banner+2',
  'https://via.placeholder.com/800x300?text=Banner+3',
];

const BannerCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <img src={images[currentImageIndex]} alt={`Banner ${currentImageIndex + 1}`} style={{ width: '800px', height: '300px' }} />
    </div>
  );
};

export default BannerCarousel;