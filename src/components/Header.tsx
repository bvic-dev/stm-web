import LanguageSelector from "./LanguageSelector";

const Header = () => {
  return (
    <header className="w-full px-4 pt-4 bg-white dark:bg-gray-900 flex justify-end">
        <LanguageSelector />
    </header>
  );
};

export default Header;
