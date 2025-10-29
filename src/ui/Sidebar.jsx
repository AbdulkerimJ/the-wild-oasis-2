import Logo from "./Logo";
import LogoMini from "./LogoMini";
import MainNav from "./MainNav";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar for larger screens */}
      <aside className="hidden sm:flex sm:flex-col sm:gap-8 sm:w-56 sm:border-r sm:border-gray-200 sm:bg-gray-100 sm:p-8">
        <Logo />
        <MainNav />
      </aside>

      {/* Bottom navigation for mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-200 z-50">
        <MainNav />
      </div>
    </>
  );
};

export default Sidebar;
