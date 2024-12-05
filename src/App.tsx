import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import DisclaimerPopup from "./components/ui/DisclaimerPopup";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Journal from "./components/JournalSection/JournalSection";
import { ThematicAreas } from "./components/ThematicAreas/ThematicAreas";
import Articles from "./components/Articles/Articles";
import WorldMap from "./components/WorldMap";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import ContactForm from "./components/FloatingButton/ContactForm";
import Chatbot from "./components/Chatbot";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";
import FAQSection from "./components/FAQ/FAQSection";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const translation = {
    footer: {
      copyright: "© 2024 AfriJour. All rights reserved.",
      contactEmail: "info@afrijour.com",
      socialText: "Follow us on social media",
      primaryPages: "Primary Pages",
      home: "Home",
      aboutUs: "About Us",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact",
      utilityPages: "Utility Pages",
      signUp: "Sign Up",
      login: "Login",
      notFound: "404 Not Found",
      passwordReset: "Password Reset",
      resources: "Resources",
      support: "Support",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",
      videoGuide: "Video Guide",
      description:
        "For more information about our services, privacy practices, or terms of use, please visit the relevant sections below. Connect with us on social media to stay updated on the latest news and features.",
    },
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="relative min-h-screen bg-gray-300 text-white flex flex-col">
          <DisclaimerPopup />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-300 text-white flex flex-col"
          >
            <Header />
            <Hero />
            <Journal />
            <ThematicAreas />
            <Articles />
            <WorldMap />

            {/* Floating Button fixed to the right edge, manually moved down */}
            <div
              className="fixed right-0"
              style={{
                top: '10%', // Adjust this value to move the button down
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "fit-content",
              }}
            >
              <FloatingButton onClick={() => setIsFormOpen(true)} />
            </div>

            {/* Chatbot Button fixed below the Floating Button */}
            <div
              className="fixed right-0"
              style={{
                top: '75%', // Adjust this value to move the Chatbot icon down
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "fit-content",
              }}
            >
              <Chatbot
                title="Afrika Journals Assistant"
                subtitle="Online"
                botName="Afrika Journals"
                welcomeMessage="Hi, I'm Afrika Journals Assistant. How can I help you today?"
              />
            </div>

            {/* ContactForm modal when isFormOpen is true */}
            {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}

            {/* Other Sections */}
            <Toaster />
            <TestimonialsSection />
            <FAQSection />
            <Footer translation={translation} />
          </motion.div>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
