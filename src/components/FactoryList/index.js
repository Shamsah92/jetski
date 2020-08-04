import React, { useState } from "react";

import { Title } from "../../styles";

import FactoryItem from "./FactoryItem";

import factoryStore from "../../stores/factoryStore";

import { observer } from "mobx-react";
import SearchBar from "../SearchBar";

import AddButton from "../Buttons/AddButton";

const FactoryList = () => {
  const [query, setQuery] = useState("");

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
