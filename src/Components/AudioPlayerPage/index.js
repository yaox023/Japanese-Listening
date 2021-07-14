import React from 'react'
import { observer } from 'mobx-react'
import { Context } from '../../constants'
import './index.css'

import Nav from '../Nav'

import IconButton from '@material-ui/core/IconButton'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import Replay10Icon from '@material-ui/icons/Replay10'
import Forward10Icon from '@material-ui/icons/Forward10'
import RepeatIcon from '@material-ui/icons/Repeat'
import RepeatOneIcon from '@material-ui/icons/RepeatOne'
import ListIcon from '@material-ui/icons/List'
import LinearProgress from '@material-ui/core/LinearProgress'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

const CoverContainer = observer(() => {
  const store = React.useContext(Context)
  return (
    <div className="cover-container">
      {store.curBook !== undefined && (
        <div className="cur-title">
          {store.curBook.title + ' ' + store.curAudio.title}
        </div>
      )}
      {store.curBook && <img src={store.curBook.image} />}
    </div>
  )
})

const SettingsContainer = observer(() => {
  const store = React.useContext(Context)
  return (
    <div className="settings-container">
      <div className="settings-play-mode" onClick={store.togglePlayMode}>
        {store.playMode.slice(0, 2)}
        <br />
        {store.playMode.slice(2)}
      </div>
      <div className="settings-favorite">
        <IconButton>
          <FavoriteBorderIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="settings-playback-rate">
        <IconButton
          onClick={store.togglePlaybackRate}
        >{`${store.playbackRate}x`}</IconButton>
      </div>
      <div className="settings-music-list">
        <IconButton onClick={() => store.showAudioListPage()}>
          <ListIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  )
})

const ProgressContainer = observer(() => {
  const store = React.useContext(Context)
  return (
    <div className="progress-bar-container">
      <LinearProgress variant="determinate" value={store.curTimeRate} />
    </div>
  )
})

const ControlContainer = observer(() => {
  const store = React.useContext(Context)

  return (
    <div className="control-container">
      <div className="skip-pre">
        <IconButton onClick={store.prevAudio}>
          <SkipPreviousIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="seek-backward">
        <IconButton onClick={store.backward}>
          <Replay10Icon fontSize="large" />
        </IconButton>
      </div>
      <div className="play-pause">
        {store.isPlaying ? (
          <IconButton onClick={store.pause}>
            <PauseIcon fontSize="large" />
          </IconButton>
        ) : (
          <IconButton onClick={store.play}>
            <PlayArrowIcon fontSize="large" />
          </IconButton>
        )}
      </div>
      <div className="seek-forward">
        <IconButton onClick={store.forward}>
          <Forward10Icon fontSize="large" />
        </IconButton>
      </div>
      <div className="skip-next">
        <IconButton onClick={store.nextAudio}>
          <SkipNextIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  )
})

const AudioPlayerPage = observer(() => {
  return (
    <div className="audio-player-page">
      <Nav />
      <CoverContainer />
      <SettingsContainer />
      <ProgressContainer />
      <ControlContainer />
    </div>
  )
})

export default AudioPlayerPage
