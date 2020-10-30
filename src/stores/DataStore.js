import { nanoid } from 'nanoid';
import { makeAutoObservable } from "mobx";

export default class DataStore {
  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.initRawData();
  }

  rawData = {};
  setRawData(d) {
    this.rawData = d;
  }
  async initRawData() {
    const res = await fetch("n2-audio.json");
    const d = await res.json();
    this.setRawData(d);
  }

  get cardData() {
    return Object.keys(this.rawData).map(name => ({
      id: nanoid(),
      name
    }));
  }

  currentCardName;
  setCurrentCardName(name) {
    this.currentCardName = name;
  }
  get currentItemList() {
    return this.rawData[this.currentCardName].map(item => ({
      id: nanoid(),
      src: item.src,
      title: item.title
    }));
  }
  currentItem;
  setCurrentItem(item) {
    this.currentItem = item;
    this.rootStore.audio.init(item.src);
  }

  itemData = [];
  setItemData(cardName) {
    this.itemData = this.rawData[cardName].map(item => ({
      id: nanoid(),
      src: item.src,
      title: item.title
    }));
  }
}