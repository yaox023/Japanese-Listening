import { makeObservable, runInAction, observable, action, computed } from "mobx";
import { PLAY_MODE } from "../constants";
const d = require('../template.json');

export default class AudioStore {
  isPlaying = false; // 当前是否正在播放
  playbackRate = 1.0; // 播放速度
  playMode = PLAY_MODE.ONCE; // 播放模式
  audioElement; // audio 元素
  data = d; // 所有的数据 TODO: 先请求所有数据，后续考虑分书来请求存储
  curBookIdx = 0; // 当前播放的图书，对应于 data 的外层数组下标
  curAudioIdx = 0; // 当前播放的音乐，对应于 data 的内层数组下标
  curTime = 0; // 当前播放时间
  duration = 0; // 当前音频总时长

  constructor(rootStore) {
    this.rootStore = rootStore;

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.togglePlaybackRate = this.togglePlaybackRate.bind(this);
    this.togglePlayMode = this.togglePlayMode.bind(this);
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
    this.nextAudio = this.nextAudio.bind(this);
    this.prevAudio = this.prevAudio.bind(this);

    makeObservable(this, {
      isPlaying: observable,
      updateIsPlaying: action,
      playbackRate: observable,
      togglePlaybackRate: action,
      playMode: observable,
      togglePlayMode: action,
      curBookIdx: observable,
      curBook: computed,
      setCurBookIdx: action,
      curAudioIdx: observable,
      curAudio: computed,
      setCurAudioIdx: action,
      curTime: observable,
      setCurTime: action,
      duration: observable,
      setDuration: action,
      curTimeRate: computed,
    });

    // this.initData();
    this.initAudioElement();
  }

  async initData() {
    const res = await fetch("data.json");
    this.data = await res.json();
  }

  initAudioElement() {
    this.audioElement = new Audio();
    this.audioElement.addEventListener("play", () => {
      this.updateIsPlaying();
    });
    this.audioElement.addEventListener("pause", () => {
      this.updateIsPlaying();
    });
    this.audioElement.addEventListener("ended", async () => {
      this.updateIsPlaying();

      switch (this.playMode) {
        case PLAY_MODE.REPEAT:
          this.play();
          break;
        case PLAY_MODE.ORDER:
          await this.nextAudio();
          this.play();
          break;
        case PLAY_MODE.RANDOM:
          const idx = parseInt(Math.random() * this.curBook.content.length);
          await this.setCurAudioIdx(idx);
          this.play();
          break;
        default:
          break;
      }
    });
    this.audioElement.addEventListener("timeupdate", () => {
      if (this.audioElement.currentTime) {
        this.setCurTime(this.audioElement.currentTime);
      }
      if (this.audioElement.duration) {
        this.setDuration(this.audioElement.duration);
      }
    });
    this.audioElement.addEventListener("durationchange", () => {
      this.setCurTime(0);
      this.setDuration(this.audioElement.duration);
    });

    // 初始化第一个 audio
    this.setCurAudioIdx(0);
  }

  get curBook() {
    return this.data[this.curBookIdx];
  }

  get curAudio() {
    const audio = this.curBook && this.curBook.content[this.curAudioIdx];
    // if (audio) {
    //   this.pause();
    //   fetch(audio.url)
    //     .then(res => res.blob())
    //     .then(blob => URL.createObjectURL(blob))
    //     .then(src => {
    //       this.audioElement.src = src;
    //     });
    // }
    return audio;
  }

  async fetchAudio() {
    const res = await fetch(this.curAudio.url);
    const blob = await res.blob();
    const src = URL.createObjectURL(blob);
    this.audioElement.src = src;
  }

  // 当前播放的时长比例
  get curTimeRate() {
    const rate = this.duration === 0 ? 0 : this.curTime / this.duration;
    return parseInt(rate * 100);
  }

  setCurBookIdx(idx) {
    this.curBookIdx = idx;
  }

  async setCurAudioIdx(idx) {
    this.curAudioIdx = idx;
    await this.fetchAudio();
    this.updateIsPlaying();
  }

  setCurTime(time) {
    this.curTime = time;
  }

  setDuration(duration) {
    this.duration = duration;
  }

  async nextAudio() {
    if (this.curAudioIdx + 1 < this.curBook.content.length) {
      this.setCurAudioIdx(this.curAudioIdx + 1);
    }
  }

  async prevAudio() {
    if (this.curAudioIdx - 1 >= 0) {
      this.setCurAudioIdx(this.curAudioIdx - 1);
    }
  }

