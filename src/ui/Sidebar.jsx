import Uploader from "../data/Uploader";
import Logo from "./Logo";
import MainNav from "./MainNav";

const Sidebar = () => {
  return (
    <aside
      className="
        bg-gray-100 p-2 sm:p-8 border-r border-gray-200 
        flex flex-col gap-8 
        w-full sm:w-64 
        fixed bottom-0 sm:static z-10
      "
    >
      <Logo />
      <MainNav />
    </aside>
  );
};

export default Sidebar;
