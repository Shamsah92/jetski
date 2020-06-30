import React from "react";

import styles from "../styles";

import jetskis from "../jetskis";

import JetskiItem from "./JetskiItem";

const JetskiList = () => {
  const jetskiList = jetskis.map((jetski) => (
    <JetskiItem jetski={jetski} key={jetski.id} />
  ));

  //   const cookie = {
  //       name : "Jet Ski"
  //       price: 1500,
  //       image: "https://c2.peakpx.com/wallpaper/644/448/912/jet-ski-personal-watercraft-jet-boat-wallpaper-preview.jpg",
  //   };

  return <div style={styles.jetskiList}>{jetskiList}</div>;
};

export default JetskiList;

// {/* <div style={styles.jetskiMargin} key={jetskis.id}>
//       <img src={jetski.image} alt={jetski.name} style={styles.jetskiImage} />
//       <p style={styles.text}> {jetski.name} </p>
//       <p style={styles.text}> {jetski.price} KD</p>
//     </div> */}
