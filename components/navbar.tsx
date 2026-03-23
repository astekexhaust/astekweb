"use client";

import Link from "next/link";
import { useState } from "react";
import { Language } from "@/lib/i18n";

interface NavbarProps {
  lang: Language;
  navItems: Record<string, string>;
}

export function Navbar({ lang, navItems }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "it" : "en";
    window.location.href = `/${newLang}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex-shrink-0">
            <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center font-bold text-white text-sm">
              FI
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(navItems).map(([key, value]) => (
              <Link
                key={key}
                href={`/${lang}/${key === "product" ? "products" : key === "about" ? "about" : key === "contact" ? "contact" : key}`}
                className="text-white text-sm font-semibold hover:text-red-600 transition"
              >
                {value}
              </Link>
            ))}
          </div>

          {/* Right Side - Search & Language */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder={lang === "en" ? "Search FI exhaust.com" : "Cerca FI exhaust.com"}
              className="hidden md:block px-3 py-2 bg-gray-900 border border-gray-700 text-white text-sm rounded focus:outline-none focus:border-red-600"
            />
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm font-semibold text-white hover:text-red-600 transition"
            >
              {lang.toUpperCase()}
            </button>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 py-4">
            {Object.entries(navItems).map(([key, value]) => (
              <Link
                key={key}
                href={`/${lang}/${key === "product" ? "products" : key === "about" ? "about" : key === "contact" ? "contact" : key}`}
                className="block px-4 py-2 text-white text-sm hover:bg-gray-800 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {value}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
