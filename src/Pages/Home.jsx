import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import AboutMe from '../Components/AboutMe';
import TechStack from '../Components/TechStack';
import ProtfolioProjects from '../Components/PortfolioProjects';

const Home = () => {
    return (
      <> <header>
        <Navbar></Navbar>
        <Banner></Banner>
       </header>
       <main>
       <AboutMe></AboutMe>
       <TechStack></TechStack>
        <ProtfolioProjects></ProtfolioProjects>
       </main>
       <footer>
        <Footer></Footer>
       </footer>
      </>
    );
};

export default Home;