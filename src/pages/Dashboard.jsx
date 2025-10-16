import { useNavigate } from "react-router-dom";
import Loader from "../ui/Loader";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="relative items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="mt-4 flex items-center gap-3">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          onClick={() => navigate("/login")}
        >
          Back to log in
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
