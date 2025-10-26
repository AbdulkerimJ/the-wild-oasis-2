import { FiLogOut } from "react-icons/fi";
import useLogout from "../features/authentication/useLogout";

const Logout = () => {
  const { logout, isPending: isLoggingOut } = useLogout();

  return (
    <button
      disabled={isLoggingOut}
      onClick={() => logout()}
      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer"
    >
      <FiLogOut />
      {isLoggingOut ? "Logging out..." : "Logout"}
    </button>
  );
};

export default Logout;
