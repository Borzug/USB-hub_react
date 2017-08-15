import React from 'react';
import { string } from 'prop-types';

ErrorPage.propTypes = {  
  error: string.isRequired
}

function ErrorPage ({error}) {  
  return (
    <section className="error">
      <div>
        <h1>Что-то пошло не так:</h1>
        <p className="card__header">404:&nbsp;{error}</p>
      </div>
    </section>
  );
};

export default ErrorPage;