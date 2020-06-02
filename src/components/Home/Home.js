import React from 'react';

import HomeNav from './HomeNav';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeEasySteps from './HomeEasySteps';
import HomeAbout from './HomeAbout';
import HomeHelp from './HomeHelp';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';

const Home = () => {
  return (
    <>
      <HomeNav />
      <HomeHeader />
      <HomeThreeColumns />
      <HomeEasySteps />
      <HomeAbout />
      <HomeHelp />
      <HomeContact />
      <HomeFooter />
    </>
  );
}
 
export default Home;