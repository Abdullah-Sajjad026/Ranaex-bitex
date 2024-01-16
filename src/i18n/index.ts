import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEn from "./locales/en/translation.json";
import translationInFr from "./locales/fr/translation.json";
import translationInDe from "./locales/de/translation.json";
import translationInZh from "./locales/zh/translation.json";
import translationInJa from "./locales/ja/translation.json";
import translationInKo from "./locales/ko/translation.json";

// the translations
const resources = {
  en: {
    translation: translationsInEn,
  },
  fr: {
    translation: translationInFr,
  },
  de: {
    translation: translationInDe,
  },
  zh: {
    translation: translationInZh,
  },
  ja: {
    translation: translationInJa,
  },
  ko: {
    translation: translationInKo,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are important to load translations for the languages.
    lng: localStorage.getItem("appLang") || "en", // It acts as default language. When the site loads, content is shown in this language.
    debug: true,
    fallbackLng: "de", // use de if selected language is not available
    interpolation: {
      escapeValue: false,
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation",
  });

export default i18n;
