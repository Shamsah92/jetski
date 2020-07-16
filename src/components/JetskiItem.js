import React from "react";

import { JetsWrap } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";

import { Link } from "react-router-dom";
import UpdateButton from "./Buttons/UpdateButton";

import { observer } from "mobx-react";

const JetskiItem = ({ jetski }) => {
  return (
    <JetsWrap>
      <Link to={`/jetskis/${jetski.id}`}>
        <img src={jetski.image} alt={jetski.name} />
      </Link>
      <p> {jetski.name} </p>
      <p className="jet-a"> {jetski.price} KD</p>
      <UpdateButton jetski={jetski} />
      <DeleteButton jetskiId={jetski.id} />
    </JetsWrap>
  );
};

export default observer(JetskiItem);
