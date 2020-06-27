import React from 'react';

import HomeNav from './HomeNav';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeEasySteps from './HomeEasySteps';
import HomeAbout from './HomeAbout';
import HomeHelp from './HomeHelp';
import HomeContactAndFooter from './HomeContact';

const Home = () => {
  return (
    <>
      <HomeNav />
      <HomeHeader />
      <HomeThreeColumns />
      <HomeEasySteps />
      <HomeAbout />
      <HomeHelp />
      <HomeContactAndFooter />
    </>
  );
}
 
export default Home;