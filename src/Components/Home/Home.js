import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Offers from '../Offers/Offers';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Offers></Offers>
            <Services></Services>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;