import CabinsTable from "../features/cabins/CabinTable";
import { useCabins } from "../features/cabins/useCabins";
import Loader from "../ui/Loader";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import Empty from "../ui/Empty";

const Cabins = () => {
  const { isLoading, cabins, error, isError } = useCabins();

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <Empty resourceName="cabins" />
    );

  return (
    <>
      <h1 className="text-2xl font-semibold mb-8">All cabins</h1>
      <CabinTableOperations />
      <CabinsTable cabins={cabins} />
      <CreateCabinForm />
    </>
  );
};

export default Cabins;
