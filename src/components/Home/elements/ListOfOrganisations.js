import React, { useState, useEffect } from 'react';

import SingleTabListOfOrganisations from './SingleTabListOfOrganisations';

const ListOfOrganisations = ({ data }) => {
  const [ tabs, setTabs ] = useState([]);
  const [ currTab, setCurrTab ] = useState(null);

  useEffect(() => {
    // Utworzenie tablicy z zakładkami
    const tabs = Object.values({ ...data });
    setTabs(tabs);
  }, [data]); // po wyrenderowaniu, dane są puste, później zostają pobrane z Firebase i następuje ponowne renderowanie z danymi (stąd update na data)
  
  const handleClickTab = ({ target }) => {
    // Kilknięty przycisk ustanawia bieżącą zakładkę
    const titleOfSeekTab = target.id;
    const currTab = tabs.find(tab => tab.title === titleOfSeekTab);
    setCurrTab(currTab);
    console.log(currTab);
  };

  return (
    <>
      <div>
        {tabs.map((tab, i) => (
          <button key={i} id={tab.title} onClick={handleClickTab}>
            {tab.title}
          </button>
        ))}
      </div>
      {currTab && <SingleTabListOfOrganisations currTab={currTab} />}
    </>
  );
}
 
export default ListOfOrganisations;