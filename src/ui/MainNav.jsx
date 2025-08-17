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
    <nav>
      <ul className="flex flex-col gap-2">
        {navItems.map((item) => (
          <li key={item.to} className="group">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-gray-600 text-base font-medium rounded-lg transition-all
      ${isActive ? "bg-gray-100 text-gray-800" : "hover:bg-gray-50"}`
              }
            >
              <span className="text-2xl text-gray-400 transition-all group-hover:text-blue-600">
                {item.icon}
              </span>
              <span className="text-gray-600 transition-all group-hover:text-blue-600">
                {item.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
