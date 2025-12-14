// Header.jsx
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import LogoMini from "./LogoMini";
import { useTheme } from "../contexts/ThemeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="p-4 flex items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 md:p-4 border-b border-gray-200 dark:border-gray-700 gap-4">
      {/* Move profile avatar to far left */}
      <div className="mr-2">
        <UserAvatar />
      </div>
      <LogoMini />
      <div className="flex items-center gap-3 sm:gap-4 ml-auto">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="p-2 rounded-full bg-white/70 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition text-gray-700 dark:text-gray-100"
        >
          {isDark ? (
            <HiOutlineSun className="w-5 h-5" />
          ) : (
            <HiOutlineMoon className="w-5 h-5" />
          )}
        </button>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
