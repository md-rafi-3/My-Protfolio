import React from 'react';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import TechStack from '../Components/TechStack';
import ProtfolioProjects from '../Components/PortfolioProjects';
import ContactSection from '../Components/ContactSection';

const Home = () => {
    return (
      <> <header>
       
        <Banner></Banner>
       </header>
       <main>
       <AboutMe></AboutMe>
       <TechStack></TechStack>
        <ProtfolioProjects></ProtfolioProjects>
        <ContactSection></ContactSection>
       </main>
       
      </>
    );
};

export default Home;