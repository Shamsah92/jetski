import { decorate, observable } from "mobx";

import jetskis from "../jetskis";

import slugify from "react-slugify";

class JetskiStore {
  jetskis = jetskis;

  createJetski = (newJetski) => {
    newJetski.id = this.jetskis[this.jetskis.length - 1].id + 1;
    newJetski.slug = slugify(newJetski.name);
    this.jetskis.push(newJetski);
  };

  updateJetski = (updatedJetski) => {
    console.log("JetskiStore -> updateJetski -> updatedJetski", updatedJetski);
    const jetski = this.jetskis.find(
      (jetski) => jetski.id === updatedJetski.id
    );

    jetski.name = updatedJetski.name;
    jetski.price = updatedJetski.price;
    jetski.image = updatedJetski.image;
    jetski.description = updatedJetski.description;

    for (const key in jetski) jetski[key] = updatedJetski[key];

    console.log("JetskiStore -> updateJetski -> this.jetskis", this.jetskis);
  };

  deleteJetski = (jetskiId) => {
    this.jetskis = this.jetskis.filter((jetski) => jetski.id !== jetskiId);
  };
  // };
}
decorate(JetskiStore, {
  jetskis: observable,
});

const jetskiStore = new JetskiStore();

export default jetskiStore;
