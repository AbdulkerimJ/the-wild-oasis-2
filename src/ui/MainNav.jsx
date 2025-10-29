import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHomeModern,
} from "react-icons/hi2";

const navItems = [
  { to: "/dashboard", label: "Home", icon: <HiOutlineHome /> },
  { to: "/bookings", label: "Bookings", icon: <HiOutlineCalendarDays /> },
  { to: "/cabins", label: "Cabins", icon: <HiOutlineHomeModern /> },
  { to: "/users", label: "Users", icon: <HiOutlineUsers /> },
  { to: "/settings", label: "Settings", icon: <HiOutlineCog6Tooth /> },
];

const MainNav = () => {
  return (
    <nav className="w-full">
      <ul className="flex flex-row sm:flex-col gap-2 w-full">
        {navItems.map((item) => (
          <li key={item.to} className="flex-1">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col sm:flex-row items-center sm:items-center sm:justify-start justify-center gap-1 px-4 py-3 text-sm font-medium rounded-lg transition-all w-full
                ${
                  isActive
                    ? "bg-gray-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`
              }
            >
              <span className="text-2xl text-current">{item.icon}</span>
              <span className="text-current">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
