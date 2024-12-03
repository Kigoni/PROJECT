import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Journal from './components/JournalSection/JournalSection';
import { ThematicAreas } from './components/ThematicAreas/ThematicAreas';
import Articles from './components/Articles/Articles';
// import WorldMap from './components/WorldMap';
// import Chatbot from "./components/Chatbot";
// import { Toaster } from "react-hot-toast";
import Footer from './components/Footer/Footer';
import TestimonialsSection  from './components/Testimonials/TestimonialsSection';
import FAQSection from './components/FAQ/FAQSection';

function App() {
  // Define the translation object directly in the App component
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
      description: "For more information about our services, privacy practices, or terms of use, please visit the relevant sections below. Connect with us on social media to stay updated on the latest news and features."
    }
  };

  return (
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
      {/* <Chatbot
        title="Afrika Journals Assistant"
        subtitle="Online"
        botName="Afrika Journals"
        welcomeMessage="Hi, I'm Afrika Journals Assistant. How can I help you today?"
      />
      <Toaster /> */}
      {/* <section id="map" className="py-20 bg-gray-900 min-h-[500px]">
        <div className="container mx-auto px-4">
          <WorldMap />
        </div>
      </section> */}
      <TestimonialsSection/>
      <FAQSection/>
      <Footer translation={translation} /> 
    </motion.div>
  );
}

export default App;