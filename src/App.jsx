import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import AppLayout from "./ui/AppLayout";
import { QueryClientProvider } from "@tanstack/react-query";
import ToastProvider from "./ui/ToastProvider";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="bookings/:bookingId" element={<Booking />} />
            <Route path="checkin/:bookingId" element={<Checkin />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          {/* <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>

        <ToastProvider />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
