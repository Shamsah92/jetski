import React, { useState } from "react";

import { Title } from "../../styles";

import FactoryItem from "./FactoryItem";

import factoryStore from "../../stores/factoryStore";

import { observer } from "mobx-react";
import SearchBar from "../SearchBar";

import AddButton from "../Buttons/AddButton";

import { Redirect } from "react-router";

import authStore from "../../stores/authStore";

const FactoryList = () => {
  const [query, setQuery] = useState("");

  // if (!authStore.user || authStore.user.role !== "admin")
  //   return <Redirect to="/" />;

  const factoryList = factoryStore.factories
    .filter((factory) =>
      factory.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((factory) => <FactoryItem factory={factory} key={factory.id} />);
  return (
    <div className="container">
      <Title>Factories</Title>
      <SearchBar setQuery={setQuery} />
      {factoryList}
      <AddButton />
    </div>
  );
};

export default observer(FactoryList);
