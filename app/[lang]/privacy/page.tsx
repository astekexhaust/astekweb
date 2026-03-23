"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { getTranslation, Language } from "@/lib/i18n";

export default function PrivacyPage() {
  const lang: Language = "en";
  const t = getTranslation(lang);

  return (
    <>
      <Navbar lang={lang} navItems={t.nav} />
      <main className="bg-black">
        {/* Hero Section */}
        <Hero
          title={t.legal.privacyPolicy.title}
          subtitle={
            lang === "en"
              ? "Your Privacy Matters"
              : "La Tua Privacy è Importante"
          }
        />

        {/* Content Section */}
        <section className="py-12 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t.legal.privacyPolicy.title}
              </h2>

              <div className="text-gray-300 leading-relaxed space-y-6">
                <p>{t.legal.placeholderContent}</p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "1. Information We Collect"
                    : "1. Informazioni che Raccogliamo"}
                </h3>
                <p>
                  {lang === "en"
                    ? "We collect various types of information in connection with the services we provide, including contact information, demographic information, and usage data. Details about specific data collection practices will be included in the complete privacy policy."
                    : "Raccogliamo vari tipi di informazioni in relazione ai servizi che forniamo, incluse informazioni di contatto, informazioni demografiche e dati di utilizzo. I dettagli sulle specifiche pratiche di raccolta dati saranno inclusi nella politica sulla privacy completa."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "2. How We Use Information"
                    : "2. Come Utilizziamo le Informazioni"}
                </h3>
                <p>
                  {lang === "en"
                    ? "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations. Your information will never be sold to third parties without explicit consent."
                    : "Utilizziamo le informazioni che raccogliamo per fornire, mantenere e migliorare i nostri servizi, per comunicare con te e per conformarci agli obblighi legali. Le tue informazioni non saranno mai vendute a terzi senza il tuo esplicito consenso."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "3. Data Security"
                    : "3. Sicurezza dei Dati"}
                </h3>
                <p>
                  {lang === "en"
                    ? "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access and processing. We maintain industry-standard security protocols and encryption standards."
                    : "Implementiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati personali da accesso e elaborazione non autorizzati. Manteniamo protocolli di sicurezza e standard di crittografia standard del settore."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "4. Your Rights"
                    : "4. I Tuoi Diritti"}
                </h3>
                <p>
                  {lang === "en"
                    ? "Depending on your location, you may have rights to access, correct, or delete your personal information. You may also have the right to opt-out of certain data processing activities. Complete details will be provided in the final policy."
                    : "A seconda della tua posizione, puoi avere diritti di accedere, correggere o eliminare le tue informazioni personali. Puoi anche avere il diritto di rinunciare a determinate attività di elaborazione dei dati. I dettagli completi saranno forniti nella politica finale."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "5. Third-Party Links"
                    : "5. Link a Terze Parti"}
                </h3>
                <p>
                  {lang === "en"
                    ? "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information."
                    : "Il nostro sito web può contenere link a siti web di terze parti. Non siamo responsabili per le pratiche sulla privacy di questi siti esterni. Si prega di rivedere le loro politiche sulla privacy prima di fornire informazioni personali."}
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  {lang === "en"
                    ? "6. Contact Us"
                    : "6. Contattaci"}
                </h3>
                <p>
                  {lang === "en"
                    ? "If you have questions or concerns about our privacy practices, please contact us through the contact page on our website. We are committed to addressing any privacy-related inquiries promptly."
                    : "Se hai domande o preoccupazioni riguardanti le nostre pratiche sulla privacy, contattaci attraverso la pagina di contatto sul nostro sito web. Siamo impegnati ad affrontare qualsiasi richiesta relativa alla privacy prontamente."}
                </p>

                <div className="mt-12 p-6 bg-gray-900 border border-gray-700 rounded">
                  <p className="text-gray-400 text-sm">
                    {lang === "en"
                      ? "Last Updated: March 2026. This is a placeholder version. Complete privacy policy will be provided upon launch."
                      : "Ultimo aggiornamento: Marzo 2026. Questa è una versione segnaposto. La politica sulla privacy completa sarà fornita al lancio."}
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
