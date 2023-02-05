import React from 'react';
import { uploadData } from '../../data';
import { MdArrowRightAlt } from 'react-icons/md';
import Link from 'next/link';
import Card from '../../../../components/Card/Card';

const PedsDetailsLayout = ({ children }) => {
    let popularItemLimit = 0;

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
                                    {item.items.map((item) => (
                                        <>
                                            {item.category === 'nutrition' && (popularItemLimit += 1) <= 4 && (
                                                <div className="col" key={item.id}>
                                                    <Card img={item.image} title={item.title} url="/users/nutrition/details" description={item.description} categoryIcon={item.categoryIcon} />
                                                </div>
                                            )}
                                        </>
                                    ))}
                                </>
                            ))}
                        </div>

                        <div className="mt-4 d-flex align-items-center justify-content-center">
                            <Link href="/users/nutrition" className="btn btnPrimary rounded-pill d-flex align-items-center justify-content-around ">
                                Latest Nutrition
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

export default PedsDetailsLayout;
