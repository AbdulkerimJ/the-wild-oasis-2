import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="sm:flex bg-blue-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 select-none min-h-screen min-w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        <main className="flex-1 px-4 sm:px-6 md:px-8 py-6 pb-20 sm:pb-0 bg-white dark:bg-gray-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
