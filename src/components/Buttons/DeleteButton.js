import React from "react";

import { DeleteButtonStyled } from "../../styles";

// import { useHistory } from "react-router-dom";

const DeleteButton = ({ deleteJetski, jetskiId }) => {
  // const history = useHistory();

  const handleDelete = () => {
    deleteJetski(jetskiId);
    // history.push("/jetskis");
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
