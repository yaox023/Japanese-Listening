import React from 'react'
import { observer } from 'mobx-react'
import { Context } from '../../constants'
import MusicNoteIcon from '@material-ui/icons/MusicNote'

import './index.css'

const AudioListPage = observer(() => {
  const store = React.useContext(Context)

  const handleItemClick = (idx) => {
    store.setCurAudioIdx(idx)
    store.showAudioPlayerPage()
  }

  return (
    <div className="audio-list-page">
      {store.curBook.content.map((book, index) => (
        <div
          key={index}
          className="audio-item-container"
          onClick={() => handleItemClick(index)}
        >
          <div className="audio-item-image">
            <MusicNoteIcon />
          </div>
          <div className="audio-item-title">{book.title}</div>
        </div>
      ))}
    </div>
  )
})

export default AudioListPage
