import React from "react";

import { DetailWrap } from "../../styles";

import JetskiList from "../JetskiList";

import UpdateButton from "../Buttons/UpdateButton";

import factoryStore from "../../stores/factoryStore";

import AddButton from "../Buttons/AddButton";

import { observer } from "mobx-react";

import { Redirect, useParams } from "react-router-dom";
import DeleteButton from "../Buttons/DeleteButton";

import jetskiStore from "../../stores/jetskiStore";

const FactoryDetail = () => {
  const { factorySlug } = useParams();
  const factory = factoryStore.factories.find(
    (_factory) => _factory.slug === factorySlug
  );

  if (!factory) return <Redirect to="/factories" />;

  const jetskis = factory.jetskis
    .map((jetski) => jetskiStore.getJetskiById(jetski.id))
    .filter((jetski) => jetski);

  return (
    <div className="row">
      <div className="container">
        <DetailWrap className="col-12">
          <h4>{factory.name}</h4>
          <img src={factory.image} alt={factory.name} />
          <UpdateButton factory={factory} />
          <DeleteButton factoryId={factory.id} />
        </DetailWrap>
      </div>
      <div className="col-12">
        <JetskiList jetskis={jetskis} />
        <AddButton factory={factory} />
      </div>
    </div>
  );
};

export default observer(FactoryDetail);
