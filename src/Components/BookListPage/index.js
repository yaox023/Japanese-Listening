import React from 'react'
import { observer } from 'mobx-react'
import { Context } from '../../constants'

import './index.css'

const BookListPage = observer(() => {
  const store = React.useContext(Context)

  const handleItemClick = (index) => {
    store.setCurBookIdx(index)
    store.showAudioListPage()
  }
  
  return (
    <div className="book-list-page">
      {store.data.map((book, index) => {
        return (
          <div
            key={index}
            className="book-item-container"
            onClick={() => handleItemClick(index)}
          >
            <div className="book-item-image">
              <img src={book.image} alt="book image" />
            </div>
            <div className="book-item-title">{book.title}</div>
          </div>
        )
      })}
    </div>
  )
})

export default BookListPage
