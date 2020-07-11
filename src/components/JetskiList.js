import React, { useState } from "react";

import JetskiItem from "./JetskiItem";

import { ListWrap } from "../styles";

import SearchBar from "./SearchBar";

const JetskiList = (props) => {
  const [query, setQuery] = useState("");

  const jetskiList = props.jetskis
    .filter((jetski) => jetski.name.toLowerCase().includes(query.toLowerCase()))
    .map((jetski) => (
      <JetskiItem
        jetski={jetski}
        deleteJetski={props.deleteJetski}
        handleVisible={props.handleVisible}
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
