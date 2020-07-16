import React, { useState } from "react";

import { Route, Switch } from "react-router";

import JetskiDetail from "./components/JetskiDetail";

import JetskiList from "./components/JetskiList";

import jetskis from "./jetskis";

import { ThemeProvider } from "styled-components";

import Home from "./components/Home";

import NavBar from "./components/NavBar";

import slugify from "react-slugify";

import { GlobalStyle } from "./styles";

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

  const handleVisible = (jetskiId) => {
    const chosenJetski = jetskis.find((jetski) => jetski.id === jetskiId);
    setJetski(chosenJetski);
  };

  const handleTheme = () =>
    setBackTheme(backTheme === "light" ? "dark" : "light");

  const buttonText = backTheme === "light" ? "Darke Mode" : "Light Mode";

  const createJetski = (newJetski) => {
    newJetski.id = _jetskis[_jetskis.length - 1].id + 1;
    newJetski.slug = slugify(newJetski.name);

    const updatedJetskis = [..._jetskis, newJetski];
    setJetskis(updatedJetskis);
  };

  return (
    <ThemeProvider theme={theme[backTheme]}>
      <GlobalStyle />

      <NavBar handleTheme={handleTheme} buttonText={buttonText} />

      <Switch>
        <Route path="/jetskis/:jetskiId">
          <JetskiDetail jetskis={_jetskis} />
        </Route>

        <Route path="/jetskis">
          <JetskiList
            jetskis={_jetskis}
            handleVisible={handleVisible}
            createJetski={createJetski}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
