import React from 'react';

export const Context = React.createContext();

export const PAGE = {
  BookListPage: "BookListPage",
  AudioListPage: "AudioListPage",
  AudioPlayerPage: "AudioPlayerPage"
};

export const PLAY_MODE = {
  ONCE: "播放一次",
  REPEAT: "单曲循环",
  ORDER: "列表循环",
  RANDOM: "随机播放",
};

export const STATUS = {
  INITIALIZED: "initialized",
  LOADING: "loading",
  LOADED: "loaded"
};