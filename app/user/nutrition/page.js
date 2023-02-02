'use client';
import React from 'react';
import Card from '../../components/Card/Card';
import Select from '../../components/Select/Select';
import { uploadData } from '../data';

const Peds = () => {
    let popularItemLimit = 0;

    return (
        <div className="col-12 col-lg-10">
            <div className="mainContent">
                {/* Popular Discussions */}
                <div className="sectionTitle">
                    <h4 className="title">Popular Nutrition</h4>
                </div>

                <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-5">
                    {uploadData.map((item) => (
                        <>
                            {item.items.map((item) => (
                                <>
                                    {item.category === 'nutrition' && (popularItemLimit += 1) <= 4 && (
                                        <div className="col" key={item.id}>
                                            <Card img={item.image} title={item.title} url="nutrition/details" description={item.description} categoryIcon={item.categoryIcon} />
                                        </div>
                                    )}
                                </>
                            ))}
                        </>
                    ))}
                </div>

                {/* All Discussions */}
                <div className="sectionTitle">
                    <h4 className="title">All Nutrition</h4>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="me-2">Filter By:</span>
                        <Select />
                    </div>
                </div>

                <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-5">
                    {uploadData.map((item) => (
                        <>
                            {item.items.map((item) => (
                                <>
                                    {item.category === 'nutrition' && (
                                        <div className="col" key={item.id}>
                                            <Card img={item.image} title={item.title} url="nutrition/details" description={item.description} categoryIcon={item.categoryIcon} />
                                        </div>
                                    )}
                                </>
                            ))}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Peds;