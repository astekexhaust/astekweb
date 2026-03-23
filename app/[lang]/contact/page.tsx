"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Button } from "@/components/button";
import { getTranslation, Language } from "@/lib/i18n";
import { useState } from "react";

export default function ContactPage({ params }: { params: { lang: Language } }) {
  const lang = params.lang;
  const t = getTranslation(lang);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    carModel: "",
    inquiry: "",
    verificationCode: "",
    subscribe: true,
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim())
      return false;
    if (!formData.email.trim()) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return false;
    if (!formData.country.trim()) return false;
    if (!formData.carModel.trim()) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      console.log("[v0] Honeypot field filled - spam detected");
      setStatus("error");
      return;
    }

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // Server action placeholder for future Resend integration
      // TODO: Replace with actual Resend email sending
      console.log("[v0] Form submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        carModel: "",
        inquiry: "",
        verificationCode: "",
        subscribe: true,
        honeypot: "",
      });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.log("[v0] Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <>
      <Navbar lang={lang} navItems={t.nav} />
      <main className="bg-black">
        {/* Hero Section */}
        <Hero
          title={t.contact.hero.title}
          subtitle={t.contact.hero.subtitle}
        />

        {/* Dealer Search Section */}
        <section className="py-12 px-4 bg-black border-b border-gray-800">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              {t.contact.searchLabel}
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
              <select className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:border-blue-600">
                <option>{t.contact.locationPlaceholder}</option>
              </select>
              <Button variant="primary">{t.contact.searchButton}</Button>
            </div>

            <div className="mt-8 border-b border-gray-700 pb-8">
              <h3 className="text-xl font-bold text-white">
                {t.contact.locationCity}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {lang === "en"
                  ? "No locations found. Please search above."
                  : "Nessuna posizione trovata. Si prega di cercare sopra."}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 px-4 bg-black border-b border-gray-800">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              {t.contact.contactForm.title}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  {t.contact.contactForm.name}
                  <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.contact.contactForm.namePlaceholder}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:border-red-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  {t.contact.contactForm.email}
                  <span className="text-blue-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.contact.contactForm.emailPlaceholder}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  {t.contact.contactForm.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t.contact.contactForm.phonePlaceholder}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  {t.contact.contactForm.country}
                  <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder={t.contact.contactForm.countryPlaceholder}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Car Model */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  {t.contact.contactForm.carModel}
                  <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  placeholder={t.contact.contactForm.carModelPlaceholder}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Inquiry */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  {t.contact.contactForm.inquiry}
                </label>
                <textarea
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  placeholder={t.contact.contactForm.inquiryPlaceholder}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:border-blue-600"
                ></textarea>
              </div>

              {/* Verification Code */}
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-white text-sm font-semibold mb-2">
                    {t.contact.contactForm.verificationCode}
                    <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact.contactForm.verificationCodePlaceholder}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div className="px-4 py-3 bg-gray-700 text-white rounded font-semibold">
                  2345
                </div>
              </div>

              <button
                type="button"
                className="text-blue-600 text-sm hover:text-blue-700 transition"
              >
                {t.contact.contactForm.recapVerification}
              </button>

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                className="hidden"
                aria-hidden="true"
                tabIndex={-1}
              />

              {/* Subscribe Checkbox */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleInputChange}
                  id="subscribe"
                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                />
                <label
                  htmlFor="subscribe"
                  className="text-white text-sm cursor-pointer"
                >
                  {t.contact.contactForm.subscribe}
                </label>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="p-4 bg-green-900 border border-green-700 text-green-100 rounded text-sm">
                  {t.contact.contactForm.success}
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-blue-900 border border-blue-700 text-blue-100 rounded text-sm">
                  {t.contact.contactForm.error}
                </div>
              )}

              {/* Submit Button */}
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {}}
              >
                {status === "loading"
                  ? lang === "en"
                    ? "SENDING..."
                    : "INVIO..."
                  : t.contact.contactForm.submitButton}
              </Button>
            </form>
          </div>
        </section>

        {/* FAQ Section - CONTACT US PAGE ONLY */}
        <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800 border-b border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {t.contact.faq.title}
            </h2>

            <div className="space-y-4">
              {t.contact.faq.items.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-gray-700 rounded overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === idx ? null : idx)
                    }
                    className="w-full px-6 py-4 bg-gray-900 hover:bg-gray-800 transition flex justify-between items-center"
                  >
                    <h3 className="text-white font-semibold text-left">
                      {item.question}
                    </h3>
                    <span className="text-blue-600 text-2xl">
                      {expandedFaq === idx ? "−" : "+"}
                    </span>
                  </button>

                  {expandedFaq === idx && (
                    <div className="px-6 py-4 bg-black border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} navItems={t.nav} footerContent={t.footer} />
    </>
  );
}
