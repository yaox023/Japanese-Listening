import React from 'react';
import { observer } from 'mobx-react';
import { Context, PAGE } from "../constants";
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const TopContainer = observer(() => {
  const store = React.useContext(Context);
  return <div className="top_container">
    {
      store.route.currentPage !== PAGE.CARD ?
      <IconButton onClick={() => store.route.handleUp()}>
        <NavigateBeforeIcon />
      </IconButton> :
      <div></div>
    }
    <p>日语听力练习</p>
    {/* {
      store.route.currentPage !== PAGE.AUDIO &&
      <IconButton
        className="route_down"
        onClick={() => store.route.handleDown()}
      >
        <NavigateNextIcon fontSize="large" />
      </IconButton>
    } */}
  </div>;
});

export default TopContainer;