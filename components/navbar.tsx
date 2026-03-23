"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Language } from "@/lib/i18n";

interface NavbarProps {
  lang: Language;
  navItems: Record<string, string>;
}

export function Navbar({ lang, navItems }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = useCallback(() => {
    const newLang = lang === "en" ? "it" : "en";
    setIsTransitioning(true);
    // Replace the current language in the pathname with the new one
    const newPathname = pathname.replace(`/${lang}/`, `/${newLang}/`) || `/${newLang}`;
    router.push(newPathname);
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 300);
  }, [lang, pathname, router]);

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex-shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs hover:bg-blue-700 transition">
              AE
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(navItems).map(([key, value]) => (
              <Link
                key={key}
                href={`/${lang}/${key === "product" ? "products" : key === "about" ? "about" : key === "contact" ? "contact" : key}`}
                className="text-white text-sm font-semibold hover:text-blue-600 transition relative group"
              >
                {value}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right Side - Language Selector & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Language Selector - Desktop */}
            <button
              onClick={toggleLanguage}
              disabled={isTransitioning}
              className={`hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded transition-all duration-300 ${
                isTransitioning
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-gray-900 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-600 active:scale-95"
              }`}
              aria-label={lang === "en" ? "Switch to Italian" : "Switch to English"}
              title={lang === "en" ? "Cambia a italiano" : "Switch to English"}
            >
              <span className={`text-lg transition-transform duration-300 ${isTransitioning ? "scale-110" : "scale-100"}`}>
                {lang === "en" ? "🇺🇸" : "🇮🇹"}
              </span>
              <span className="text-xs tracking-widest">
                {lang === "en" ? "EN" : "IT"}
              </span>
            </button>

            {/* Language Selector - Mobile */}
            <button
              onClick={toggleLanguage}
              disabled={isTransitioning}
              className={`sm:hidden flex items-center justify-center w-10 h-10 rounded transition-all duration-300 ${
                isTransitioning
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-gray-900 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-600 active:scale-95"
              }`}
              aria-label={lang === "en" ? "Switch to Italian" : "Switch to English"}
            >
              <span className={`text-lg transition-transform duration-300 ${isTransitioning ? "scale-110" : "scale-100"}`}>
                {lang === "en" ? "🇺🇸" : "🇮🇹"}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white text-xl hover:text-blue-600 transition"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 py-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {Object.entries(navItems).map(([key, value]) => (
              <Link
                key={key}
                href={`/${lang}/${key === "product" ? "products" : key === "about" ? "about" : key === "contact" ? "contact" : key}`}
                className="block px-4 py-2 text-white text-sm hover:bg-gray-800 hover:text-blue-600 transition rounded"
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
              disabled={isTransitioning}
              className={`w-full text-left px-4 py-2 text-white text-sm rounded flex items-center gap-3 transition-all ${
                isTransitioning
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-800 hover:text-blue-600"
              }`}
              aria-label={lang === "en" ? "Switch to Italian" : "Switch to English"}
            >
              <span className={`text-lg transition-transform duration-300 ${isTransitioning ? "scale-110" : "scale-100"}`}>
                {lang === "en" ? "🇺🇸" : "🇮🇹"}
              </span>
              <span>{lang === "en" ? "English / Italiano" : "Italiano / English"}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
