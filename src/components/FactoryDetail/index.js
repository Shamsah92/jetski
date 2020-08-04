import React from "react";

import { DetailWrap } from "../../styles";

import JetskiList from "../JetskiList";

import UpdateButton from "../Buttons/UpdateButton";

import factoryStore from "../../stores/factoryStore";

import AddButton from "../Buttons/AddButton";

import { observer } from "mobx-react";

import { Redirect, useParams } from "react-router-dom";
import DeleteButton from "../Buttons/DeleteButton";

const FactoryDetail = ({ jetskis }) => {
  const { factorySlug } = useParams();
  const factory = factoryStore.factories.find(
    (_factory) => _factory.slug === factorySlug
  );

  if (!factory) return <Redirect to="/factories" />;

  return (
    <div className="row">
      <div className="container">
        <DetailWrap className="col-12">
          <h4>{factory.name}</h4>
          <img src={factory.image} alt={factory.name} />
          <UpdateButton factory={factory} />
        </DetailWrap>
      </div>
      <div className="col-12">
        <JetskiList jetskis={factory.jetskis} />
        <AddButton factoryId={factory.id} />
        <DeleteButton factoryId={factory.id} />
      </div>
    </div>
  );
};

export default observer(FactoryDetail);
