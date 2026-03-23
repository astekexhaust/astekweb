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
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs">
              AE
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(navItems).map(([key, value]) => (
              <Link
                key={key}
                href={`/${lang}/${key === "product" ? "products" : key === "about" ? "about" : key === "contact" ? "contact" : key}`}
                className="text-white text-sm font-semibold hover:text-blue-600 transition"
              >
                {value}
              </Link>
            ))}
          </div>

          {/* Right Side - Language Selector & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-white hover:text-blue-600 transition rounded hover:bg-gray-900"
              aria-label={lang === "en" ? "Switch to Italian" : "Switch to English"}
            >
              {lang === "en" ? (
                <>
                  <span className="text-lg">🇺🇸</span>
                  <span className="hidden sm:inline">EN</span>
                </>
              ) : (
                <>
                  <span className="text-lg">🇮🇹</span>
                  <span className="hidden sm:inline">IT</span>
                </>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white text-xl"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 py-4 space-y-1">
            {Object.entries(navItems).map(([key, value]) => (
              <Link
                key={key}
                href={`/${lang}/${key === "product" ? "products" : key === "about" ? "about" : key === "contact" ? "contact" : key}`}
                className="block px-4 py-2 text-white text-sm hover:bg-gray-800 transition rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {value}
              </Link>
            ))}
            {/* Language Selector in Mobile Menu */}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-white text-sm hover:bg-gray-800 transition rounded flex items-center gap-2"
              aria-label={lang === "en" ? "Switch to Italian" : "Switch to English"}
            >
              {lang === "en" ? (
                <>
                  <span className="text-lg">🇺🇸</span>
                  <span>English / Italiano</span>
                </>
              ) : (
                <>
                  <span className="text-lg">🇮🇹</span>
                  <span>Italiano / English</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
