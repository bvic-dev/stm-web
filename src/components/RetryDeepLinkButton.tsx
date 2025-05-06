import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const RetryDeepLinkButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState<string | null>(null);

    const handleRetry = () => {
        try {
            const currentUrl = new URL(window.location.href);
            const path = `${currentUrl.host}${currentUrl.pathname}${currentUrl.search}`;
            const hasParams = currentUrl.search.length > 0;
            const deeplinkUrl = `sporttrackmerger://${path}${hasParams ? '' : '?error=missing_param'}`;
            window.location.href = deeplinkUrl;

            setTimeout(() => {
                setError(t('stravaCallback.retryError'));
            }, 2000);
        } catch (e) {
            console.error("Deeplink error", e);
            setError(t('stravaCallback.retryError'));
        }
    };

    // 🔁 Efface l’erreur automatiquement au bout de 5s
    useEffect(() => {
        if (!error) return;
        const timer = setTimeout(() => setError(null), 10000);
        return () => clearTimeout(timer);
    }, [error]);

    return (
        <div className="mt-4 flex flex-col items-center">
            <button
                onClick={handleRetry}
                className="px-4 py-2 rounded-lg font-semibold text-sm shadow transition
                   bg-blue-600 text-white hover:bg-blue-700
                   dark:bg-blue-800 dark:hover:bg-blue-700 dark:text-white"
            >
                {t('stravaCallback.retryButton')}
            </button>

            {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 text-center">
                    {error}
                </p>
            )}
        </div>
    );
};

export default RetryDeepLinkButton;
