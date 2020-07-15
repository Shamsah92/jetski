import React from "react";

import { DeleteButtonStyled } from "../../styles";

import jetskiStore from "../../stores/jetskiStore";

// import { useHistory } from "react-router-dom";

const DeleteButton = ({ deleteJetski, jetskiId }) => {
  // const history = useHistory();

  // const DeleteButton = ({ jetskiId, deleteJetski }) => {
  // deleteJetski(jetskiId);
  // history.push("/jetskis");
  const handleDelete = () => jetskiStore.deleteJetski(jetskiId);

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
