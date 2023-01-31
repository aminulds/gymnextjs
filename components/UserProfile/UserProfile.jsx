import Image from 'next/image';
import React from 'react';
import usrCover from '/public/images/users/cover.png';
import userProfile from '/public/images/users/user-profile.png';
import { MdLabelImportant, MdBadge, MdOutlinePermContactCalendar, MdMail, MdPriceCheck, MdRestartAlt } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';

const UserProfile = () => {
    return (
        <div className="card userProfile">
            <Image className="card-img-top" src={usrCover} />
            <div className="d-flex align-items-center justify-content-center">
                <Image className="rounded-circle profileImage" src={userProfile} width={150} height={150} />
            </div>

            <div className="card-body mt-4 px-0">
                <div className="d-flex align-items-center justify-content-center flex-column pb-4 border-bottom">
                    <h6 className="userName">Jeslin Smith</h6>
                    <div>
                        <span className="me-2 icon">
                            <MdLabelImportant />
                        </span>
                        <span className="membertType">Membership Type</span>
                    </div>
                </div>

                <div className="px-4 pt-3 pb-4 border-bottom">
                    <div className="d-flex align-items-center justify-content-between pb-3">
                        <h6 className="mb-0">Account Details</h6>
                        <button className="btn text-primary">
                            <FaUserEdit />
                        </button>
                    </div>

                    <div className="row g-3 row-cols-2">
                        <div className="col">
                            <div className="text-nowrap">
                                <span className="me-2 text-nowrap">
                                    <MdBadge />
                                </span>
                                <span>Jeslin Smith</span>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <div className="text-nowrap">
                                <span className="me-2">
                                    <MdOutlinePermContactCalendar />
                                </span>
                                <span>21/08/2022</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="text-nowrap">
                                <span className="me-2">
                                    <MdMail />
                                </span>
                                <span className="text-nowrap">email@address.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <div className="d-flex align-items-center justify-content-between pb-3">
                        <h6 className="mb-0">Account Status</h6>
                    </div>

                    <div className="row g-3 row-cols-2">
                        <div className="col">
                            <div className="text-nowrap text-success">
                                <span className="me-2 text-nowrap">
                                    <MdPriceCheck />
                                </span>
                                <span>Active</span>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <div className="text-nowrap">
                                <span className="me-2">
                                    <MdRestartAlt />
                                </span>
                                <span>21/08/2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
