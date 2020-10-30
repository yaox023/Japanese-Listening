import React from 'react';
import { observer } from 'mobx-react';
import { Context, PAGE } from "../constants";

const Top = observer(() => {
  const store = React.useContext(Context);
  return <div className="top">
    {
      store.route.currentPage !== PAGE.CARD &&
      <button
        className="route_up"
        onClick={() => store.route.handleUp()}
      >Up</button>
    }
    {
      store.route.currentPage !== PAGE.AUDIO &&
      <button
        className="route_down"
        onClick={() => store.route.handleDown()}
      >Down</button>
    }
  </div>;
});

export default Top;