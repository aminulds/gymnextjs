import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { GoReply } from 'react-icons/go';

const Comments = ({ img, usrName, time, love, text, replyCount }) => {
    return (
        <div className="card comments">
            <div className="d-flex align-items-center mb-3">
                <Image className="img-fluid rounded-circle me-3" src={img} alt={usrName} width={60} height={60} />
                <div className="">
                    <p className="mb-0">{usrName}</p>
                    <p className="text-muted mb-0">{time} ago</p>
                </div>
            </div>

            <p>{text}</p>

            <div className="d-flex align-items-center justify-content-around">
                <span className="text-muted">
                    <AiFillHeart /> {love}
                </span>
                <Link href="#" className="link">
                    <GoReply /> Reply
                </Link>
                {replyCount && <span className="text-muted">Replies ({replyCount})</span>}
            </div>
        </div>
    );
};

export default Comments;
