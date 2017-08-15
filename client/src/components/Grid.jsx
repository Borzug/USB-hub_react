import React from 'react';
import { array, string } from 'prop-types';

import Card from './Card';
import Loading from './Loading';
import ErrorPage from './ErrorPage';

Grid.propTypes = {
  cards: array.isRequired,
  error: string.isRequired
}

function Grid ({cards, error}) {
  if (!cards.length && !error) {
    return <Loading />
  }
  if (error) {
    return <ErrorPage error={error} />
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