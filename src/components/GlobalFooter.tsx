import { useTranslation } from "react-i18next";

const GlobalFooter = ({ onManageCookies }: { onManageCookies?: () => void }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-center py-6 text-sm text-gray-500 dark:text-gray-400 flex flex-col items-center gap-2">
      <span>{t("footer.copyright", { year: currentYear })}</span>
      <button
        type="button"
        className="underline hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
        onClick={onManageCookies}
      >
        {t("cookieConsent.footerLink")}
      </button>
    </footer>
  );
};

export default GlobalFooter;
