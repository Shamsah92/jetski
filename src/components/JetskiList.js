import React, { useState } from "react";

import JetskiItem from "./JetskiItem";

import { ListWrap } from "../styles";

import SearchBar from "./SearchBar";

import { Redirect } from "react-router";

import authStore from "../stores/authStore";

// import AddButton from "./Buttons/AddButton";

// import jetskiStore from "../stores/jetskiStore";

import { observer } from "mobx-react";

const JetskiList = ({ jetskis = [] }) => {
  const [query, setQuery] = useState("");

  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to="/" />;

  const jetskiList = jetskis
    .filter((jetski) => jetski.name.toLowerCase().includes(query.toLowerCase()))
    .map((jetski) => <JetskiItem jetski={jetski} key={jetski.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrap className="row">{jetskiList}</ListWrap>

      {/* <AddButton createJetski={createJetski} /> */}
    </div>
  );
};

export default observer(JetskiList);
