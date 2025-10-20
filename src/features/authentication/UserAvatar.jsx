import useUser from "./useUser";

const UserAvatar = () => {
  const { user } = useUser();
  const fullName = user?.user_metadata?.fullName || "User";
  const avatar = user?.user_metadata?.avatar || "/default-user.jpg";

  return (
    <div className="flex items-center gap-3 text-gray-700">
      <img
        src={avatar}
        alt={fullName}
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className="text-sm font-medium">{fullName}</span>
    </div>
  );
};

export default UserAvatar;
