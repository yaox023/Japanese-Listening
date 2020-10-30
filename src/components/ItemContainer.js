import React from 'react';
import { observer } from 'mobx-react';
import Items from "./Items";

const ItemContainer = observer(() => {
  return (<div className="item_container"><Items /></div>);
});

export default ItemContainer;