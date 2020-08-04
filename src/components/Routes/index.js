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
      <Route path="/factories/:factorySlug">
        <FactoryDetail />
      </Route>
      <Route path="/factories">
        <FactoryList />
      </Route>

      <Route path="/jetskis/:jetskiId">
        <JetskiDetail />
      </Route>

      <Route path="/jetskis">
        <JetskiList jetskis={jetskiStore.jetskis} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
