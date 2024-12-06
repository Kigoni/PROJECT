import React from 'react';
import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';
import { GlobeIcon } from 'lucide-react';

interface FooterProps {
  translation: {
    footer?: {
      copyright: string;
      contactEmail: string;
      socialText: string;
      primaryPages: string;
      home: string;
      aboutUs: string;
      services: string;
      pricing: string;
      contact: string;
      utilityPages: string;
      signUp: string;
      login: string;
      notFound: string;
      passwordReset: string;
      resources: string;
      support: string;
      privacyPolicy: string;
      termsConditions: string;
      videoGuide: string;
      description: string;
    };
  };
}

const Footer: React.FC<FooterProps> = ({ translation }) => {
  const linkGroups = [
    {
      title: translation?.footer?.primaryPages || "Primary Pages",
      links: [
        { label: translation?.footer?.home || "Home", href: "/" },
        { label: translation?.footer?.aboutUs || "About Us", href: "/about" },
        { label: translation?.footer?.services || "Services", href: "/services" },
        { label: translation?.footer?.pricing || "Pricing", href: "/pricing" },
        { label: translation?.footer?.contact || "Contact", href: "/contact" }
      ]
    },
    {
      title: translation?.footer?.utilityPages || "Utility Pages",
      links: [
        { label: translation?.footer?.signUp || "Sign Up", href: "/signup" },
        { label: translation?.footer?.login || "Login", href: "/login" },
        { label: translation?.footer?.notFound || "404 Not Found", href: "/404" },
        { label: translation?.footer?.passwordReset || "Password Reset", href: "/reset-password" }
      ]
    },
    {
      title: translation?.footer?.resources || "Resources",
      links: [
        { label: translation?.footer?.support || "Support", href: "https://support.afrijour.com", external: true },
        { label: translation?.footer?.privacyPolicy || "Privacy Policy", href: "/privacy" },
        { label: translation?.footer?.termsConditions || "Terms & Conditions", href: "/terms" },
        { label: translation?.footer?.videoGuide || "Video Guide", href: "/guide" }
      ]
    }
  ];

  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <div className="h-12 w-48 bg-primary/10 rounded flex items-center justify-center">
                <span className="text-primary font-bold text-xl">AFRIKA JOURNALS</span>
              </div>
              <p className="text-black max-w-md">
                {translation?.footer?.description ||
                  "For more information about our services, privacy practices, or terms of use, please visit the relevant sections below. Connect with us on social media to stay updated on the latest news and features."}
              </p>
              <div className="text-black flex flex-col gap-4">
                <a href={`mailto:${translation?.footer?.contactEmail || 'info@afrijour.com'}`}
                   className="text-black text-primary hover:text-primary/80 transition-colors">
                  {translation?.footer?.contactEmail || "info@afrijour.com"}
                </a>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <FooterLinks group={group} />
            </div>
          ))}
        </div>

        {/* Language Selector & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <GlobeIcon size={20} />
              <select
                className="bg-transparent border-none focus:ring-0 cursor-pointer text-black hover:text-black"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="pt">Português</option>
                <option value="zu">Zulu</option>
                <option value="fr">Français</option>
                <option value="sw">Kiswahili</option>
                <option value="es">Español</option>
              </select>
            </div>
            <p className="text-black text-center">
              {translation?.footer?.copyright || "© 2024 AfriJour. All rights reserved."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
