'use client';
import React from 'react';
import Card from '../../../../components/Card/Card';
import { uploadData } from '../../data';
import { MdArrowRightAlt } from 'react-icons/md';
import Link from 'next/link';

const DiscussionsDetailsLayout = ({ children }) => {
    return (
        <div className="col-12 col-lg-10">
            <div className="mainContent">
                <div className="row g-4">
                    {/* Discussion Details */}
                    <div className="col-12 col-md-8">{children}</div>

                    {/* Discussion Recomendation */}
                    <div className="col-12 col-md-4">
                        <div className="sectionTitle">
                            <h4 className="title">Recommended</h4>
                        </div>
                        <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-1">
                            {uploadData.map((item) => (
                                <>
                                    {item.type === 'event' && (
                                        <>
                                            {item.items.slice(0, 4).map((item) => (
                                                <div className="col" key={item.id}>
                                                    <Card img={item.image} title={item.title} url="/users/events/details" description={item.description} categoryIcon={item.categoryIcon} recomended={true} />
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </>
                            ))}
                        </div>

                        <div className="mt-4 d-flex align-items-center justify-content-center">
                            <Link href="/users/events" className="btn btnPrimary rounded-pill d-flex align-items-center justify-content-around ">
                                Latest Events
                                <span className="fs-4">
                                    <MdArrowRightAlt />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscussionsDetailsLayout;
