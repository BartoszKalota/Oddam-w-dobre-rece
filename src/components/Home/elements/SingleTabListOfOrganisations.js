import React, { useState } from 'react';

const SingleTabListOfOrganisations = ({ currTab: { title, descr, entity } }) => {
  const [ currPage, setCurrPage ] = useState(1);
  const [ itemsPerPage ] = useState(3);

  return (
    <div>
      <div>{title}</div>
      <div>{descr}</div>
      <ul>
        {entity.map(({ name, descr, tags }, i) => (
          <li key={i}>
            <p>{name}</p>
            <p>{descr}</p>
            <p>{tags.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default SingleTabListOfOrganisations;