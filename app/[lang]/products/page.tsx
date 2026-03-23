import { use, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/button";
import { getTranslation, Language } from "@/lib/i18n";

export default function ProductsPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = use(params);
  const t = getTranslation(lang);
  const [selectedBrand, setSelectedBrand] = useState("all");

  const products = [
    {
      brand: "PORSCHE",
      name: "992.1 GT3 RS EXHAUST",
      year: "2021-",
      model: "304 SST",
    },
    {
      brand: "BMW",
      name: "GB2 M4 EXHAUST M-PERFORMANCE VER",
      year: "3.0L SS8",
      model: "304 SST",
    },
    {
      brand: "BMW",
      name: "F96 X6M / COMPETITION LCI EXHAUST",
      year: "2024-",
      model: "304 SST",
    },
    {
      brand: "PORSCHE",
      name: "9YA.2 CAYENNE 5 4.0 TT / CAYENNE COUPE 5 4.0T...",
      year: "2023-",
      model: "304 SST",
    },
    {
      brand: "TOYOTA",
      name: "MK5 SUPRA 3.0T EXHAUST A90 / A91...",
      year: "2020",
      model: "304 SST",
    },
    {
      brand: "BMW",
      name: "G87 M2 EXHAUST",
      year: "2022-",
      model: "304 SST",
    },
  ];

  return (
    <>
      <Navbar lang={lang} navItems={t.nav} />
      <main className="bg-black">
        {/* Hero Section */}
        <Hero
          title={t.products.hero.title}
          subtitle={t.products.hero.subtitle}
        />

        {/* Search Section */}
        <section className="py-12 px-4 bg-black">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t.products.searchPlaceholder}
              </h2>

              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:border-blue-600"
                >
                  <option value="all">{t.products.flOriginal}</option>
                  <option value="porsche">PORSCHE</option>
                  <option value="bmw">BMW</option>
                  <option value="lamborghini">LAMBORGHINI</option>
                  <option value="toyota">TOYOTA</option>
                </select>

                <select
                  className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:border-blue-600"
                >
                  <option>{t.products.brand}</option>
                </select>
              </div>

              <Button variant="primary" className="w-full md:w-auto">
                {t.products.search}
              </Button>

              <p className="text-gray-400 text-sm mt-4">
                {t.products.cantFind}
              </p>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12 px-4 bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.slice(0, 3).map((product, idx) => (
                <ProductCard
                  key={idx}
                  brand={product.brand}
                  name={product.name}
                  year={product.year}
                  model={product.model}
                />
              ))}
            </div>

            <div className="text-center mb-12">
              <Button variant="primary">{t.products.moreProducts}</Button>
            </div>
          </div>
        </section>

        {/* Most Popular Section */}
        <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              {t.products.mostPopular}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, idx) => (
                <ProductCard
                  key={idx}
                  brand={product.brand}
                  name={product.name}
                  year={product.year}
                  model={product.model}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} navItems={t.nav} footerContent={t.footer} />
    </>
  );
}
