import Image from 'next/image';
import React from 'react';
import NavToogler from '../Input/NavToogler';
import PageLabel from './PageLabel';
import imgLogo from '/public/images/logo/logo.png';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsFillBellFill } from 'react-icons/bs';
import Notification from './Notification';
import Link from 'next/link';

const icons = [<MdSpaceDashboard />, <BsFillBellFill />];

const TopBar = ({ pageIcon, labelTitle }) => {
    return (
        <div className="topBar">
            <div className="topBarLogo">
                <NavToogler />
                <Link href="/">
                    <Image className="logo img-fluid w-75" src={imgLogo} alt="Logo" />
                </Link>
                <PageLabel pageIcon={pageIcon} labelTitle={labelTitle} />
            </div>

            <Notification iconName={icons[1]} notificatinCount="20" />
        </div>
    );
};

export default TopBar;
