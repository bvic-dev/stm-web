import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { logEvent } from "firebase/analytics";
import { getAnalyticsIfConsented } from "@/firebase";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const analytics = getAnalyticsIfConsented();
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: "ContactPage",
        page_location: window.location.pathname,
        page_path: window.location.pathname,
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.sporttrackmerger.com/contact" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
            {t('contact.title')}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Section Email */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('contact.email')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
              {t('contact.emailText')}
            </p>
            <a
              href="mailto:b.vic.dev@gmail.com"
              className="px-6 py-3 rounded-lg font-semibold text-sm shadow transition
                     bg-blue-600 text-white hover:bg-blue-700
                     dark:bg-blue-800 dark:hover:bg-blue-700 dark:text-white
                     flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              b.vic.dev@gmail.com
            </a>
          </section>

          {/* Section Discord */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('contact.discord')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
              {t('contact.discordText')}
            </p>
            <a
              href="https://discord.gg/YWDkyDUxpK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold text-sm shadow transition
                     bg-[#5865F2] text-white hover:bg-[#4752C4]
                     dark:bg-[#5865F2] dark:hover:bg-[#4752C4] dark:text-white
                     flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Rejoindre Discord
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage; 