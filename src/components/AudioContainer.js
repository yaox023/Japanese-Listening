import React from 'react';
import { observer } from 'mobx-react';
import { Context } from "../constants";

const AudioContainer = observer(() => {
  const store = React.useContext(Context);
  return (<div className="audio_container">
    <button onClick={() => store.audio.play()}>play</button>
    <button onClick={() => store.audio.pause()}>pause</button>
  </div>);
});

export default AudioContainer;