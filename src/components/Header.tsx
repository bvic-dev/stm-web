import LanguageSelector from "./LanguageSelector";

const Header = () => {
  return (
    <header className="w-full px-4 pt-4 bg-white dark:bg-gray-900 shadow-md flex justify-end">
      <div className="">
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
