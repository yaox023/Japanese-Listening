import React from 'react';
import { observer } from 'mobx-react';
import { Context } from "../constants";

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import IconButton from '@material-ui/core/IconButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Replay10Icon from '@material-ui/icons/Replay10';
import Forward10Icon from '@material-ui/icons/Forward10';

const AudioContainer = observer(() => {
  const store = React.useContext(Context);
  const ref = React.useRef();
  React.useEffect(() => {
    store.audio.setUpCanvasElement(ref.current);
  }, []);

  return (<div className="audio_container">
    <p className="audio_card_name">{store.data.currentCardName}</p>
    <p className="audio_item_name">{store.data.currentItem.title}</p>
    <canvas className="audio_wave" ref={ref}></canvas>

    {/* <div className="settings">
      <div className="settings-playbackRate">
        <img onClick={() => store.audio.switchPlaybackRate()} src={"./playback-rate-" + store.audio.playbackRate + ".png"} />
      </div>
      <div className="settings-play-mode">
        <img onClick={() => store.audio.switchPlayMode()} src={"./play-mode-switch-" + store.audio.playMode + ".png"} />
      </div>
    </div> */}

    <div className="control">
      <IconButton onClick={() => store.data.prevItem()}>
        <SkipPreviousRoundedIcon fontSize='large' />
      </IconButton>
      <img src="./btn-seek-backward.png" onClick={() => store.audio.moveBackwardBy(15)} />
      {
        store.audio.playing ?
          <img src="./btn-pause.png" onClick={() => store.audio.pause()} /> :
          <img src="./btn-play.png" onClick={() => store.audio.play()} />
      }
      <img src="./btn-seek-forward.png" onClick={() => store.audio.moveForwardBy(15)} />
      <IconButton onClick={() => store.data.nextItem()}>
        <SkipNextRoundedIcon fontSize='large' />
      </IconButton>
    </div>

  </div>);
});

export default AudioContainer;