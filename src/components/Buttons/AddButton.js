import React, { useState } from "react";

import JetskiModal from "../modals/JetskiModal";

import { BsPlusCircle } from "react-icons/bs";
import FactoryModal from "../modals/FactoryModal";

const AddButton = ({ factory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <BsPlusCircle className="float-left" size="10em" onClick={openModal} />

      {factory ? (
        <JetskiModal
          factory={factory}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      ) : (
        <FactoryModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AddButton;
