import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const FormFourthPage = ({ prevPage }) => {
  return (
    <form>
      <h1>FourthPage</h1>
      <button onClick={() => prevPage()}>Wstecz</button>
    </form>
  );
};

export default reduxForm({
  form: 'formMain',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(FormFourthPage);