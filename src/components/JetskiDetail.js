import React from "react";

import { DetailWrap, DeleteButtonStyled } from "../styles";

const JetskiDetail = (props) => {
  const jetski = props.jetski;

  const handleDelete = () => {
    props.deleteJetski(jetski.id);
  };
  return (
    <DetailWrap>
      <h1>{jetski.name}</h1>
      <img src={jetski.image} alt={jetski.name} />
      <p>{jetski.description}</p>
      <p>{jetski.price}</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </DetailWrap>
  );
};

export default JetskiDetail;
