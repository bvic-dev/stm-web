import { useEffect } from "react";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";
import { useTranslation } from "react-i18next";
import { parseMarkdownLinks } from "../utils/parseMarkdownLinks";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export type LegalPageProps = {
  titleKey: string;
  lastUpdateKey: string;
  sectionsKey: string;
  pageTitle: string;
};

const LegalPage = ({
  titleKey,
  lastUpdateKey,
  sectionsKey,
  pageTitle,
}: LegalPageProps) => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_title: pageTitle,
      page_location: window.location.pathname,
      page_path: window.location.pathname,
    });
  }, [pageTitle]);

  const sections = t(sectionsKey, { returnObjects: true }) as {
    title: string;
    content: string[];
  }[];

  const links = [
    { path: "/cgu", label: t("legal.cgu") },
    { path: "/cgv", label: t("legal.cgv") },
    { path: "/privacy", label: t("legal.privacy") },
  ].filter((link) => link.path !== location.pathname);

  return (
    <div className="min-h-screen flex flex-col justify-between text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          {t(titleKey)}
        </h1>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            <strong>{t(lastUpdateKey)}</strong>
          </p>
          {sections.map((section, idx) => (
            <section key={idx} className="mb-8 last:mb-0">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {section.title}
              </h2>
              {section.content.map((p, i) => (
                <p
                  key={i}
                  className="mb-4 last:mb-0 leading-relaxed text-gray-800 dark:text-gray-200"
                >
                  {parseMarkdownLinks(p)}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>

      <footer className="mt-12 text-sm flex justify-center items-center gap-2 text-gray-600 dark:text-gray-400">
        {links.map((link, index) => (
          <div key={link.path} className="flex items-center gap-2">
            <Link
              to={link.path}
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
            {index < links.length - 1 && <span>•</span>}
          </div>
        ))}
      </footer>
    </div>
  );
};

export default LegalPage;
