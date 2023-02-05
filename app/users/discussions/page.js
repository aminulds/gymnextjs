'use client';
import React from 'react';
import Card from '../../../components/Card/Card';
import Select from '../../../components/Select/Select';
import { uploadData } from '../data';

const Discussions = () => {
    return (
        <div className="col-12 col-lg-10">
            <div className="mainContent">
                {/* Popular Discussions */}
                <div className="sectionTitle">
                    <h4 className="title">Popular Discussions</h4>
                </div>

                <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-5">
                    {uploadData.map((item) => (
                        <>
                            {item.type === 'discussions' && (
                                <>
                                    {item.items.slice(0, 4).map((item) => (
                                        <div className="col" key={item.id}>
                                            <Card img={item.image} title={item.title} url="/users/discussions/details" description={item.description} categoryIcon={item.categoryIcon} />
                                        </div>
                                    ))}
                                </>
                            )}
                        </>
                    ))}
                </div>

                {/* All Discussions */}
                <div className="sectionTitle">
                    <h4 className="title">All Discussions</h4>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="me-2">Filter By:</span>
                        <Select />
                    </div>
                </div>

                <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-5">
                    {uploadData.map((item) => (
                        <>
                            {item.type === 'discussions' && (
                                <>
                                    {item.items.map((item) => (
                                        <div className="col" key={item.id}>
                                            <Card img={item.image} title={item.title} url="/users/discussions/details" description={item.description} categoryIcon={item.categoryIcon} />
                                        </div>
                                    ))}
                                </>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Discussions;
