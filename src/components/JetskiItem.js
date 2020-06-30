import React from "react";

import styles from "../styles";

const JetskiItem = (props) => {
  return (
    <div style={styles.jetskiMargin}>
      <img
        src={props.jetski.image}
        alt={props.jetski.name}
        style={styles.jetskiImage}
      />
      <p style={styles.text}> {props.jetski.name} </p>
      <p style={styles.text}> {props.jetski.price} KD</p>
    </div>
  );
};

export default JetskiItem;

// key={jetskis.id}>
