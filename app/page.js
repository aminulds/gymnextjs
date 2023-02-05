import React from 'react';
import Banner from '../components/Frontend/Banner/Banner';
import Feature from '../components/Frontend/Feature/Feature';
import Gallery from '../components/Frontend/Gallery/Gallery';
import Header from '../components/Frontend/Header/Header';
import Package from '../components/Frontend/Package/Package';

const Home = () => {
    return (
        <div className="homePage">
            {/* Header */}
            <Header />

            {/* Banner */}
            <Banner />

            {/* Feature */}
            <Feature />

            {/* Package */}
            <Package />

            {/* Gallery */}
            <Gallery />
        </div>
    );
};

export default Home;
