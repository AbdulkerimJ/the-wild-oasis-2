
import { Navigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import Loader from "./Loader";
const ProtectedRoute = ({ children }) => {
  const { isLoading, isAuthenticated } = useUser();

  if (isLoading) return <Loader />;
  if(!isAuthenticated) return <Navigate to = "/login" replace />
  return children;
};

export default ProtectedRoute;