  updateIsPlaying() {
    this.isPlaying = !this.audioElement.paused;
  }

  play() {
    setTimeout(() => this.audioElement.play(), 100);
  }

  pause() {
    this.audioElement.pause();
  }

  forward() {
    this.audioElement.currentTime += 10;
  }

  backward() {
    this.audioElement.currentTime -= 10;
  }

  togglePlaybackRate() {
    if (this.playbackRate === 1.0) {
      this.playbackRate = 1.5;
    } else if (this.playbackRate === 1.5) {
      this.playbackRate = 2.0;
    } else if (this.playbackRate === 2.0) {
      this.playbackRate = 0.75;
    } else if (this.playbackRate === 0.75) {
      this.playbackRate = 1.0;
    }
    this.audioElement.playbackRate = this.playbackRate;
  }

  togglePlayMode() {
    switch (this.playMode) {
      case PLAY_MODE.ONCE:
        this.playMode = PLAY_MODE.REPEAT;
        break;
      case PLAY_MODE.REPEAT:
        this.playMode = PLAY_MODE.ORDER;
        break;
      case PLAY_MODE.ORDER:
        this.playMode = PLAY_MODE.RANDOM;
        break;
      case PLAY_MODE.RANDOM:
        this.playMode = PLAY_MODE.ONCE;
        break;
      default:
        this.playMode = PLAY_MODE.ONCE;
        break;
    }
  }
}

// export default class AudioStore {
//   constructor(rootStore) {
//     makeAutoObservable(this, {
//       audioElement: false
//     });
//     this.rootStore = rootStore;
//     this.setUpAudioElement();
//   }

//   url;
//   objectURL;
//   audioElement = new Audio();
//   status = STATUS.INITIALIZED;
//   playing = false;
//   playMode = PLAY_MODE.ONCE;

//   playbackRate = 1.0;

//   // canvasElement;

//   setUpAudioElement() {
//     this.audioElement.addEventListener('playing', () => {
//       this.setPlaying(true);
//     });

//     this.audioElement.addEventListener("paused", () => {
//       this.setPlaying(false);
//     });

//     this.audioElement.addEventListener("canplay", () => {
//       this.status = STATUS.LOADED;
//     });

//     this.audioElement.addEventListener("canplaythrough", () => {
//       this.status = STATUS.LOADED;
//     });

//     /**
//      * 播放完毕时，根据 playMode 不同做不同操作
//      */
//     this.audioElement.addEventListener('ended', async () => {
//       if (this.playMode === PLAY_MODE.ONCE) {
//         this.setPlaying(false);
//       } else if (this.playMode === PLAY_MODE.LOOP) {
//         this.audioElement.play();
//       } else if (this.playMode === PLAY_MODE.ORDER) {
//         this.setPlaying(true);
//         await this.rootStore.data.nextItem();
//         this.audioElement.play();
//       } else if (this.playMode === PLAY_MODE.SHUFFLE) {
//         this.setPlaying(true);
//         await this.rootStore.data.shuffleItem();
//         this.audioElement.play();
//       } else {
//         throw new Error("invalid play mode!", this.playMode);
//       }
//     });

//     document.onkeydown = e => {
//       // console.log("keyCode", e.keyCode)
//       if (e.keyCode === 32) {
//         e.preventDefault();
//         if (this.playing) {
//           this.audioElement.pause();
//         } else {
//           this.audioElement.play();
//         }
//         this.setPlaying(!this.playing);
//       }
//     };
//   }
//   x = 0;
//   setUpCanvasElement(canvasElement) {
//     const ctx = canvasElement.getContext("2d");

//     const width = window.innerWidth;
//     const height = 200;
//     canvasElement.width = width;
//     canvasElement.height = height;

//     this.filteredData = this.filteredData.map(d => (d * height / 2 + height / 2));
//     const stepSize = Math.floor(width / this.filteredData.length);

//     // let progressRate;
//     // let currentLength;
//     // setInterval(() => {

//     // }, 100);

//     const progressRate = this.audioElement.currentTime / this.audioElement.duration;
//     ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
//     ctx.beginPath();
//     ctx.moveTo(0, height / 2);
//     const currentLength = Math.floor(this.filteredData.length * progressRate);
//     this.x = progressRate;
//     for (let i = 0; i < this.filteredData.length; i++) {
//       ctx.lineTo(i * stepSize, this.filteredData[i]);
//     }
//     ctx.stroke();

