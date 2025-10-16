import useLogout from "../features/authentication/useLogout";


const Logout = () => {
  const { logout, isPending: isLoggingOut } = useLogout();
  return (
    <button
  disabled={isLoggingOut}
  onClick={() => logout()}
  className="min-w-[130px] px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 text-center"
>
  {isLoggingOut ? "Logging out..." : "Logout"}
</button>
  );
};

export default Logout;
