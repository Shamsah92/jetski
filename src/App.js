import React, { useState } from "react";

// import { Route, Switch } from "react-router";

// import JetskiDetail from "./components/JetskiDetail";

// import JetskiList from "./components/JetskiList";

import { ThemeProvider } from "styled-components";

// import Home from "./components/Home";

import NavBar from "./components/NavBar";

import { GlobalStyle } from "./styles";
// import factoryStore from "./stores/factoryStore";
// import FactoryList from "./components/FactoryList";

// import FactoryDetail from "./components/FactoryDetail";

// import jetskiStore from "./stores/jetskiStore";

import { observer } from "mobx-react";

import Routes from "./components/Routes";

import factoryStore from "./stores/factoryStore";

import jetskiStore from "./stores/jetskiStore";

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

  const handleTheme = () =>
    setBackTheme(backTheme === "light" ? "dark" : "light");

  const buttonText = backTheme === "light" ? "Darke Mode" : "Light Mode";

  return (
    <ThemeProvider theme={theme[backTheme]}>
      <GlobalStyle />

      <NavBar handleTheme={handleTheme} buttonText={buttonText} />

      {factoryStore.loading || jetskiStore.loading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
