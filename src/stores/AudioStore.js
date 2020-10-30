import { makeAutoObservable, runInAction } from "mobx";

export default class AudioStore {
  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  url;
  objectURL;
  audioElement = new Audio();

  async init(url) {
    this.url = url;
    const res = await fetch(url);
    const blob = await res.blob();
    runInAction(() => {
      this.objectURL = URL.createObjectURL(blob);
      this.audioElement.src = this.objectURL;
    });
    console.log(this.url, this.objectURL, this.audioElement);
  }

  playing = false;
  play() {
    if (!this.playing) {
      this.audioElement.play();
      this.playing = !this.playing;
    }
  }
  pause() {
    if (this.playing) {
      this.audioElement.pause();
      this.playing = !this.playing;
    }
  }
}