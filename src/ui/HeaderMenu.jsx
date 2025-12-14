// HeaderMenu.jsx
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

const HeaderMenu = () => {
  const navigate = useNavigate();

  return (
    <ul className="flex items-center gap-4 text-gray-700 dark:text-gray-200">
      <li>
        <button
          onClick={() => navigate("/account")}
          className="flex items-center gap-1 cursor-pointer transition-colors hover:text-gray-900 dark:hover:text-gray-400"
        >
          <CiUser className="text-lg" />
          Account
        </button>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
};

export default HeaderMenu;
