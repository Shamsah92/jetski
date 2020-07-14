import React, { useState } from "react";

import { Route, Switch } from "react-router";

import JetskiDetail from "./components/JetskiDetail";
import JetskiList from "./components/JetskiList";

import jetskis from "./jetskis";
import { ThemeProvider } from "styled-components";

import Home from "./components/Home";

import NavBar from "./components/NavBar";

// import { Link } from "react-router-dom";

// import logo from "./logo.png";

import {
  // Description,
  // Title,
  // JetImage,
  GlobalStyle,
  // ThemeButton,
  // Logo,
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

  const [setJetski] = useState(null);

  const [_jetskis, setJetskis] = useState(jetskis);

  const deleteJetski = (jetskiId) => {
    const updateJestskis = _jetskis.filter((jetski) => jetski.id !== jetskiId);
    setJetskis(updateJestskis);
  };

  const handleVisible = (jetskiId) => {
    const chosenJetski = jetskis.find((jetski) => jetski.id === jetskiId);
    setJetski(chosenJetski);
  };

  const handleTheme = () =>
    setBackTheme(backTheme === "light" ? "dark" : "light");

  const buttonText = backTheme === "light" ? "Darke Mode" : "Light Mode";

  const createJetski = (newJetski) => {
    // const updatedJetskis = _jetskis;
    // updatedJetskis.push(newJetski);
    // setJetskis(updatedJetskis);

    const updatedJetskis = [..._jetskis, newJetski];
    setJetskis(updatedJetskis);
  };
  // const setView = () =>
  //   jetski ? (
  //     <JetskiDetail jetski={jetski} />
  //   ) : (
  //     <JetskiList
  //       jetskis={_jetskis}
  //       deleteJetski={deleteJetski}
  //       handleVisible={handleVisible}
  //     />
  //   );

  return (
    <ThemeProvider theme={theme[backTheme]}>
      <GlobalStyle />

      <NavBar handleTheme={handleTheme} buttonText={buttonText} />
      {/* <Logo to="/">
        <img src={logo} width="70" />
      </Logo>

      <Link to="/jetskis" style={{ margin: 20, float: "right" }}>
        {" "}
        jetskis
      </Link>

      <ThemeButton onClick={handleTheme}>{buttonText}</ThemeButton> */}

      <Switch>
        <Route path="/jetskis/:jetskiId">
          <JetskiDetail jetskis={_jetskis} deleteJetski={deleteJetski} />
        </Route>

        <Route path="/jetskis">
          <JetskiList
            jetskis={_jetskis}
            deleteJetski={deleteJetski}
            handleVisible={handleVisible}
            createJetski={createJetski}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      {/* {setView()} */}
    </ThemeProvider>
  );
}

export default App;
