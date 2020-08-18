import { decorate, observable } from "mobx";
// import axios from "axios";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.user = decode(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      this.user = decode(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();

export default authStore;
