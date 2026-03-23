import { use } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { getTranslation, Language } from "@/lib/i18n";

export default function TermsPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = use(params);
  const t = getTranslation(lang);

  return (
    <>
      <Navbar lang={lang} navItems={t.nav} />
      <main className="bg-black">
        {/* Hero Section */}
        <Hero
          title={t.legal.termsAndConditions.title}
          subtitle={
            lang === "en"
              ? "Read our Terms and Conditions"
              : "Leggi i nostri Termini e Condizioni"
          }
        />

        {/* Content Section */}
        <section className="py-12 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t.legal.termsAndConditions.title}
              </h2>

              <div className="text-gray-300 leading-relaxed space-y-6">
                <p>{t.legal.placeholderContent}</p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "1. Terms of Service"
                    : "1. Termini di Servizio"}
                </h3>
                <p>
                  {lang === "en"
                    ? "This section will contain comprehensive terms of service covering the use of our website, products, and services. Full details will be provided in a future update."
                    : "Questa sezione conterrà i termini di servizio completi che coprono l'uso del nostro sito web, prodotti e servizi. I dettagli completi saranno forniti in un aggiornamento futuro."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "2. User Responsibilities"
                    : "2. Responsabilità dell'Utente"}
                </h3>
                <p>
                  {lang === "en"
                    ? "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Full details will be added in the complete terms document."
                    : "Gli utenti sono responsabili del mantenimento della riservatezza delle informazioni del loro account e di tutte le attività che si verificano sotto il loro account. I dettagli completi verranno aggiunti nel documento dei termini completo."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "3. Product Information"
                    : "3. Informazioni sui Prodotti"}
                </h3>
                <p>
                  {lang === "en"
                    ? "All product descriptions and specifications are subject to change without notice. We strive to provide accurate information but make no guarantees. Detailed product terms will be included in the final version."
                    : "Tutte le descrizioni e le specifiche dei prodotti sono soggette a modifica senza preavviso. Ci sforziamo di fornire informazioni accurate ma non facciamo alcuna garanzia. I termini dettagliati del prodotto saranno inclusi nella versione finale."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en" ? "4. Limitation of Liability" : "4. Limitazione di Responsabilità"}
                </h3>
                <p>
                  {lang === "en"
                    ? "In no event shall FI EXHAUST be liable for any indirect, incidental, special, consequential, or punitive damages. This section will be expanded with full legal disclaimers in the final document."
                    : "In nessun caso FI EXHAUST sarà responsabile per danni indiretti, incidentali, speciali, conseguenti o punitivi. Questa sezione sarà ampliata con complete clausole di esclusione legale nel documento finale."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en" ? "5. Modifications" : "5. Modifiche"}
                </h3>
                <p>
                  {lang === "en"
                    ? "We reserve the right to modify these terms at any time. Your continued use of the website constitutes acceptance of any such modifications. Users will be notified of significant changes."
                    : "Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Il tuo continuo utilizzo del sito web costituisce l'accettazione di tali modifiche. Gli utenti verranno notificati dei cambiamenti significativi."}
                </p>

                <div className="mt-12 p-6 bg-gray-900 border border-gray-700 rounded">
                  <p className="text-gray-400 text-sm">
                    {lang === "en"
                      ? "Last Updated: March 2026. This is a placeholder version. Complete terms and conditions will be provided upon launch."
                      : "Ultimo aggiornamento: Marzo 2026. Questa è una versione segnaposto. I termini e le condizioni completi saranno forniti al lancio."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} navItems={t.nav} footerContent={t.footer} />
    </>
  );
}
