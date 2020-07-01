import React from "react";

// import styles from "../styles";

import { JetsWrap } from "../styles";

const JetskiItem = (props) => {
  return (
    <JetsWrap>
      <img
        src={props.jetski.image}
        alt={props.jetski.name}
        // style={styles.jetskiImage}
      />
      <p> {props.jetski.name} </p>
      <p className="jet-a"> {props.jetski.price} KD</p>
    </JetsWrap>
  );
};

export default JetskiItem;

// key={jetskis.id}>
