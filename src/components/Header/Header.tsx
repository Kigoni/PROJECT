// components/Header/Header.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { LanguageSelector } from "./LanguageSelector";
import { NavLink } from "./NavLink";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = window.location.pathname;

  return (
    <header className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          {/* Logo - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#AFEEEE] text-2xl font-bold w-1/4"
          >
            Afrika Journals
          </motion.div>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
            <NavLink href="/" isActive={pathname === "/"}>
              {t("Home")}
            </NavLink>
            <NavLink href="/features">{t("features")}</NavLink>
            <NavLink href="/testimonials">{t("testimonials")}</NavLink>
            <NavLink href="/faq" isActive={pathname === "/faq"}>{t("FAQ")}</NavLink>
          </nav>

          {/* Actions - Right */}
          <div className="flex items-center justify-end gap-6 w-1/4">
            <LanguageSelector />

            <a
              href="/dashboard"
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
            <NavLink href="/" isActive={pathname === "/"}>
              {t("home")}
            </NavLink>
            <NavLink href="/features">{t("features")}</NavLink>
            <NavLink href="/testimonials">{t("testimonials")}</NavLink>
            <NavLink href="/faq">{t("faq")}</NavLink>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
