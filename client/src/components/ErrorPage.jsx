import React from 'react';
import { object } from 'prop-types';

ErrorPage.propTypes = {  
  error: object.isRequired
}

function ErrorPage ({error}) {  
  return (
    <section className="error">
      <div>
        <h1>Что-то пошло не так:</h1>
        <p className="card__header">{error.status}&nbsp;{error.statusText}</p>
      </div>
    </section>
  );
};

export default ErrorPage;