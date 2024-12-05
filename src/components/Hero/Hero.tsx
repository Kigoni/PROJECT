import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const images = [
  "/Hero.webp",
  "/Hero2.jpeg",
  "/Hero3.jpeg",
  "/Hero4.webp"
];

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Enhanced parallax effects
  const yForeground = useTransform(scrollY, [0, 500], [0, 200]);
  const yBackground = useTransform(scrollY, [0, 500], [0, -300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Preload images for seamless transitions
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Image cycling with interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 30000); // Change image every 30 seconds

    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById("content");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Parallax Background with Smooth Transition */}
        <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0">
          <AnimatePresence mode="sync">
            {images.map((image, index) => (
              currentImageIndex === index && (
                <motion.img
                  key={index}
                  src={image}
                  alt="African landscape"
                  className="absolute inset-0 w-full h-full object-cover scale-110"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2.5, // Smooth blending duration
                    ease: [0.43, 0.13, 0.23, 0.96], // Custom bezier for ultra-smooth transitions
                  }}
                />
              )
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Foreground Parallax */}
        <motion.div
          style={{ y: yForeground, opacity }}
          className="container mx-auto px-4 relative z-30 max-w-6xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-[#AFEEEE] mb-8"
          >
            Spotlighting African Journals
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-invert mx-auto max-w-3xl"
          >
            <p className="text-xl text-gray-300 mb-8 bg-black/50 px-2 py-1 rounded shadow-lg">
              Welcome to Afrika Journals, where the spirit of African
              scholarship rises. A repository of brilliance, where knowledge
              diversifies. Here, we cradle the voices of a continent vast,
              curating wisdom, preserving legacies that will forever last.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8 mt-16 text-left"
          >
            <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-[#AFEEEE] mb-4">
                Discover the Vibrant Tapestry of African Knowledge
              </h2>
              <p className="text-white bg-black/50 px-2 py-1 rounded shadow-lg">
                Afrika Journals lights the path through intellect's room. With
                journals vast and insightful articles, we serve as a
                comprehensive repository for scholarly publications, fostering
                accessibility and advancing knowledge dissemination.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-[#AFEEEE] mb-4">
                Empowering African Scholars
              </h2>
              <p className="text-white bg-black/50 px-2 py-1 rounded shadow-lg">
                To the scholars and dreamers, Afrika Journals stands as your
                platform. Share your insights, let your research unfold. Submit
                your journals—treasures of wisdom untold. Engage in review, a
                scholarly exchange, where minds refine, and boundaries rearrange.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12"
          >
            <a
              href="https://afrijour.web.app/sign-in"
              className="bg-[#AFEEEE] text-black px-8 py-3 rounded-full text-lg font-semibold
                     hover:bg-white transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-[#AFEEEE]/50"
            >
              Join Our Academic Community
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        >
          <button
            onClick={scrollToContent}
            className="text-[#AFEEEE] hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </button>
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-20 pointer-events-none" />
      </section>
      <div id="content" />
    </>
  );
};

export default Hero;
