import { use } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/button";
import { getTranslation, Language } from "@/lib/i18n";

export default function HomePage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = use(params);
  const t = getTranslation(lang);

  return (
    <>
      <Navbar lang={lang} navItems={t.nav} />
      <main className="bg-black">
        {/* Hero Section */}
        <Hero
          title={t.home.hero.title}
          subtitle={t.home.hero.subtitle}
          backgroundImage="linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)"
        />

        {/* Featured Products Section */}
        <section className="py-12 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-600 text-sm font-bold">
                {t.home.featured}
              </span>
            </div>

            {/* Featured Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <ProductCard
                brand="PORSCHE"
                name="992.2 GT3 RS EXHAUST"
                year="2025-"
                model="304 SST"
              />
              <ProductCard
                brand="BMW"
                name="G60 530i EXHAUST"
                year="2023-"
                model="304 SST"
              />
              <ProductCard
                brand="LAMBORGHINI"
                name="URUS SE EXHAUST"
                year="2026-"
                model="304 SST"
              />
            </div>

            <div className="text-center mb-16">
              <Button variant="primary">{t.products.moreProducts}</Button>
            </div>
          </div>
        </section>

        {/* Banner Sections */}
        <section className="space-y-0">
          {/* Banner 1: Unlock Power */}
          <div className="bg-gradient-to-r from-gray-900 to-black py-16 px-4 text-center">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                {t.home.unlockPower}
              </h2>
              <p className="text-gray-400 mb-8">{t.home.unlockPowerDesc}</p>
              <Button variant="primary">EXPLORE</Button>
            </div>
          </div>

          {/* Banner 2: Activate Deeper */}
          <div className="bg-black py-16 px-4 text-center border-y border-gray-800">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                {t.home.activateDeeper}
              </h2>
              <p className="text-gray-400 mb-8">{t.home.activateDeeperDesc}</p>
              <Button variant="secondary">LEARN MORE</Button>
            </div>
          </div>

          {/* Banner 3: The Legend */}
          <div className="bg-gradient-to-r from-black to-gray-900 py-16 px-4 text-center">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                {t.home.theLegend}
              </h2>
              <p className="text-gray-400 mb-8">{t.home.theLegendDesc}</p>
              <Button variant="primary">DISCOVER</Button>
            </div>
          </div>

          {/* Banner 4: Monstrous Power */}
          <div className="bg-black py-16 px-4 text-center border-y border-gray-800">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                {t.home.monstrousPower}
              </h2>
              <p className="text-gray-400 mb-8">{t.home.monstrousPowerDesc}</p>
              <Button variant="secondary">VIEW</Button>
            </div>
          </div>

          {/* Banner 5: M-Performance */}
          <div className="bg-gradient-to-r from-gray-900 to-black py-16 px-4 text-center">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                {t.home.mPerformance}
              </h2>
              <p className="text-gray-400 mb-8">{t.home.mPerformanceDesc}</p>
              <Button variant="primary">EXPLORE</Button>
            </div>
          </div>
        </section>

        {/* Titanium & Accessories Section */}
        <section className="py-12 px-4 bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Titanium Signature */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.home.titaniumSignature}
                </h3>
                <p className="text-gray-400 mb-6">
                  {t.home.titaniumSignatureDesc}
                </p>
                <Button variant="primary" size="sm">
                  LEARN MORE
                </Button>
              </div>

              {/* Pro Remote */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.home.proRemote}
                </h3>
                <p className="text-gray-400 mb-6">{t.home.proRemoteDesc}</p>
                <Button variant="primary" size="sm">
                  SHOP
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dealer & News Section */}
        <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dealer Locator */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {t.home.dealerLocator}
                </h3>
                <p className="text-gray-400 mb-6">{t.home.dealerLocatorDesc}</p>
                <Button variant="primary">FIND DEALER</Button>
              </div>

              {/* News */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {t.home.news}
                </h3>
                <p className="text-gray-400 mb-6">
                  Latest updates and announcements
                </p>
                <Button variant="secondary">READ NEWS</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} navItems={t.nav} footerContent={t.footer} />
    </>
  );
}
