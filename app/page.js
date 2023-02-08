'use client';
import React from 'react';
import Banner from '../components/Frontend/Banner/Banner';
import Contact from '../components/Frontend/Contact/Contact';
import Feature from '../components/Frontend/Feature/Feature';
import Footer from '../components/Frontend/Footer/Footer';
import Gallery from '../components/Frontend/Gallery/Gallery';
import Header from '../components/Frontend/Header/Header';
import Package from '../components/Frontend/Package/Package';
import Review from '../components/Frontend/Review/Review';

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

            {/* Review */}
            <Review />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
