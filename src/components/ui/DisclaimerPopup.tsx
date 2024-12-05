import React, { useState, useEffect } from 'react';

const DisclaimerPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when component mounts
    console.log('DisclaimerPopup mounted');
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return isOpen ? (
    <div
      className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div className="bg-white rounded-lg max-w-2xl p-6 relative animate-fade-in">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>

        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-2xl">⭐</span>
          <h2 className="text-xl font-bold text-center">Important Notice</h2>
          <span className="text-2xl">⭐</span>
        </div>

        <div className="space-y-4 text-gray-700">
        <h3 className="font-bold text-lg tracking-normal">Welcome to Afrika Journals Platform!</h3>

          <p>
            Thank you for visiting our site. While we are constantly updating our data and features, please note
            that the information and calculations provided are based on our latest indexed publications and
            may change as more data is added to the platform.
          </p>

          <p>
            Our team is dedicated to refining, verifying, and linking the extensive data in our database to
            ensure the highest quality and accuracy. We are addressing inconsistencies in naming and aliases
            across our data sources, which sometimes originate from the publications of authors and entities
            on our platform. Consequently, some information about authors and institutions may be
            incomplete at this stage.
          </p>

          <p>
            Rest assured, our platform still offers valuable insights into the individuals and entities featured.
            We are committed to adhering to industry standards to resolve these limitations in both the short
            and long term.
          </p>

          <p>
            Thank you for your understanding and support as we work to enhance your experience on Afrika
            Journals Platform.
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default DisclaimerPopup;