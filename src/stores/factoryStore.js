import { decorate, observable } from "mobx";

import axios from "axios";

class FactoryStore {
  factories = [];
  loading = true;

  fetchFactories = async () => {
    try {
      const response = await axios.get("http://localhost:8000/factories");
      this.factories = response.data;
      this.loading = false;
      console.log("JetskiTore -> fetchJetskis -> res", response);
    } catch (error) {
      console.error("FactoryStore -> fetchFactories -> error", error);
    }
  };

  deleteFactory = async (factoryId) => {
    console.log(factoryId);
    try {
      await axios.delete(`http://localhost:8000/jetskis/${factoryId}`);
      this.factories = this.factories.filter(
        (factory) => factory.id !== factoryId
      );
    } catch (error) {
      console.log("FactoryStore -> deleteFactory -> error", error);
    }
  };

  createFactory = async (newFactory) => {
    try {
      const formData = new FormData();
      for (const key in newFactory) formData.append(key, newFactory[key]);
      const res = await axios.post("http://localhost:8000/factories", formData);
      this.factories.push(res.data);
    } catch (error) {
      console.log("FactoryStore -> createFactory -> error", error);
    }
  };

  updateFactory = async (updatedFactory) => {
    try {
      const formData = new FormData();
      for (const key in updatedFactory)
        formData.append(key, updatedFactory[key]);
      await axios.put(
        `http://localhost:8000/factories/${updatedFactory.id}`,
        formData
      );
      const factory = this.factories.find(
        (factory) => factory.id === updatedFactory.id
      );
      for (const key in updatedFactory) factory[key] = updatedFactory[key];
    } catch (error) {
      console.log("updateFactory", error);
    }
  };
}
decorate(FactoryStore, {
  factories: observable,
  loading: observable,
});

const factoryStore = new FactoryStore();
factoryStore.fetchFactories();

export default factoryStore;
