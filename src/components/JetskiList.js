import React, { useState } from "react";

import JetskiItem from "./JetskiItem";

import { ListWrap } from "../styles";

import SearchBar from "./SearchBar";

const JetskiList = ({ jetskis, deleteJetski, handleVisible }) => {
  const [query, setQuery] = useState("");

  const jetskiList = jetskis
    .filter((jetski) => jetski.name.toLowerCase().includes(query.toLowerCase()))
    .map((jetski) => (
      <JetskiItem
        jetski={jetski}
        deleteJetski={deleteJetski}
        handleVisible={handleVisible}
        key={jetski.id}
      />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrap className="row">
        {/* <SearchBar setQuery={setQuery} /> */}
        {jetskiList}
      </ListWrap>
    </div>
  );
};

export default JetskiList;
