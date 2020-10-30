import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./stores/RootStore";
import { Context } from "./constants";


ReactDOM.render(
  <Context.Provider value={store} >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/** code for retrieve data from 考前对策
 * async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
var srcs = [];
async function go() {
  let title;
  for (const ele of document.getElementsByClassName("audio-items")[0].children) {
    ele.click();
    title = ele.querySelector(".audio-title").textContent;
    await sleep(1000);
    var src = document.getElementById("audio_media").src
    console.log(src)
    srcs.push({src: src, title: title});
  }
}
go();
JSON.stringify({"新日语能力考试考前对策N3": srcs}, null, 2)

import { makeAutoObservable, runInAction } from "mobx";
import React from 'react';
import { nanoid } from 'nanoid';

import RouteStore from "./stores"
 */
