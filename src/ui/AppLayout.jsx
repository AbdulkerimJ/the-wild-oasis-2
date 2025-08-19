import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "./Loader";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100">
        <Header />
        <main className="relative flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
