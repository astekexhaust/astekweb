"use client";

import Link from "next/link";
import { Language } from "@/lib/i18n";

interface FooterProps {
  lang: Language;
  navItems: Record<string, string>;
  footerContent: {
    termsAndConditions: string;
    privacyPolicy: string;
    cookiePolicy: string;
    copyright: string;
  };
}

export function Footer({
  lang,
  navItems,
  footerContent,
}: FooterProps) {
  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Social Icons (Left, Bottom-Aligned) */}
          <div className="flex flex-col">
            <div className="mb-auto">
              {/* 200x200px Company Logo Placeholder */}
              <div className="w-[200px] h-[200px] bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-red-600 text-4xl font-bold mb-2">FI</div>
                  <div className="text-gray-400 text-xs">EXHAUST</div>
                </div>
              </div>
            </div>

            {/* Social Icons - Lower Left Area */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-red-600 transition"
              >
                f
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-red-600 transition"
              >
                📷
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-red-600 transition"
              >
                𝕏
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-red-600 transition"
              >
                ▶
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-red-600 transition"
              >
                ♪
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {lang === "en" ? "NAVIGATION" : "NAVIGAZIONE"}
            </h3>
            <ul className="space-y-2">
              {Object.entries(navItems).slice(0, 4).map(([key, value]) => (
                <li key={key}>
                  <Link
                    href={`/${lang}/${key === "product" ? "products" : key === "about" ? "about" : key === "contact" ? "contact" : key}`}
                    className="text-gray-400 text-sm hover:text-white transition"
                  >
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {lang === "en" ? "MORE" : "ALTRO"}
            </h3>
            <ul className="space-y-2">
              {Object.entries(navItems).slice(4).map(([key, value]) => (
                <li key={key}>
                  <Link
                    href={`/${lang}/${key === "product" ? "products" : key === "about" ? "about" : key === "contact" ? "contact" : key}`}
                    className="text-gray-400 text-sm hover:text-white transition"
                  >
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links - Footer Only */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {lang === "en" ? "LEGAL" : "LEGALE"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/terms`}
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  {footerContent.termsAndConditions}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/privacy`}
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  {footerContent.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/cookies`}
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  {footerContent.cookiePolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-xs text-center">
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
