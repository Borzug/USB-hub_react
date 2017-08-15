import React from 'react';
import { object } from 'prop-types';

ErrorPage.propTypes = {  
  error: object.isRequired
}

function ErrorPage ({error}) {  
  return (
    <section className="error">
      <div className="card card--low-charge">
        <p>Что-то пошло не так:</p>
        <p className="card__header">{error.status}:&nbsp;{error.statusText}</p>
      </div>
    </section>
  );
};

export default ErrorPage;