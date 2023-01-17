import Link from 'next/link';
import React from 'react';
import { uploadData } from '../../data';

const Details = () => {
    const discussionsData = uploadData.filter((eventItem) => {
        return eventItem.type === 'discussions';
    });

    return (
        <div className="discussionDetails">
            {/* Item Details */}
            {discussionsData.map((item) => (
                <>
                    {item.items.slice(0, 1).map((item) => (
                        <div className="card p-3">
                            <div className="card-body">
                                <div className="card-title">
                                    <h5 className="link">{item.title}</h5>
                                    {item.categoryIcon && <span className="categoryIcon">{item.categoryIcon}</span>}
                                </div>

                                <p className="card-text">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </>
            ))}

            {/* Comment Box */}
            <div className="detailSection mt-4">
                <h5>Leave a message</h5>
                <div class="form-floating ">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
            </div>
        </div>
    );
};

export default Details;
