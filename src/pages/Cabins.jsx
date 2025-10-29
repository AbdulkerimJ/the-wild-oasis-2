import CabinsTable from "../features/cabins/CabinTable";
import { useCabins } from "../features/cabins/useCabins";
import Loader from "../ui/Loader";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import Empty from "../ui/Empty";
import Modal from "../ui/Modal";
import AddCabins from "../features/cabins/AddCabins";

const Cabins = () => {
  const { isLoading, cabins, isError } = useCabins();

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <Empty resourceName="cabins" />
    );

  return (
    <>
      <h1 className="text-2xl font-semibold">All cabins</h1>
      <CabinTableOperations />
        <CabinsTable cabins={cabins} />
      <AddCabins />
   
    </>
  );
};

export default Cabins;
