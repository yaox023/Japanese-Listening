import React from 'react'
import { observer } from 'mobx-react'
import { Context, PAGE } from './constants'
import './App.css'

import AudioListPage from './Components/AudioListPage'
import BookListPage from './Components/BookListPage'
import AudioPlayerPage from './Components/AudioPlayerPage'

// {
//   document.addEventListener(
//     'touchmove',
//     function (event) {
//       event.preventDefault()
//     },
//     { passive: false },
//   )
// }

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

const App = observer(() => {
  const store = React.useContext(Context)
  return (
    <>
      {store.curPage === PAGE.AudioPlayerPage && <AudioPlayerPage />}
      {store.curPage === PAGE.AudioListPage && <AudioListPage />}
      {store.curPage === PAGE.BookListPage && <BookListPage />}
    </>
  )
})

export default App
