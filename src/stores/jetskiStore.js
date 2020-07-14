import { decorate, observable } from "mobx";

import jetskis from "../jetskis";

class JetskiStore {
  jetskis = jetskis;
}

decorate(JetskiStore, {
  jetskis: observable,
});

const jetskiStore = new JetskiStore();

export default jetskiStore;
