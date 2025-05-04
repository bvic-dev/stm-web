import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CGU from "./pages/CGU";
import CGV from "./pages/CGV";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LanguageSelector from "./components/LanguageSelector";
import GlobalFooter from "./components/GlobalFooter";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <LanguageSelector />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <GlobalFooter />
      </div>
    </Router>
  );
}

export default App;
