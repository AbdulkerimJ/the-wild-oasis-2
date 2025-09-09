import CabinsTable from "../features/cabins/CabinTable";
import {useCabins} from "../features/cabins/useCabins";
import Loader from "../ui/Loader";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

const Cabins = () => {
 const {isLoading, cabins} = useCabins();
  
  return (
    <>
      <h1 className="text-2xl font-semibold mb-8">All cabins</h1>
      {isLoading ? <Loader /> : <CabinsTable cabins={cabins} />}
      {<CreateCabinForm />}
    </>
  );
};

export default Cabins;
