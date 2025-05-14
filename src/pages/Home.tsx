// src/pages/Home.tsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getAnalyticsIfConsented } from "@/firebase";
import { logEvent } from "firebase/analytics";
import logo from "@/assets/Logo-rounded.svg";
import StoreBadges from "@/components/StoreBadges";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const analytics = getAnalyticsIfConsented();
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: "Home",
        page_location: window.location.pathname,
        page_path: window.location.pathname,
      });
    }
  }, []);

  const trackDownloadClick = (platform: string) => {
    const analytics = getAnalyticsIfConsented();
    if (analytics) {
      logEvent(analytics, "download_click", {
        platform: platform,
      });
    }
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.sporttrackmerger.com/" />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 text-gray-900 dark:text-gray-100">
        <div className="max-w-3xl w-full flex flex-col items-center space-y-10">
          <img
            src={logo}
            alt="Sport Track Merger Logo"
            className="w-32 h-32 rounded-2xl shadow-lg"
          />

          <h1 className="text-4xl font-bold text-center text-balance text-gray-900 dark:text-white">
            {t("home.title")}
          </h1>

          <p className="text-xl text-center max-w-xl text-balance text-gray-700 dark:text-gray-300">
            {t("home.subtitle")}
          </p>

          <StoreBadges
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            logoSize="large"
            onPlayClick={() => trackDownloadClick('android')}
            onAppClick={() => trackDownloadClick('ios')}
          />
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
            <a
              href="/cgu"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {t("legal.cgu")}
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="/cgv"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {t("legal.cgv")}
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="/privacy"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {t("legal.privacy")}
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="/contact"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {t("contact.title")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
