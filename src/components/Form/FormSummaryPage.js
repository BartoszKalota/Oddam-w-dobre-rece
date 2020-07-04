import React from 'react';

const FormSummaryPage = ({ prevPage }) => {
  return (
    <>
      <h1>FormSummaryPage</h1>
      <button onClick={() => prevPage()}>Wstecz</button>
    </>
  );
}
 
export default FormSummaryPage;