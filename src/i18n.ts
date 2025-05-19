import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // AJOUT
import fr from "@/locales/fr/translation.json";
import en from "@/locales/en/translation.json";

i18n
  .use(LanguageDetector) // AJOUT
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    // Ne PAS mettre "lng: 'fr'", sinon ça force toujours le FR !
    fallbackLng: "fr",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
