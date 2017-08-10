import React from 'react';
import Card from './Card';

const Grid = ({cards}) => {
  return (
    <section className="grid">
      {cards.map((card) =>
        <Card key={card.PortId} card={card} />
      )}
    </section>
  );
};

export default Grid;