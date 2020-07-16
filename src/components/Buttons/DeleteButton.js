import React from "react";

import { DeleteButtonStyled } from "../../styles";

import jetskiStore from "../../stores/jetskiStore";

const DeleteButton = ({ deleteJetski, jetskiId }) => {
  const handleDelete = () => jetskiStore.deleteJetski(jetskiId);

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
