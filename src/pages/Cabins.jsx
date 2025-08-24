import { useState, useEffect } from "react";
import CabinsTable from "../features/cabins/CabinTable";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../services/apiCabins";
import Loader from "../ui/Loader";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

const Cabins = () => {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  
  return (
    <>
      <h1 className="text-2xl font-semibold mb-8">All cabins</h1>
      {isLoading ? <Loader /> : <CabinsTable cabins={cabins} />}
      {<CreateCabinForm />}
    </>
  );
};

export default Cabins;
