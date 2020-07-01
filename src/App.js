import React from "react";

import JetskiList from "./components/JetskiList";

//import jetskis from "./jetskis";

import styles from "./styles";

import { Description, Title, jetImage } from "./styles";

// import styled from "styled-components";

// const Title = styled.h1`
//   text-align: center;
//   color: blue;
// `;

// const Description = styled.h3`
//   text-align: center;
//   color: grey;
// `;

// const jetImage = styled.img`
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
// `;

function App() {
  return (
    <div>
      <div>
        <Title> Jet Ski</Title>
        <Description>Top of the line Jet Ski</Description>
        <jetImage
          src="https://i.pinimg.com/474x/85/f9/59/85f959846423744530c10374699535b1--jet-ski-wallpaper-desktop.jpg"
          alt="jet store"
          style={styles.jetImage}
        />
        {/* <img
          src="https://i.pinimg.com/474x/85/f9/59/85f959846423744530c10374699535b1--jet-ski-wallpaper-desktop.jpg"
          alt="jet store"
          style={styles.jetImage}
        /> */}
      </div>

      <div style={styles.jetskiList}>
        <JetskiList />
      </div>
    </div>
  );
}

export default App;