//     // window.requestAnimationFrame(() => this.draw(ctx, canvasElement, height, stepSize))
//   }

//   draw(ctx, canvasElement, height, stepSize) {
//     const progressRate = this.audioElement.currentTime / this.audioElement.duration;
//     ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
//     ctx.beginPath();
//     ctx.moveTo(0, height / 2);
//     const currentLength = Math.floor(this.filteredData.length * progressRate);
//     this.x = progressRate;
//     for (let i = 0; i < currentLength; i++) {
//       ctx.lineTo(i * stepSize, this.filteredData[i]);
//     }
//     ctx.stroke();
//     if (progressRate > 0.9) {
//       window.requestAnimationFrame(this.draw);
//     }
//   }

//   filteredData = [];

//   /**
//    * 思考一下音波具体的逻辑，如何融入 react 与 mobx
//    * @param {} url 
//    */

//   async init(url) {
//     this.status = STATUS.LOADING;
//     this.url = url;
//     this.playing = false;

//     const res = await fetch(url);
//     const res2 = res.clone();

//     const blob = await res.blob();
//     this.objectURL = URL.createObjectURL(blob);
//     this.audioElement.src = this.objectURL;

//     const arrayBuffer = await res2.arrayBuffer();
//     const audioBuffer = await decodeAudioData(arrayBuffer);

//     const rawData = audioBuffer.getChannelData(0);
//     const samples = Math.floor(audioBuffer.duration) * 2;
//     const blockSize = Math.floor(rawData.length / samples);
//     // let filteredData = [];
//     for (let i = 0; i < samples; i++) {
//       this.filteredData.push(rawData[i * blockSize]);
//     }
//     /**
//      * some browser don't fire canplay or canplaythrough event
//      * so set status here.
//      */
//     this.status = STATUS.LOADED;
//   }

//   setPlaying(playing) {
//     this.playing = playing;
//   }

//   /**
//    * 开始播放
//    */
//   async play() {
//     /**
//      * For loading status, try again 100 ms later
//      */
//     if (this.status === STATUS.LOADING) {
//       setTimeout(() => this.play(), 100);
//       return;
//     }
//     if (!this.playing) {
//       this.setPlaying(true);
//       this.audioElement.play();
//     }
//   }

//   /**
//    * 暂停播放
//    */
//   async pause() {
//     if (this.playing) {
//       this.setPlaying(false);
//       await this.audioElement.pause();
//     }
//   }

//   /**
//    * 设置播放模式
//    * @param {PLAY_MODE} mode 模式 
//    */
//   setPlayMode(mode) {
//     this.playMode = mode;
//   }
//   /**
//    * seek 前进 
//    * @param {number} s 正整数，前进几秒 
//    */
//   moveForwardBy(s) {
//     this.audioElement.currentTime += s;
//   }

//   /**
//    * seek 后退
//    * @param {number} s 正整数，后退几秒
//    */
//   moveBackwardBy(s) {
//     this.audioElement.currentTime -= s;
//   }

//   /**
//    * 切换播放模式
//    */
//   switchPlayMode() {
//     switch(this.playMode) {
//       case PLAY_MODE.ONCE:
//         this.playMode = PLAY_MODE.LOOP;
//         break;
//       case PLAY_MODE.LOOP:
//         this.playMode = PLAY_MODE.ORDER;
//         break;
//       case PLAY_MODE.ORDER:
//         this.playMode = PLAY_MODE.RANDOM;
//         break;
//       case PLAY_MODE.RANDOM:
//         this.playMode = PLAY_MODE.REPEAT;
//         break;
//       case PLAY_MODE.REPEAT:
//         this.playMode = PLAY_MODE.ONCE;
//         break;
//       default:
//         this.playMode = PLAY_MODE.ONCE;
//         break;
//     }
//   }

//   /**
//    * 设置倍速播放
//    * @param {number} rate 播放倍数
//    */
//   switchPlaybackRate() {
//     let targetRate;
//     switch(this.playbackRate) {
//       case 0.75:
//         targetRate = 1.0;
//         break;
//       case 1.0:
//         targetRate = 1.25;
//         break;
//       case 1.25:
//         targetRate = 1.5;
//         break;
//       case 1.5:
//         targetRate = 2.0;
//         break;
//       case 2.0:
//         targetRate = 0.75;
//         break;
//       default:
//         targetRate = 1.0;
//         break;
//     }
//     this.playbackRate = targetRate;
//     this.audioElement.playbackRate = targetRate;
//   }


// }