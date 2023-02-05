'use client';
import React from 'react';
import Comments from '../../../components/Comments/Comments';
import UserProfile from '../../../components/UserProfile/UserProfile';
import { commentsDetailsData } from './commentsData';
import { IoMdNutrition } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';

const Peds = () => {
    return (
        <div className="col-12 col-lg-10">
            <div className="mainContent userPage">
                <div className="row g-4">
                    <div className="col-12 col-md-4">
                        <UserProfile />
                    </div>

                    <div className="col-12 col-md-8">
                        <div className="profileComments">
                            {commentsDetailsData.map((item) => (
                                <div key={item.id} className="mb-4">
                                    <div className="commentTitle flex-column">
                                        <h5>Post Title here</h5>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="me-5">
                                                <span className="me-2">
                                                    <FaUserAlt />
                                                </span>{' '}
                                                <span className="fst-italic">username</span>
                                            </div>
                                            <div>
                                                <span className="me-2">
                                                    <IoMdNutrition />
                                                </span>
                                                Nutrition
                                            </div>
                                        </div>
                                    </div>
                                    <Comments img={item.img} usrName={item.usrName} time={item.time} love={item.love} text={item.text} replyCount={item.reply.length} />
                                    {item.reply && (
                                        <div className="mt-3 ms-4 ms-md-5">
                                            {item.reply.map((replyItem) => (
                                                <div key={replyItem.id} className="mt-2">
                                                    <Comments img={replyItem.img} usrName={replyItem.usrName} time={replyItem.time} love={replyItem.love} text={replyItem.text} />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Peds;
