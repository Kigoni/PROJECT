// import React from 'react';

interface BackgroundImageProps {
  imageUrl: string;
}

export function BackgroundImage({ imageUrl }: BackgroundImageProps) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <img 
        src={imageUrl} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
      />
    </div>
  );
}