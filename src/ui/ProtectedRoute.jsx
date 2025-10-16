import { useEffect } from "react";
import useUser from "../features/authentication/useUser";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const {isPending, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isPending && !isAuthenticated) {
      navigate("/login");
    }
  }, [isPending, isAuthenticated, navigate]);
  
  if (isPending) return <Loader />;
  return children;
};

export default ProtectedRoute;
