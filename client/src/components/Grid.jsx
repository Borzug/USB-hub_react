import React from 'react';
import { array, object } from 'prop-types';

import Card from './Card';
import Loading from './Loading';
import ErrorPage from './ErrorPage';

Grid.propTypes = {
  cards: array.isRequired,
  error: object.isRequired
}

function Grid ({cards, error}) {
  if (!cards.length && !error.status) {
    return <Loading />
  }
  if (error.status) {
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