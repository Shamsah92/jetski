import React, { useState } from "react";

import { UpdateButtonStyled } from "../../styles";

import JetskiModal from "../modals/JetskiModal";

const UpdateButton = ({ jetski }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <JetskiModal isOpen={isOpen} closeModal={closeModal} oldJetski={jetski} />
    </>
  );
};

export default UpdateButton;
