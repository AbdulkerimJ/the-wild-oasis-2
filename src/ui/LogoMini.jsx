import { Link } from "react-router-dom";

function LogoMini() {
  return (
    <div className="block sm:hidden">
      <Link to="/dashboard">
        <img
          src="/logo-light.png"
          alt="Mini Logo"
          className="h-10 w-auto cursor-pointer transition-transform duration-200 hover:scale-105"
        />
      </Link>
    </div>
  );
}

export default LogoMini;
