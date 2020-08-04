import React from "react";

import { DeleteButtonStyled } from "../../styles";

import jetskiStore from "../../stores/jetskiStore";
import factoryStore from "../../stores/factoryStore";

const DeleteButton = ({ deleteJetski, jetskiId, factoryId }) => {
  const handleDelete = () => {
    if (factoryId) {
      factoryStore.deleteFactory(factoryId);
      // history.pushState("/factories");
    } else {
      jetskiStore.deleteJetski(jetskiId);
      // history.pushState("/jetskis");
    }
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
