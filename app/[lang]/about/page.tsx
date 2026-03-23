import { use } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { getTranslation, Language } from "@/lib/i18n";

export default function AboutPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = use(params);
  const t = getTranslation(lang);

  return (
    <>
      <Navbar lang={lang} navItems={t.nav} />
      <main className="bg-black">
        {/* Hero Section */}
        <Hero
          title={t.about.hero.title}
          subtitle={t.about.hero.subtitle}
        />

        {/* About Sections - Alternating Layout */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            {t.about.sections.map((section, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="mb-24">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                    isEven ? "md:grid-cols-[1fr_1fr]" : "md:grid-cols-[1fr_1fr]"
                  }`}>
                    {/* First section: Image left, text right | Odd sections: Image right, text left */}
                    {isEven ? (
                      <>
                        {/* Image Left */}
                        <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded border border-gray-700 flex items-center justify-center overflow-hidden">
                          <div className="text-center">
                            <div className="text-blue-600 text-5xl mb-2">📷</div>
                            <p className="text-gray-500 text-sm">
                              {section.title}
                            </p>
                          </div>
                        </div>
                        {/* Text Right */}
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                            {section.title}
                          </h2>
                          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                            {section.desc}
                          </p>
                          <div className="flex gap-4 items-start">
                            <div className="w-1 h-12 bg-blue-600 flex-shrink-0 mt-0.5"></div>
                            <div>
                              <p className="text-white text-sm font-semibold">
                                {lang === "en" ? "Premium Engineering" : "Ingegneria Premium"}
                              </p>
                              <p className="text-gray-500 text-xs mt-1">
                                {lang === "en" ? "Precision crafted" : "Realizzato con precisione"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Text Left */}
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                            {section.title}
                          </h2>
                          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                            {section.desc}
                          </p>
                          <div className="flex gap-4 items-start">
                            <div className="w-1 h-12 bg-blue-600 flex-shrink-0 mt-0.5"></div>
                            <div>
                              <p className="text-white text-sm font-semibold">
                                {lang === "en" ? "Premium Engineering" : "Ingegneria Premium"}
                              </p>
                              <p className="text-gray-500 text-xs mt-1">
                                {lang === "en" ? "Precision crafted" : "Realizzato con precisione"}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Image Right */}
                        <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded border border-gray-700 flex items-center justify-center overflow-hidden">
                          <div className="text-center">
                            <div className="text-blue-600 text-5xl mb-2">📷</div>
                            <p className="text-gray-500 text-sm">
                              {section.title}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 text-balance">
              {lang === "en"
                ? "Experience the Difference"
                : "Sperimenta la Differenza"}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {lang === "en"
                ? "Discover why leading automotive enthusiasts choose Astek Exhaust for uncompromising performance and sonic excellence."
                : "Scopri perché i principali appassionati di automobili scelgono Astek Exhaust per prestazioni senza compromessi e eccellenza sonica."}
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
              {lang === "en" ? "Get Started" : "Inizia"}
            </button>
          </div>
        </section>
      </main>
      <Footer lang={lang} navItems={t.nav} footerContent={t.footer} />
    </>
  );
}
