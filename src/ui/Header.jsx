// Header.jsx
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header className="bg-gray-50 p-2 md:p-4 border-b border-gray-200 flex items-center justify-between">
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
};

export default Header;
