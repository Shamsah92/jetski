import React from "react";

import { DetailWrap, DeleteButtonStyled } from "../styles";
import { Link, useParams } from "react-router-dom";

const JetskiDetail = (props) => {
  const jetskiId = useParams().jetskiId;
  // console.log("JetskiDetail -> jetskiId", jetskiId);

  const jetski = props.jetskis.find((jetski) => jetski.id === +jetskiId);

  const handleDelete = () => {
    props.deleteJetski(jetski.id);
  };
  return (
    <DetailWrap>
      <Link>
        <h1>{jetski.name}</h1>
        <img src={jetski.image} alt={jetski.name} />
        <p>{jetski.description}</p>
        <p>{jetski.price}</p>
        <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
      </Link>
    </DetailWrap>
  );
};

export default JetskiDetail;
