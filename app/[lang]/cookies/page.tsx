"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { getTranslation, Language } from "@/lib/i18n";

export default function CookiePolicyPage() {
  const lang: Language = "en";
  const t = getTranslation(lang);

  return (
    <>
      <Navbar lang={lang} navItems={t.nav} />
      <main className="bg-black">
        {/* Hero Section */}
        <Hero
          title={t.legal.cookiePolicy.title}
          subtitle={
            lang === "en"
              ? "Understanding Our Cookie Policy"
              : "Comprendi la Nostra Politica sui Cookie"
          }
        />

        {/* Content Section */}
        <section className="py-12 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t.legal.cookiePolicy.title}
              </h2>

              <div className="text-gray-300 leading-relaxed space-y-6">
                <p>{t.legal.placeholderContent}</p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en" ? "1. What Are Cookies?" : "1. Cosa Sono i Cookie?"}
                </h3>
                <p>
                  {lang === "en"
                    ? "Cookies are small text files that are placed on your device when you visit our website. They help us remember your preferences and provide a better user experience. Cookies can be either session cookies that expire when you close your browser, or persistent cookies that remain on your device."
                    : "I cookie sono piccoli file di testo che vengono posizionati sul tuo dispositivo quando visiti il nostro sito web. Ci aiutano a ricordare le tue preferenze e fornire un'esperienza utente migliore. I cookie possono essere cookie di sessione che scadono quando chiudi il browser, oppure cookie persistenti che rimangono sul tuo dispositivo."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "2. Types of Cookies We Use"
                    : "2. Tipi di Cookie Che Utilizziamo"}
                </h3>
                <p>
                  {lang === "en"
                    ? "We use essential cookies for website functionality, analytics cookies to understand how you use our site, and marketing cookies to deliver targeted content. A complete list of all cookies will be provided in the full policy."
                    : "Utilizziamo cookie essenziali per la funzionalità del sito web, cookie di analisi per capire come utilizzi il nostro sito e cookie di marketing per fornire contenuti mirati. Un elenco completo di tutti i cookie sarà fornito nella politica completa."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "3. Your Cookie Choices"
                    : "3. Le Tue Scelte sui Cookie"}
                </h3>
                <p>
                  {lang === "en"
                    ? "You can control cookie preferences through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, blocking some cookies may affect website functionality."
                    : "Puoi controllare le preferenze dei cookie attraverso le impostazioni del tuo browser. La maggior parte dei browser ti consente di rifiutare i cookie o di essere avvisato quando i cookie vengono inviati. Tuttavia, il blocco di alcuni cookie può influire sulla funzionalità del sito web."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "4. Third-Party Cookies"
                    : "4. Cookie di Terze Parti"}
                </h3>
                <p>
                  {lang === "en"
                    ? "We may use cookies from third-party services to enhance your experience. These services include analytics providers and advertising partners. We ensure these partners have appropriate privacy protections."
                    : "Potremmo utilizzare cookie da servizi di terze parti per migliorare la tua esperienza. Questi servizi includono provider di analisi e partner pubblicitari. Ci assicuriamo che questi partner abbiano protezioni sulla privacy appropriate."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "5. CookieYes Consent Management"
                    : "5. Gestione del Consenso CookieYes"}
                </h3>
                <p>
                  {lang === "en"
                    ? "We use CookieYes to manage cookie consent on our website. This tool helps us comply with cookie laws and gives you control over which cookies are used. Your consent preferences are saved and respected across all our web properties."
                    : "Utilizziamo CookieYes per gestire il consenso dei cookie sul nostro sito web. Questo strumento ci aiuta a conformarci alle leggi sui cookie e ti dà il controllo su quali cookie vengono utilizzati. Le tue preferenze di consenso vengono salvate e rispettate su tutte le nostre proprietà web."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "6. Updates to This Policy"
                    : "6. Aggiornamenti di Questa Politica"}
                </h3>
                <p>
                  {lang === "en"
                    ? "We may update this cookie policy from time to time to reflect changes in our practices or technology. We encourage you to review this policy periodically to stay informed about how we use cookies."
                    : "Potremmo aggiornare questa politica sui cookie di tanto in tanto per riflettere i cambiamenti nelle nostre pratiche o tecnologie. Ti incoraggiamo a rivedere questa politica periodicamente per rimanere informato su come utilizziamo i cookie."}
                </p>

                <div className="mt-12 p-6 bg-gray-900 border border-gray-700 rounded">
                  <p className="text-gray-400 text-sm">
                    {lang === "en"
                      ? "Last Updated: March 2026. This is a placeholder version. Complete cookie policy will be provided upon launch."
                      : "Ultimo aggiornamento: Marzo 2026. Questa è una versione segnaposto. La politica completa sui cookie sarà fornita al lancio."}
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
