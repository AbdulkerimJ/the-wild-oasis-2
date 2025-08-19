import { useState, useEffect } from "react";
import CabinsTable from "../features/cabins/CabinTable";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../services/apiCabins";
import Loader from "../ui/Loader";

const Cabins = () => {
  const {
    data: cabins,
    isLoading,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-8">All cabins</h1>
      {isLoading ? <Loader /> : <CabinsTable cabins={cabins} />}
    </div>
  );
};

export default Cabins;
