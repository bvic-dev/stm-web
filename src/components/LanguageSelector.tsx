import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
      <div className="flex gap-1">
        <button
          onClick={() => changeLanguage("fr")}
          className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
            currentLang === "fr"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          }`}
        >
          FR
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
            currentLang === "en"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
