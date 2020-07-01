import React, { useState } from "react";

import JetskiList from "./components/JetskiList";

//import jetskis from "./jetskis";

// import styles from "./styles";
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

// {
//   mainColor: "yellow",
//   backgroundColor: "#f3b380",
//   blue: "blue",
// };

function App() {
  const [backTheme, setBackTheme] = useState("light");

  const handleTheme = () =>
    setBackTheme(backTheme === "light" ? "dark" : "light");

  const buttonText = backTheme === "light" ? "Darke Mode" : "Light Mode";

  return (
    // <ThemeProvider theme={backTheme === "light" ? theme.light : theme.dark}>
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

      <JetskiList />
    </ThemeProvider>
  );
}

export default App;
