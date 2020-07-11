import React from "react";

import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return <SearchBarStyled onChange={(event) => setQuery(event.target.value)} />;
};

export default SearchBar;
