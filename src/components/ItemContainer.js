import React from 'react';
import { observer } from 'mobx-react';
import { Context } from "../constants";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const ItemContainer = observer(() => {
  const store = React.useContext(Context);
  const handleItemClick = item => {
    store.data.setCurrentItem(item);
    store.route.handleDown();
  };
  return (
    <div className="item_container">
      <List component="nav" className="items">
        {
          store.data.currentItemList.map(item => (
            <ListItem 
              button
              className="item"
              onClick={() => handleItemClick(item)}
              key={item.id}
            >
              <ListItemText primary={item.title} />
            </ListItem>)
          )
        }
      </List>
    </div>
  );
});

export default ItemContainer;