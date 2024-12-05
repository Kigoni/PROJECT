import React from 'react';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed right-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-lime-500 to-green-600
                 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                 transform hover:scale-110 active:scale-95 z-40
                 flex items-center justify-center"
      aria-label="Open feedback form"
    >
      <div 
        className="text-[#FFD700] font-bold tracking-tighter text-center"
        style={{ fontSize: '0.5rem', lineHeight: '1' }}
      >
        FEED
        <br />
        BACK
      </div>
    </button>
  );
};

export default FloatingButton;
