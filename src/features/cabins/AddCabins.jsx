import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";

const AddCabins = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="mt-6">
      <Button onClick={() => setIsOpenModal(true)} className="mb-6">
        Add New Cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <h2 className="text-2xl font-semibold mb-6">Add New Cabin</h2>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default AddCabins;