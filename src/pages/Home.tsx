// src/pages/Home.tsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";
import logo from "../assets/Logo-rounded.svg";
import badgePlayFr from "../assets/store-badges/GetItOnGooglePlay_Badge_Web_color_French.png";
import badgePlayEn from "../assets/store-badges/GetItOnGooglePlay_Badge_Web_color_English.png";
import badgeAppFr from "../assets/store-badges/Download_on_the_App_Store_Badge_FR_RGB_blk_100517.svg";
import badgeAppEn from "../assets/store-badges/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";

const Home = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_title: "Home",
      page_location: window.location.pathname,
      page_path: window.location.pathname,
    });
  }, []);

  const trackDownloadClick = (platform: string) => {
    logEvent(analytics, "download_click", {
      platform: platform,
    });
  };

  const isFr = i18n.language === "fr";
  const badgePlay = isFr ? badgePlayFr : badgePlayEn;
  const badgeApp = isFr ? badgeAppFr : badgeAppEn;

  return (
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

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.bvic.sporttrackmerger"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackDownloadClick("android")}
            className="w-52 h-14 flex items-center justify-center hover:opacity-90 transition-transform duration-200 hover:scale-105"
          >
            <img
              src={badgePlay}
              alt={
                isFr ? "Disponible sur Google Play" : "Get it on Google Play"
              }
              className="h-full object-contain max-w-full"
            />
          </a>
          <a
            href="https://apps.apple.com/app/sport-track-merger/id6736858288"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackDownloadClick("ios")}
            className="w-52 h-14 flex items-center justify-center hover:opacity-90 transition-transform duration-200 hover:scale-105"
          >
            <img
              src={badgeApp}
              alt={
                isFr
                  ? "Télécharger dans l’App Store"
                  : "Download on the App Store"
              }
              className="h-full object-contain max-w-full"
            />
          </a>
        </div>

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
        </div>
      </div>
    </div>
  );
};

export default Home;
