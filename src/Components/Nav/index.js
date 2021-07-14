import React from 'react'
import { observer } from 'mobx-react'
import { Context } from '../../constants'

import IconButton from '@material-ui/core/IconButton'

import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'

import './index.css'

const Nav = observer(() => {
  const store = React.useContext(Context)
  return (
    <div className="nav-container">
      <div className="nav-before" onClick={() => store.showBookListPage()}>
        <IconButton>
          <NavigateBeforeIcon />
        </IconButton>
        返回图书
      </div>
      {/* <div className="nav-title">{store.curAudio.title}</div> */}
      {/* <div className="nav-after">
        <IconButton>
          <NavigateNextIcon fontSize="large" />
        </IconButton>
      </div> */}
    </div>
  )
})

export default Nav
