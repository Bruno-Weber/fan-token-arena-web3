import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importando os arquivos de tradução
import ptCommon from './locales/pt/translation/common.json';
import enCommon from './locales/en/translation/common.json';
import frCommon from './locales/fr/translation/common.json';
import esCommon from './locales/es/translation/common.json';

// Configuração do i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: ptCommon
      },
      en: {
        translation: enCommon
      },
      fr: {
        translation: frCommon
      },
      es: {
        translation: esCommon
      }
    },
    fallbackLng: 'pt',
    debug: false,
    interpolation: {
      escapeValue: false, // não é necessário para o React
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
