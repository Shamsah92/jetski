import React, { useState } from "react";

import JetskiItem from "./JetskiItem";

import { ListWrap } from "../styles";

import SearchBar from "./SearchBar";

// import { BsPlusCircle } from "react-icons/bs";

// import JetskiModal from "./modals/JetskiModal";
import AddButton from "./Buttons/AddButton";

import jetskiStore from "../stores/jetskiStore";

import { observer } from "mobx-react";

const JetskiList = ({ createJetski }) => {
  const [query, setQuery] = useState("");

  const jetskiList = jetskiStore.jetskis
    .filter((jetski) => jetski.name.toLowerCase().includes(query.toLowerCase()))
    .map((jetski) => (
      <JetskiItem
        jetski={jetski}
        // handleVisible={handleVisible}
        key={jetski.id}
      />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrap className="row">{jetskiList}</ListWrap>

      <AddButton createJetski={createJetski} />
    </div>
  );
};

export default observer(JetskiList);
