import { decorate, observable } from "mobx";

import axios from "axios";

class JetskiStore {
  jetskis = [];

  fetchJetskis = async () => {
    try {
      const response = await axios.get("http://localhost:8000/jetskis");
      this.jetskis = response.data;
      console.log("JetskiTore -> fetchJetskis -> res", response);
    } catch (error) {
      console.error("JetskiStore -> fetchJetskis -> error", error);
    }
  };

  deleteJetski = async (jetskiId) => {
    console.log(jetskiId);
    try {
      await axios.delete(`http://localhost:8000/jetskis/${jetskiId}`);
      this.jetskis = this.jetskis.filter((jetski) => jetski.id !== jetskiId);
    } catch (error) {
      console.log("JetskiStore -> deleteJetski -> error", error);
    }
  };

  createJetski = async (newJetski) => {
    try {
      const res = await axios.post("http://localhost:8000/jetskis", newJetski);
      this.jetskis.push(res.data);
    } catch (error) {
      console.log("JetskiStore -> createJetski -> error", error);
    }
  };

  updateJetski = async (updatedJetski) => {
    try {
      await axios.put(
        `http://localhost:8000/jetskis/${updatedJetski.id}`,
        updatedJetski
      );
      const jetski = this.jetskis.find(
        (jetski) => jetski.id === updatedJetski.id
      );
      for (const key in jetski) jetski[key] = updatedJetski[key];
    } catch (error) {
      console.log("updateJetski", error);
    }
  };
}
decorate(JetskiStore, {
  jetskis: observable,
});

const jetskiStore = new JetskiStore();
jetskiStore.fetchJetskis();

export default jetskiStore;
