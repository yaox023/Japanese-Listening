import React from 'react';
import { observer } from 'mobx-react';
import Cards from "./Cards";

const CardContainer = observer(() => {
  return (<div className="card_container"><Cards /></div>);
});

export default CardContainer;