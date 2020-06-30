import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const FormSecondPage = ({
  formData: {
    importantTitle, importantDescr, formHeader, selectName, selectTitle, selectOptions
  },
  onSubmit, prevPage
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>SecondPage</h1>
      <button onClick={() => prevPage()}>Wstecz</button>
      <button type="submit">Dalej</button>
    </form>
  );
};

export default reduxForm({
  form: 'formMain',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(FormSecondPage);