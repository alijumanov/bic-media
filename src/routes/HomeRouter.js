import React from 'react';
import FAQ from '../components/FAQ';
import Header from '../components/Header';
// import OurTeam from '../components/OurTeam';
import HomeAbout from '../components/HomeAbout';
import HomeServices from '../components/HomeServices';
import HomeProjects from '../components/HomeProjects';

const HomeRouter = () => {
    return (
        <>
            <Header />
            <HomeAbout />
            <HomeServices />
            <HomeProjects />
            {/* <OurTeam /> */}
            <FAQ texture5={true} />
        </>
    );
};

export default HomeRouter;