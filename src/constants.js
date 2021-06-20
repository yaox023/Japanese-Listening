import React from 'react';

export const Context = React.createContext();

export const PAGE = {
  CARD: "CARD",
  ITEM: "ITEM",
  AUDIO: "AUDIO"
};

export const PLAY_MODE = {
  ONCE: "once",
  LOOP: "loop",
  ORDER: "order",
  RANDOM: "random",
  REPEAT: "repeat",
};

export const STATUS = {
  INITIALIZED: "initialized",
  LOADING: "loading",
  LOADED: "loaded"
};