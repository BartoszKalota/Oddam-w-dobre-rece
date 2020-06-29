import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';


const FormFirstPage = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>FirstPage</h1>
      <button type="submit">Dalej</button>
    </form>
  );
};

export default reduxForm({
  form: 'formMain',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(FormFirstPage);