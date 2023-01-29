import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdArrowForward, MdChat, MdArrowRightAlt } from 'react-icons/md';
import { RiTimerFlashFill } from 'react-icons/ri';
import { BiUserPin } from 'react-icons/bi';
import Button from '../Input/Button';

const Card = ({ img, title, url, categoryIcon, description, event, recomended }) => {
    return (
        <div className="card">
            {img && <Image className="img-fluid card-img-top" src={img} width={1290} height={802} quality={100} alt="Post Image" />}

            <div className="card-body">
                <div className="card-title">
                    <Link href={url ? `${url}` : '#'} className="link text-truncate">
                        {title}
                    </Link>
                    {categoryIcon && <span className="categoryIcon">{categoryIcon}</span>}
                </div>

                <p className="card-text text-truncate2">{description}</p>
            </div>

            {event ? (
                <div className="card-footer">
                    <div className="dateTime">
                        <div className="date">
                            <span className="icon">
                                <FaCalendarAlt />
                            </span>
                            <span>15-2</span>
                        </div>

                        <div className="date">
                            <span className="icon">
                                <RiTimerFlashFill />
                            </span>
                            <span>11:16am</span>
                        </div>
                    </div>

                    <div className="card-link">
                        <Link className="link" href={url ? `${url}` : '#'}>
                            <span className="d-none d-sm-inline d-md-none d-lg-inline">View Event</span>
                            <span className="icon">
                                <MdArrowForward />
                            </span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="card-footer">
                    <div className="dateTime rounded-bottom">
                        <div className="date">
                            <span className="icon">
                                <MdChat />
                            </span>
                            <span>1400</span>
                        </div>

                        {recomended ? (
                            <Button type="button" id="discussion" text="Join" className="btnDiscussion rounded-pill w-50 d-flex align-items-center justify-content-around" icon={<MdArrowRightAlt />} />
                        ) : (
                            <>
                                <div className="date">
                                    <span className="icon">
                                        <BiUserPin />
                                    </span>
                                    <span>120</span>
                                </div>

                                <div className="date">
                                    <span className="icon">
                                        <FaCalendarAlt />
                                    </span>
                                    <span>15-11-2022</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
