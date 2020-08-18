import React from "react";

// import { Title } from "../../styles";

import { FactoryItemImage } from "./styles";
import { Link } from "react-router-dom";

const FactoryItem = ({ factory }) => {
  // url to factory detail
  console.log(factory.slug);
  return (
    <div>
      <Link to={`factories/${factory.slug}`}>
        <FactoryItemImage src={factory.image} alt={factory.name} />
      </Link>
    </div>
  );
};

export default FactoryItem;
