import React from "react";

import { Route, Switch } from "react-router";

import FactoryList from "../FactoryList";

import FactoryDetail from "../FactoryDetail";

import Home from "../Home";

import JetskiDetail from "../JetskiDetail";

import JetskiList from "../JetskiList";

import jetskiStore from "../../stores/jetskiStore";

import { observer } from "mobx-react";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/factories/:factorySlug">
        <FactoryDetail />
      </Route>
      <Route exact path="/factories">
        <FactoryList />
      </Route>

      <Route exact path="/jetskis/:jetskiId">
        <JetskiDetail />
      </Route>

      <Route exact path="/jetskis">
        <JetskiList jetskis={jetskiStore.jetskis} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
