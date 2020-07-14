import React, { useState } from "react";

import JetskiModal from "../modals/JetskiModal";

import { BsPlusCircle } from "react-icons/bs";

const AddButton = ({ createJetski }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <BsPlusCircle className="float-left" size="10em" onClick={openModal} />
      <JetskiModal
        isOpen={isOpen}
        closeModal={closeModal}
        createJetski={createJetski}
      />
    </div>
  );
};

export default AddButton;
