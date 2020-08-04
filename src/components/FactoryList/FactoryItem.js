import React from "react";

// import { Title } from "../../styles";

import FactoryItemImage from "./styles";

const BakeryItem = ({ factory }) => {
  return (
    <div>
      <FactoryItemImage src={factory.image} alt={factory.name} />
    </div>
  );
};

export default BakeryItem;
