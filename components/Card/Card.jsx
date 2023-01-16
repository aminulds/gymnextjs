import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdArrowForward, MdChat } from 'react-icons/md';
import { RiTimerFlashFill } from 'react-icons/ri';
import { BiUserPin } from 'react-icons/bi';

const Card = ({ img, title, categoryIcon, description, event }) => {
    return (
        <div className="card">
            <Image className="img-fluid card-img-top" src={img} />

            <div className="card-body">
                <div className="card-title">
                    <Link href="#" className="link text-truncate">
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
                        <Link className="link" href="#">
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
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
