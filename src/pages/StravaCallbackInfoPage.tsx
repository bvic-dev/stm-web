import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import StoreBadges from '../components/StoreBadges';
import RetryDeepLinkButton from '../components/RetryDeepLinkButton';
import { getAnalyticsIfConsented } from "../firebase";
import { logEvent } from "firebase/analytics";
import { useEffect } from "react";
import screenshotFr from '../assets/auth-callback/screenshot-strava-callback-fr.png';
import screenshotEn from '../assets/auth-callback/screenshot-strava-callback-en.png';

const StravaCallbackInfoPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [showLightbox, setShowLightbox] = useState(false);

  const steps = [t('stravaCallback.step1'), t('stravaCallback.step2')];

  const screenshot = currentLang === 'fr' ? screenshotFr : screenshotEn;

  useEffect(() => {
    const analytics = getAnalyticsIfConsented();
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: "StravaCallbackInfoPage",
        page_location: window.location.pathname,
        page_path: window.location.pathname,
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Titre + intro */}
      <div className="text-center mb-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-300">
          {t('stravaCallback.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          {t('stravaCallback.intro')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Colonne gauche */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">
            {t('stravaCallback.reason1Title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center text-sm">
            {t('stravaCallback.reason1Text')}
          </p>
          <StoreBadges className="flex flex-wrap justify-center mb-2" logoSize="small" />
          <RetryDeepLinkButton />
        </section>

        {/* Colonne droite */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">
            {t('stravaCallback.reason2Title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center text-sm">
            {t('stravaCallback.reason2Text')}
          </p>
          <div className="w-full max-w-xs mb-4">
            <div className="font-semibold text-gray-900 dark:text-white mb-2 text-center">
              {t('stravaCallback.howToFix')}
            </div>
            <ol className="space-y-2">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-100 rounded-full px-3 py-1 text-xs font-bold mr-2">
                    {idx + 1}
                  </span>
                  <span className="text-gray-800 dark:text-gray-100 text-xs">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Image mini avec zoom simple */}
          <img
            src={screenshot}
            alt={t('stravaCallback.screenshotCaption')}
            className="w-full h-auto max-h-[200px] object-contain rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setShowLightbox(true)}
            title={t('stravaCallback.screenshotCaption')}
          />
          <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 text-center italic">
            {t('stravaCallback.screenshotCaption')}
          </p>
        </section>
      </div>

      {showLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowLightbox(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Conteneur image + texte limité à la taille de l'image */}
            <div className="relative max-w-[500px] w-full">
              <img
                src={screenshot}
                alt={t('stravaCallback.screenshotCaption')}
                className="max-h-[90vh] w-full h-auto object-contain rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
                onClick={() => setShowLightbox(false)}
                aria-label="Fermer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ✅ Texte centré et limité à la même largeur que l'image */}
            <p className="mt-3 text-sm text-gray-200 text-center italic max-w-[95vw] mx-auto">
              {t('stravaCallback.screenshotCaption')}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default StravaCallbackInfoPage;