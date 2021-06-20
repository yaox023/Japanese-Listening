import React from 'react';
import { observer } from 'mobx-react';
import { Context } from "../constants";

const CardContainer = observer(() => {
  const store = React.useContext(Context);
  const handleCardClick = cardName => {
    store.route.handleDown();
    store.data.setCurrentCardName(cardName);
  };
  return (
    <div className="card_container">
      <div className="cards">
        {
          store.data.cardData.map(card => (
            <div
              className="card"
              key={card.id}
              onClick={() => handleCardClick(card.name)}
            >{card.name}</div>
          ))
        }
      </div>
    </div>);
});

export default CardContainer;