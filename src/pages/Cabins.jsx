import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => {
      console.log("Cabins data:", data);
    });
  }, []);
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800">All cabins</h1>
      <p className="text-gray-600">TEST</p>
    </div>
  );
}

export default Cabins;
