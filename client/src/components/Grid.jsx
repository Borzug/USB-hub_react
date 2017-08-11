import React from 'react';
import { array } from 'prop-types';

import Card from './Card';

Grid.propTypes = {
  cards: array.isRequired
}

function Grid ({cards}) {
  return (
    <section className="grid">
      {cards.map((card) =>
        <Card key={card.PortId} card={card} />
      )}
    </section>
  );
};

export default Grid;