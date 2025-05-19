import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CGU from "./pages/CGU";
import CGV from "./pages/CGV";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import StravaCallbackInfoPage from "./pages/StravaCallbackInfoPage";
import Header from "./components/Header";
import GlobalFooter from "./components/GlobalFooter";
import CookieConsent from "./components/CookieConsent";
import { useState } from "react";

function App() {
  const [cookieOpen, setCookieOpen] = useState(false);
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/auth/strava/callback" element={<StravaCallbackInfoPage />} />
          </Routes>
        </main>
        <GlobalFooter onManageCookies={() => setCookieOpen(true)} />
        <CookieConsent open={cookieOpen} setOpen={setCookieOpen} />
      </div>
    </Router>
  );
}

export default App;
