import { makeAutoObservable } from "mobx";
import RouteStore from "./RouteStore";
import DataStore from "./DataStore";
import AudioStore from "./AudioStore";

class RootStore {
  constructor() {
    makeAutoObservable(this);
    this.route = new RouteStore(this);
    this.data = new DataStore(this);
    this.audio = new AudioStore(this);
  }
}
const store = new RootStore();
export default store;