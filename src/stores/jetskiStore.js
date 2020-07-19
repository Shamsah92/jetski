import { decorate, observable } from "mobx";

import jetskis from "../jetskis";

import slugify from "react-slugify";

import axios from "axios";

class JetskiStore {
  jetskis = jetskis;

  fetchJetskis = async () => {
    try {
      const response = await axios.get("http://localhost:8000/jetskis");
      this.jetskis = response.data;
    } catch (error) {
      console.error("JetskiStore -> fetchJetskis -> error", error);
    }
  };

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
}
decorate(JetskiStore, {
  jetskis: observable,
});

const jetskiStore = new JetskiStore();
jetskiStore.fetchJetskis();

export default jetskiStore;
