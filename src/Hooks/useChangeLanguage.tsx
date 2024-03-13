import { useEffect } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import i18n from 'i18next';
import translationEN from '../translate/en.json';
import translationAR from '../translate/ar.json';
import translationDE from '../translate/de.json';
import translationTR from '../translate/tr.json';
import translationRU from '../translate/ru.json';


let language = localStorage.getItem('language') ?? 'en';

i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: translationEN
      },
      ar: {
        translation: translationAR
      },
      de: {
        translation: translationDE
      },
      tr: {
        translation: translationTR
      },
      ru: {
        translation: translationRU // Add Russian translation
    }
    },
    lng: language ?? "en", 
    interpolation: {
      escapeValue: false
    }
  });

//   console.log(navigator.language,"navigator.language");

export function useLanguage() {
  useEffect(() => {
    changeLanguage(language);
  }, []);

  const changeLanguage = (newLanguage:any) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    applyLanguageStyles(newLanguage);
  };

  return { changeLanguage };
}

function applyLanguageStyles(language:any) {
  if (language === 'ar') {
    document.body.setAttribute('dir', 'rtl');
    document.body.classList.remove('de');
    document.body.classList.add('ar');
  } else if (language === 'en') {
    document.body.setAttribute('dir', 'ltr');
    document.body.classList.remove('ar', 'de');
    document.body.classList.add('en');
  } else if (language === 'de') {
    document.body.setAttribute('dir', 'ltr');
    document.body.classList.remove('ar');
    document.body.classList.add('de');
  }
  else if (language === 'tr') {
    document.body.setAttribute('dir', 'ltr');
    document.body.classList.remove('ar');
    document.body.classList.add('tr');
  }
  else if (language === 'ru') {
    document.body.setAttribute('dir', 'ltr');
    document.body.classList.remove('ar');
    document.body.classList.add('ru');
  }
}

export function useLanguageMenu() {
  const { t } = useTranslation();

  const languageOptions = [
    { code: 'ar', icon: '/language/ar.svg', label: t('Arabic') },
    { code: 'en', icon: '/language/en.svg', label: t('English') },
    { code: 'de', icon: '/language/de.svg', label: t('German') },
    { code: 'tr', icon: '/language/tr.svg', label: t('Turkish') },
    { code: 'ru', icon: '/language/ru.svg', label: t('Russian') } 
  ];

  return { languageOptions };
}
