import React from 'react';
import { observer } from 'mobx-react';
import { Context } from "../constants";

const Items = observer(() => {
  const store = React.useContext(Context);
  const handleItemClick = item => {
    store.data.setCurrentItem(item);
    store.route.handleDown();
  };
  return (
    <div className="items">
      {
        store.data.currentItemList.map(item => (
          <div
            className="item"
            onClick={() => handleItemClick(item)}
            key={item.id}
          >{item.title}</div>)
        )
      }
    </div>
  );
});

export default Items;