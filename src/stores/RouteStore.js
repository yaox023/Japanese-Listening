import { makeAutoObservable } from "mobx";
import { PAGE } from "../constants";

export default class RouteStore {
  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  currentPage = PAGE.CARD;

  /**
   * CARD => ITEM => AUDIO
   */
  handleDown() {
    if (this.currentPage === PAGE.CARD) {
      this.currentPage = PAGE.ITEM;
      return;
    }
    if (this.currentPage === PAGE.ITEM) {
      this.currentPage = PAGE.AUDIO;
      return;
    }
  }

  /**
   * AUDIO => ITEM => CARD
   */
  handleUp() {
    if (this.currentPage === PAGE.ITEM) {
      this.currentPage = PAGE.CARD;
      return;
    }
    if (this.currentPage === PAGE.AUDIO) {
      this.currentPage = PAGE.ITEM;
      return;
    }
  }
}