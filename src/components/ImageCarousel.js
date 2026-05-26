import React, { useState, useEffect } from 'react';
import ImageWithLoader from './ImageWithLoader';

// Import all carousel images (optimized WebP versions)
import image1 from '../assets/optimized-images/IMG_5125/IMG_5125.webp';
import image2 from '../assets/optimized-images/IMG_1797/IMG_1797.webp';
import image3 from '../assets/optimized-images/IMG_5645/IMG_5645.webp';
import image4 from '../assets/optimized-images/IMG_9612/IMG_9612.webp';
import image5 from '../assets/optimized-images/IMG_4986/IMG_4986.webp';
import image6 from '../assets/optimized-images/IMG_5135/IMG_5135.webp';
import artDriner from '../assets/images/carousel/art-driner.JPEG';

// Static images array (moved outside component to prevent re-creation)
const images = [
  { src: image1, alt: 'Driner - Professional Photo 1' },
  { src: image2, alt: 'Driner - Professional Photo 2' },
  { src: image3, alt: 'Driner - Professional Photo 3' },
  { src: image4, alt: 'Driner - Professional Photo 4' },
  { src: image5, alt: 'Driner - Professional Photo 5' },
  { src: image6, alt: 'Driner - Professional Photo 6' },
  { src: artDriner, alt: 'Driner - Original artwork' },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Preload the first image for instant display
  useEffect(() => {
    const img = new window.Image();
    img.src = images[0].src;
  }, []);

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className='relative w-96 h-[480px] mx-auto overflow-hidden rounded-2xl shadow-xl'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image Container */}
      <div className='relative w-full h-full'>
        {images.map((image, index) => {
          let position = 'translate-x-full opacity-0';
          if (index === currentIndex) {
            position = 'translate-x-0 opacity-100';
          } else if (
            index ===
            (currentIndex - 1 + images.length) % images.length
          ) {
            position = '-translate-x-full opacity-0';
          } else if (index === (currentIndex + 1) % images.length) {
            position = 'translate-x-full opacity-0';
          }
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${position}`}
            >
              <ImageWithLoader
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className='w-full h-full'
                imgClassName='border-4 border-blue-500/20'
                onError={e => {
                  console.error(
                    `Image ${index + 1} failed to load:`,
                    e.target.src
                  );
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100 z-10'
        aria-label='Previous image'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100 z-10'
        aria-label='Next image'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-2xl' />
    </div>
  );
};

export default ImageCarousel;
