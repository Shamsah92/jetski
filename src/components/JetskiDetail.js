import React from "react";

import { DetailWrap } from "../styles";
import { Link, Redirect, useParams } from "react-router-dom";
import DeleteButton from "./Buttons/DeleteButton";

const JetskiDetail = ({ jetskis, deleteJetski }) => {
  const { jetskiId } = useParams();
  // console.log("JetskiDetail -> jetskiId", jetskiId);

  const jetski = jetskis.find((jetski) => jetski.id === +jetskiId);

  // const handleDelete = () => {
  //   props.deleteJetski(jetski.id);
  // };

  if (!jetski) return <Redirect to="/jetskis" />;

  return (
    <DetailWrap>
      <Link to="/jetskis">
        <p>Back to jetskis</p>

        <h1>{jetski.name}</h1>
        <img src={jetski.image} alt={jetski.name} />
        <p>{jetski.description}</p>
        <p>{jetski.price}</p>
        {/* <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled> */}

        <DeleteButton jetskiId={jetski.id} deleteJetski={deleteJetski} />
      </Link>
    </DetailWrap>
  );
};

export default JetskiDetail;
