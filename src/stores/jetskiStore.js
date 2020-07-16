import { decorate, observable } from "mobx";

import jetskis from "../jetskis";

import slugify from "react-slugify";

class JetskiStore {
  jetskis = jetskis;

  createJetski = (newJetski) => {
    // const updatedJetskis = _jetskis;
    // updatedJetskis.push(newJetski);
    // setJetskis(updatedJetskis);
    newJetski.id = this.jetskis[this.jetskis.length - 1].id + 1;
    newJetski.slug = slugify(newJetski.name);
    this.jetskis.push(newJetski);

    // const updatedJetskis = [..._jetskis, newJetski];
    // setJetskis(updatedJetskis);
  };

  updateJetski = (updatedJetski) => {
    console.log("JetskiStore -> updateJetski -> updatedJetski", updatedJetski);
    const jetski = this.jetskis.find(
      (jetski) => jetski.id === updatedJetski.id
    );

    // jetski.name = updatedJetski.name;
    // jetski.price = updatedJetski.price;
    // jetski.image = updatedJetski.image;
    // jetski.description = updatedJetski.description;

    for (const key in jetski) jetski[key] = updatedJetski[key];

    console.log("JetskiStore -> updateJetski -> this.jetskis", this.jetskis);
  };

  deleteJetski = (jetskiId) => {
    this.jestskis = jetskis.filter((jetski) => jetski.id !== jetskiId);
    console.log("JetskiStore -> deleteJetski -> this.jetskis", this.jetskis);
    // setJetskis(updateJestskis);
  };
  // };
}
decorate(JetskiStore, {
  jetskis: observable,
});

const jetskiStore = new JetskiStore();

export default jetskiStore;
