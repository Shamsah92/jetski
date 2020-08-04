import React, { useState } from "react";

import { UpdateButtonStyled } from "../../styles";

import JetskiModal from "../modals/JetskiModal";

import FactoryModal from "../modals/FactoryModal";

const UpdateButton = ({ factory, jetski }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      {factory ? (
        <FactoryModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldFactory={factory}
        />
      ) : (
        <JetskiModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldJetski={jetski}
        />
      )}
    </>
  );
};

export default UpdateButton;
