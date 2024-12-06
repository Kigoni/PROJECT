import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { LanguageSelector } from './LanguageSelector';
import NavLink from './NavLink';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = window.location.pathname;

  return (
    <header className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur">
      <div className="container mx-auto px-4 py-6"> {/* Adjusted padding */}
        <div className="flex items-center">
          {/* Logo - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-1/4 flex flex-col items-start"
          >
            {/* Logo Image */}
            <img
              src="/logo.png" // Replace with the correct path to your logo
              alt="Afrika Journals Logo"
              className="h-14 md:h-9" // Reduced logo size to 70% of the original
              />
            {/* File Path Text */}
            <span className="text-sm text-gray-400 mt-2 block">
              Afrika Journals
            </span>
          </motion.div>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
            <NavLink
              to="/"
              isActive={pathname === "/"}
              className="text-base font-semibold text-white hover:text-[#AFEEEE] transition-colors"
            >
              {t("Home")}
            </NavLink>
            <NavLink
              to="/features"
              className="text-base font-semibold text-white hover:text-[#AFEEEE] transition-colors"
            >
              {t("Features")}
            </NavLink>
            <NavLink
              to="/testimonials"
              className="text-base font-semibold text-white hover:text-[#AFEEEE] transition-colors"
            >
              {t("Testimonials")}
            </NavLink>
            <NavLink
              to="/faq"
              isActive={pathname === "/faq"}
              className="text-base font-semibold uppercase text-white hover:text-[#AFEEEE] transition-colors"
            >
              {t("FAQ")}
            </NavLink>
          </nav>

          {/* Actions - Right */}
          <div className="flex items-center justify-end gap-6 w-1/4">
            <LanguageSelector />

            <a
              href="https://afrijour.web.app/"
              className="px-6 py-2 bg-[#AFEEEE] text-black font-semibold rounded-lg
                       hover:bg-white transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-[#AFEEEE]/50"
            >
              {t("Dashboard")}
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-[#AFEEEE] transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <NavLink
              to="/"
              isActive={pathname === "/"}
              className="text-base font-semibold uppercase text-white hover:text-[#AFEEEE] transition-colors"
            >
              {t("home")}
            </NavLink>
            <NavLink
              to="/features"
              className="text-base font-semibold uppercase text-white hover:text-[#AFEEEE] transition-colors"
            >
              {t("features")}
            </NavLink>
            <NavLink
              to="/testimonials"
              className="text-base font-semibold uppercase text-white hover:text-[#AFEEEE] transition-colors"
            >
              {t("testimonials")}
            </NavLink>
            <NavLink
              to="/faq"
              className="text-base font-semibold uppercase text-white hover:text-[#AFEEEE] transition-colors"
            >
              {t("faq")}
            </NavLink>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
