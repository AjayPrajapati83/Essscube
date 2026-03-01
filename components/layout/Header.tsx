"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  // Determine header style based on page and scroll position
  const getHeaderClass = () => {
    if (isHomePage) {
      return isScrolled 
        ? "bg-white shadow-lg" 
        : "bg-white/10 backdrop-blur-md border-b border-white/20";
    }
    return "bg-white shadow-md";
  };

  const getTextClass = () => {
    if (isHomePage && !isScrolled) {
      return "text-white";
    }
    return "text-textDark";
  };

  const getLogoTextClass = () => {
    if (isHomePage && !isScrolled) {
      return "text-white";
    }
    return "text-primary";
  };

  const getHoverClass = () => {
    if (isHomePage && !isScrolled) {
      return "hover:text-secondary";
    }
    return "hover:text-primary";
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClass()}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo Placeholder - Replace with actual logo */}
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-heading font-bold text-lg">ES³</span>
          </div>
          <span className={`text-2xl font-heading font-bold transition-colors ${getLogoTextClass()}`}>
            ESSSqube
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors font-accent font-medium ${getTextClass()} ${getHoverClass()}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${getTextClass()}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-textDark hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
