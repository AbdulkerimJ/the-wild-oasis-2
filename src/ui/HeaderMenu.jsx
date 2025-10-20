// HeaderMenu.jsx
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

const HeaderMenu = () => {
  const navigate = useNavigate();

  return (
    <ul className="flex items-center gap-4">
      <li>
        <button
          onClick={() => navigate("/account")}
          className="text-gray-700 hover:text-gray-900 flex items-center gap-1 cursor-pointer "
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
