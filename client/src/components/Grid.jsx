import React from 'react';
import { array } from 'prop-types';

import Card from './Card';
import Loading from './Loading';

Grid.propTypes = {
  cards: array.isRequired
}

function Grid ({cards}) {
  if (!cards.length) {
    return <Loading />
  }
  return (
    <section className="grid">
      {cards.map((card) =>
        <Card key={card.PortId} card={card} />
      )}
    </section>
  );
};

export default Grid;