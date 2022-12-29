import React from 'react';
import Banner from '../Banner/Banner';
import HomePageCard from '../HomePageCard/HomePageCard';
import Upload from '../Upload/Upload';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Upload/>
            <HomePageCard/>

        </div>
    );
};

export default Home;