'use client';
import Image from 'next/image';
import React from 'react';
import { reviewData } from './reviewData';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const Review = () => {
    const ratingLimit = [];

    const ptintRating = () => {
        return <AiFillStar />;
    };

    const ratingHanlder = (rating) => {
        let pt = '';
        for (let i = 0; i < rating; i++) {
            ptintRating();
        }
        return pt;
    };

    return (
        <div className="review py-4 py-md-5" id="review">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Review</h2>
                    <p>We Can Help You To Body Fitness</p>
                </div>

                <div className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                                {reviewData.slice(0, 3).map((item) => (
                                    <div key={item.id} className="col">
                                        <div className="place-item">
                                            <div className="card shadow-sm border-0">
                                                <div className="profile img-wrap">
                                                    <Image src={item.img} className="img-fluid rounded-circle w-25" alt={item.name} />
                                                </div>
                                                <div className="card-body">
                                                    <div className="reviewer">
                                                        <p className="name">{item.name}</p>
                                                    </div>
                                                    <div className="time-star">
                                                        <div className="star">
                                                            {[...Array(Math.floor(item.rating))].map((star) => (
                                                                <BsStarFill />
                                                            ))}

                                                            {item.rating - Math.floor(item.rating) !== 0 ? <BsStarHalf /> : ''}
                                                        </div>
                                                    </div>
                                                    <p className="review-text">{item.comment}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                                {reviewData.slice(3, 6).map((item) => (
                                    <div key={item.id} className="col">
                                        <div className="place-item">
                                            <div className="card shadow-sm border-0">
                                                <div className="profile img-wrap">
                                                    <Image src={item.img} className="img-fluid rounded-circle w-25" alt={item.name} />
                                                </div>
                                                <div className="card-body">
                                                    <div className="reviewer">
                                                        <p className="name">{item.name}</p>
                                                    </div>
                                                    <div className="time-star">
                                                        <div className="star">
                                                            {[...Array(Math.floor(item.rating))].map((star) => (
                                                                <BsStarFill />
                                                            ))}

                                                            {item.rating - Math.floor(item.rating) !== 0 ? <BsStarHalf /> : ''}
                                                        </div>
                                                    </div>
                                                    <p className="review-text">{item.comment}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
