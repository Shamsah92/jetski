import React from "react";

import { JetsWrap } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";

import { Link } from "react-router-dom";

const JetskiItem = (props) => {
  const jetski = props.jetski;

  return (
    <JetsWrap>
      <Link to={`/jetskis/${jetski.id}`}>
        <img
          src={jetski.image}
          alt={jetski.name}
          // onClick={() => props.handleVisible(jetski.id)}
        />
      </Link>
      <p> {jetski.name} </p>
      <p className="jet-a"> {jetski.price} KD</p>

      <DeleteButton jetskiId={jetski.id} deleteJetski={props.deleteJetski} />
    </JetsWrap>
  );
};

export default JetskiItem;
