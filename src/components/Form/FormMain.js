import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import FormFirstPage from './FormFirstPage';
import FormSecondPage from './FormSecondPage';
import FormThirdPage from './FormThirdPage';

const FormMain = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => setPage(prevState => prevState + 1);
  const prevPage = () => setPage(prevState => prevState - 1);
  // const { onSubmit } = this.props
  return (
    <div>
      {page === 1 && <FormFirstPage onSubmit={nextPage} />}
      {page === 2 && (
        <FormSecondPage
          prevPage={prevPage}
          onSubmit={nextPage}
        />
      )}
      {page === 3 && (
        <FormThirdPage
          prevPage={prevPage}
          // onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

// FormMain.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// };

export default FormMain;