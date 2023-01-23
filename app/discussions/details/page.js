import { MdSend } from 'react-icons/md';
import React from 'react';
import Button from '../../../components/Input/Button';
import { uploadData } from '../../data';
import Comments from './Comments';
import { discussionsDetailsData } from './data';

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
                <h5 className="title">Leave a Comments</h5>
                <div class="form-floating">
                    <textarea className="form-control commentsBox" placeholder="Leave a comment here" id="floatingTextarea2" rows="8"></textarea>
                    <label htmlFor="floatingTextarea2">Start typing...</label>
                    <Button className="btnSend" type="button" id="commentSend" text="Send" icon={<MdSend />} />
                </div>
            </div>

            {/* Show Comments */}
            <div className="detailSection mt-4">
                <h5 className="title">Comments ({discussionsDetailsData.length})</h5>

                <div className="">
                    {discussionsDetailsData.map((item) => (
                        <div key={item.id} className="mt-4">
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
    );
};

export default Details;
