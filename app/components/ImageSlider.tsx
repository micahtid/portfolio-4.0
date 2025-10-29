'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ImageSliderProps {
  images: string[];
  title: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full min-h-[500px]">
      {/* Main Image Display */}
      <div className="relative w-full rounded-lg overflow-hidden border border-white/[8%] bg-black/20">
        <Image
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          width={1920}
          height={1440}
          className="w-full h-auto object-contain"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              <button
                onClick={goToPrevious}
                className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-black/70 hover:bg-black/90 border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 max-[640px]:w-10 max-[640px]:h-10"
                aria-label="Previous image"
              >
                <FaChevronLeft className="text-white text-lg max-[640px]:text-base" />
              </button>
              <button
                onClick={goToNext}
                className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-black/70 hover:bg-black/90 border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 max-[640px]:w-10 max-[640px]:h-10"
                aria-label="Next image"
              >
                <FaChevronRight className="text-white text-lg max-[640px]:text-base" />
              </button>
            </div>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 max-[640px]:bottom-2">
            <span className="label text-white">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 aspect-video w-32 rounded-lg overflow-hidden border-2 transition-all duration-200 bg-black/20 ${
                index === currentIndex
                  ? 'border-white/40 scale-105'
                  : 'border-white/[8%] hover:border-white/20'
              }`}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
