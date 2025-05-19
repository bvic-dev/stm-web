import { initializeApp } from "firebase/app";
import { getAnalytics as _getAnalytics, Analytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

function getCookieConsent() {
  if (typeof document === 'undefined') return false;
  const match = document.cookie.match(/(?:^|; )cookie_consent=([^;]*)/);
  return match && decodeURIComponent(match[1]) === 'accepted';
}

let analytics: Analytics | null = null;
export function getAnalyticsIfConsented(): Analytics | null {
  if (!analytics && getCookieConsent()) {
    analytics = _getAnalytics(app);
  }
  return analytics;
}
