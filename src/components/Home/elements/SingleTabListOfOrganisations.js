import React, { useState, useEffect } from 'react';

const SingleTabListOfOrganisations = ({ currTab: { title, descr, entity } }) => {
  const [ counter, setCounter ] = useState(0);

  const itemsPerPage = 3;
  const entityToShow = entity.slice(counter * itemsPerPage, (counter + 1) * itemsPerPage);
  
  const numOfPages = [];
  for (let i = 1; i <= Math.ceil(entity.length / itemsPerPage); i++) {
    numOfPages.push(i);
  }
  
  const handleClickPagination = ({ target }) => {
    setCounter(target.innerText - 1);
  };

  useEffect(() => setCounter(0), [title]);  // po kliknięciu w inną zakładkę (zmiana title), wyświetla się pierwsza strona (domyślna wartość counter)

  return (
    <div>
      <div>{title}</div>
      <div>{descr}</div>
      <ul>
        {entityToShow.map(({ name, descr, tags }, i) => (
          <li key={i}>
            <p>{name}</p>
            <p>{descr}</p>
            <p>{tags.join(', ')}</p>
          </li>
        ))}
      </ul>
      <div>
        {numOfPages.map(num => (
          <button key={num} onClick={handleClickPagination}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
 
export default SingleTabListOfOrganisations;