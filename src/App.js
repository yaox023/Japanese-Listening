import React from 'react';
import { observer } from 'mobx-react';
import { Context, PAGE } from "./constants";

import AudioContainer from "./components/AudioContainer";
import CardContainer from "./components/CardContainer";
import ItemContainer from "./components/ItemContainer";
import TopContainer from "./components/TopContainer";

import IconButton from '@material-ui/core/IconButton';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Replay10Icon from '@material-ui/icons/Replay10';
import Forward10Icon from '@material-ui/icons/Forward10';

import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';

import ListIcon from '@material-ui/icons/List';

import LinearProgress from '@material-ui/core/LinearProgress';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


// import IconButton from '@material-ui/core/IconButton';

// const NavContainer = () => {
//   return <div className="nav-container">
//     <IconButton >
//       <NavigateBeforeIcon className="nav-before" />
//     </IconButton>
//     <div className="nav-title">Title</div>
//     <IconButton>
//       <NavigateNextIcon className="nav-next" />
//     </IconButton>
//   </div>;
// };

const NavContainer = () => {
  return <div className="nav-container">
    <div className="nav-before">
      <IconButton>
        <NavigateBeforeIcon fontSize="large" />
      </IconButton>
    </div>
    <div className="nav-title">Title</div>
    <div className="nav-after">
      <IconButton>
        <NavigateNextIcon fontSize="large" />
      </IconButton>
    </div>
  </div>;
};

const CoverContainer = () => {
  return <div className="cover-container">
    <img src="https://cdn10.bookln.cn/178903_75BD1F56066B341DFAAEE11B44744A94.jpg?imageView2/0/w/312/h/462" />
  </div>;
};

const SettingsContainer = () => {
  return <div className="settings-container">
    <div className="settings-play-mode">
      <IconButton>
        <RepeatIcon fontSize="large" />
      </IconButton>
    </div>
    <div className="settings-favorite">
      <IconButton>
        <FavoriteBorderIcon fontSize="large" />
      </IconButton>
    </div>
    <div className="settings-playback-rate">
      <IconButton>1.5x</IconButton>
    </div>
    <div className="settings-music-list">
      <IconButton >
        <ListIcon fontSize="large" />
      </IconButton>
    </div>
  </div>;
};

// const SettingsContainer = observer(() => {
//   const store = React.useContext(Context);

//   return <div className="settings-container">
//     <div className="settings-play-mode">
//       <img onClick={() => store.audio.switchPlayMode()} src={"./play-mode-switch-" + store.audio.playMode + ".png"} />
//     </div>
//     <div className="settings-playbackRate">
//       <img onClick={() => store.audio.switchPlaybackRate()} src={"./playback-rate-" + store.audio.playbackRate + ".png"} />
//     </div>
//     <div className="settings-audio-list">
//       <img src={"./list.png"} />
//     </div>
//   </div>;
// });

const ProgressContainer = () => {
  return <div className="progress-bar-container">
    <LinearProgress variant="determinate" value={90} />
  </div>;
};

const ControlContainer = () => {
  return <div className="control-container">
    <div className="skip-pre">
      <IconButton>
        <SkipPreviousIcon fontSize="large" />
      </IconButton>
    </div>
    <div className="seek-backward">
      <IconButton>
        <Replay10Icon fontSize="large" />
      </IconButton>
    </div>
    <div className="play-pause">
      <IconButton>
        <PlayArrowIcon fontSize="large" />
      </IconButton>
    </div>
    <div className="seek-forward">
      <IconButton>
        <Forward10Icon fontSize="large" />
      </IconButton>
    </div>
    <div className="skip-next">
      <IconButton>
        <SkipNextIcon fontSize="large" />
      </IconButton>
    </div>
  </div>;
};

// const ControlContainer = observer(() => {
//   const store = React.useContext(Context);
//   return <div className="control-container">
//     <IconButton onClick={() => store.data.prevItem()}>
//       <SkipPreviousRoundedIcon className="skip-pre-audio" />
//     </IconButton>
//     <div className="seek-backward-contaienr">
//       <img src="./btn-seek-backward.png" onClick={() => store.audio.moveBackwardBy(15)} />
//     </div>
//     {
//       store.audio.playing ?
//         <div className="pause-container">
//           <img src="./btn-pause.png" onClick={() => store.audio.pause()} />
//         </div>
//         :
//         <div className="play-container">
//           <img src="./btn-play.png" onClick={() => store.audio.play()} />
//         </div>
//     }
//     <div className="seek-forward-contaienr">
//       <img src="./btn-seek-forward.png" onClick={() => store.audio.moveForwardBy(15)} />
//     </div>
//     <IconButton onClick={() => store.data.nextItem()}>
//       <SkipNextRoundedIcon className="skip-next-audio" />
//     </IconButton>
//   </div>;

// });

document.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, { passive: false });

const App = observer(() => {
  const store = React.useContext(Context);
  return (
    <>
      <NavContainer />
      <CoverContainer />
      <SettingsContainer />
      <ProgressContainer />
      <ControlContainer />


      {/* <TopContainer /> */}
      {/* <AudioContainer /> */}
      {/* {store.route.currentPage === PAGE.CARD && <CardContainer />}
      {store.route.currentPage === PAGE.ITEM && <ItemContainer />}
      {store.route.currentPage === PAGE.AUDIO && } */}
      {/* <div className="visual-container"></div> */}
      {/* <SettingsContainer /> */}
      {/* <div className="progress-bar-container"></div> */}
      {/* <ControlContainer /> */}
      {/* <iframe id="iframe" src="https://mp.zhizhuma.com/book.htm?id=18896"></iframe> */}
    </>
  );
});

export default App;

/** TODO
 * - 页面美化
 * - 播放器进度条
 * - 播放进度操控
 * - 倍速播放
 * - 播放器页面显示当前card 和item
 * - item 页面显示当前 card
 * - 播放结束之后，手动控制的playing 状态要更新
 * - 增加播放模式，单曲循环、顺序播放、随机播放、播放一次
 */
