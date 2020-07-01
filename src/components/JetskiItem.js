import React from "react";

// import styles from "../styles";

import { JetsWrap, DeleteButtonStyled } from "../styles";

const JetskiItem = (props) => {
  const jetski = props.jetski;

  const handleDelete = () => {
    // alert(`Delete jetski #${jetski.id}`);
    props.deleteJetski(jetski.id);
  };
  return (
    <JetsWrap>
      <img
        src={jetski.image}
        alt={jetski.name}
        // style={styles.jetskiImage}
      />
      <p> {jetski.name} </p>
      <p className="jet-a"> {jetski.price} KD</p>

      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </JetsWrap>
  );
};

export default JetskiItem;

// key={jetskis.id}>
