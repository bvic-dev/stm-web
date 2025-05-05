import { useTranslation } from "react-i18next";

const GlobalFooter = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-center py-6 text-sm text-gray-500 dark:text-gray-400">
      {t("footer.copyright", { year: currentYear })}
    </footer>
  );
};

export default GlobalFooter;
