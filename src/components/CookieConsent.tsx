import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface CookieConsentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const COOKIE_NAME = "cookie_consent";
const COOKIE_DURATION_DAYS = 365;

function setCookie(value: string) {
  const expires = new Date(Date.now() + COOKIE_DURATION_DAYS * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie() {
  const match = document.cookie.match(new RegExp('(?:^|; )' + COOKIE_NAME + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

const CookieConsent = ({ open, setOpen }: CookieConsentProps) => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // Affiche le bandeau si pas de cookie
    if (!getCookie()) setOpen(true);
  }, [setOpen]);

  if (!open) return null;

  const handleAccept = () => {
    setCookie("accepted");
    setOpen(false);
    window.location.reload(); // recharge pour activer analytics si accepté
  };
  const handleReject = () => {
    setCookie("rejected");
    setOpen(false);
    window.location.reload(); // recharge pour désactiver analytics si refusé
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-xl max-w-2xl w-full mx-2 mb-4 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-3 dark:ring">
        <div className="flex-1 text-sm text-gray-700 dark:text-gray-200">
          <span className="font-semibold text-gray-900 dark:text-white">{t("cookieConsent.title")}</span>
          <span className="ml-2">{t("cookieConsent.description")}</span>
          {showMore && (
            <div className="mt-2 text-xs text-gray-600 dark:text-gray-300 border rounded p-2 bg-gray-50 dark:bg-gray-800">
              <strong>{t("cookieConsent.moreInfoTitle")}</strong>
              <p>{t("cookieConsent.moreInfoText")}</p>
            </div>
          )}
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm cursor-pointer"
            onClick={handleAccept}
          >
            {t("cookieConsent.accept")}
          </button>
          <button
            className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600 font-semibold text-sm cursor-pointer"
            onClick={handleReject}
          >
            {t("cookieConsent.reject")}
          </button>
          <button
            className="px-3 py-1 underline text-blue-600 dark:text-blue-400 text-sm cursor-pointer"
            onClick={() => setShowMore((v) => !v)}
          >
            {t("cookieConsent.learnMore")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 