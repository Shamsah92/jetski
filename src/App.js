import React, { useState } from "react";

import JetskiDetail from "./components/JetskiDetail";
import JetskiList from "./components/JetskiList";

import jetskis from "./jetskis";
import { ThemeProvider } from "styled-components";

import {
  Description,
  Title,
  JetImage,
  GlobalStyle,
  ThemeButton,
} from "./styles";

const theme = {
  dark: {
    mainColor: "yellow",
    backgroundColor: "#f3b380",
    blue: "blue",
    red: "red",
  },
  light: {
    mainColor: "#f3b380",
    backgroundColor: "yellow",
    blue: "blue",
    red: "red",
  },
};

function App() {
  const [backTheme, setBackTheme] = useState("light");

  const [jetski, setJetski] = useState(null);

  const [_jetskis, setJetskis] = useState(jetskis);

  const deleteJetski = (jetskiId) => {
    const updateJestskis = _jetskis.filter((jetski) => jetski.id !== jetskiId);
    setJetskis(updateJestskis);
    setJetski(null);
  };

  const handleVisible = (jetskiId) => {
    const chosenJetski = jetskis.find((jetski) => jetski.id === jetskiId);
    setJetski(chosenJetski);
  };

  const handleTheme = () =>
    setBackTheme(backTheme === "light" ? "dark" : "light");

  const buttonText = backTheme === "light" ? "Darke Mode" : "Light Mode";

  const setView = () =>
    jetski ? (
      <JetskiDetail jetski={jetski} deleteJetski={deleteJetski} />
    ) : (
      <JetskiList
        jetskis={_jetskis}
        deleteJetski={deleteJetski}
        handleVisible={handleVisible}
      />
    );

  return (
    <ThemeProvider theme={theme[backTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={handleTheme}>{buttonText}</ThemeButton>

      <div>
        <Title> Jet Ski</Title>
        <Description>Top of the line Jet Ski</Description>
        <JetImage
          src="https://i.pinimg.com/474x/85/f9/59/85f959846423744530c10374699535b1--jet-ski-wallpaper-desktop.jpg"
          alt="jet store"
        />
      </div>

      {setView()}
    </ThemeProvider>
  );
}

export default App;
