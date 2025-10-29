// Header.jsx
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import LogoMini from "./LogoMini";

const Header = () => {
  return (
    <header className="p-4 flex justify-between bg-gray-50  md:p-4 border-b border-gray-200 gap-4">
      <LogoMini />
      <div className="flex sm:justify-between items-center sm:flex-1">
        <UserAvatar />
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
