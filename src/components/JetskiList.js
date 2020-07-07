import React, { useState } from "react";

import JetskiItem from "./JetskiItem";

import { ListWrap } from "../styles";

import SearchBar from "./SearchBar";

const JetskiList = (props) => {
  const [query, setQuery] = useState("");

  const jetskiList = props.jetskis
    .filter((jetski) => jetski.name.includes(query))
    .map((jetski) => (
      <JetskiItem
        jetski={jetski}
        deleteJetski={props.deleteJetski}
        handleVisible={props.handleVisible}
        key={jetski.id}
      />
    ));

  return (
    <>
      <ListWrap>
        <SearchBar setQuery={setQuery} />
        {jetskiList}
      </ListWrap>
    </>
  );
};

export default JetskiList;
