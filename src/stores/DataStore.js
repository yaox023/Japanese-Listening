import { nanoid } from 'nanoid';
import { makeAutoObservable, observable } from "mobx";

export default class DataStore {
  constructor(rootStore) {
    makeAutoObservable(this, {
      currentItem: observable.ref
    });
    this.rootStore = rootStore;
    this.initRawData();
  }

  rawData = {};
  setRawData(d) {
    this.rawData = d;
  }
  async initRawData() {
    const res = await fetch("data.json");
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
  currentItem = {};
  async setCurrentItem(item) {
    this.currentItem = item;
    await this.rootStore.audio.init(item.src);
  }
  async nextItem() {
    if (!this.currentItem) return;
    const currentIndex = this.currentItemList.findIndex(item => item.title === this.currentItem.title);
    if (currentIndex === -1) return;
    if (currentIndex === (this.currentItemList.length - 1)) {
      await this.setCurrentItem(this.currentItemList[0]);
    } else {
      await this.setCurrentItem(this.currentItemList[currentIndex + 1]);
    }
  }
  async prevItem() {
    if (!this.currentItem) return;
    const currentIndex = this.currentItemList.findIndex(item => item.title === this.currentItem.title);
    if (currentIndex === -1) return;
    if (currentIndex === 0) {
      await this.setCurrentItem(this.currentItemList[this.currentItemList.length - 1]);
    } else {
      await this.setCurrentItem(this.currentItemList[currentIndex - 1]);
    }
  }
  async shuffleItem() {
    if (!this.currentItem) return;
    const randomIdx = parseInt(Math.random() * this.currentItemList.length);
    await this.setCurrentItem(this.currentItemList[randomIdx]);
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