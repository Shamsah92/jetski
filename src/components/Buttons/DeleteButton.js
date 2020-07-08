import React from "react";

import { DeleteButtonStyled } from "../../styles";

import { useHistory } from "react-router-dom";

const DeleteButton = (props) => {
  const history = useHistory();

  const handleDelete = () => {
    props.deleteJetski(props.jetskiId);
    history.push("/jetskis");
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
