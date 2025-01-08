import React, { useState, useEffect } from "react";
import zetsolLogo from "../assets/zetsol-logo.png";
import zetsolColoredLogo from "../assets/logo.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  );

  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgb(255, 255, 255)", "rgb(31, 41, 55)"]
  );

  const boxShadowOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.1]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About us",
    "Solutions",
    "Portfolio",
    "Testimonials",
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{
        backgroundColor: headerBackground,
        boxShadow: boxShadowOpacity.get() ? `0 4px 30px rgba(0, 0, 0, ${boxShadowOpacity.get()})` : "none",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img
              src={isScrolled ? zetsolColoredLogo : zetsolLogo}
              alt="Zetsol Technologies"
              className="h-14"
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Navigation */}
          <nav className={`hidden md:flex items-center space-x-10 ${isMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsMenuOpen(false)}
                className="relative group"
                style={{ color: textColor }}
                whileHover={{ y: -1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <motion.button
              className={`hidden md:flex items-center px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg hover:shadow-red-500/20"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get a quote
            </motion.button>

            {/* Mobile Menu Button */}
            <button 
              className="flex md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-5">
                <span className={`hamburger-line top-0 ${isMenuOpen ? 'open' : ''}`} style={{ backgroundColor: textColor }} />
                <span className={`hamburger-line top-1/2 -translate-y-1/2 ${isMenuOpen ? 'open' : ''}`} style={{ backgroundColor: textColor }} />
                <span className={`hamburger-line bottom-0 ${isMenuOpen ? 'open' : ''}`} style={{ backgroundColor: textColor }} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={false}
          animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        >
          <nav className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-900 hover:text-red-600 transition-colors"
                whileHover={{ x: 4 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="w-full mt-4 px-6 py-2.5 rounded-xl font-medium bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get a quote
            </motion.button>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
