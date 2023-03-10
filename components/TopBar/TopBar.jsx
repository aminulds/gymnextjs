import Image from 'next/image';
import React from 'react';
import NavToogler from '../Input/NavToogler';
import PageLabel from './PageLabel';
import imgLogo from '/public/assets/images/logo/logo.png';
import { BsFillBellFill } from 'react-icons/bs';
import Notification from './Notification';
import Link from 'next/link';

const icons = [<BsFillBellFill />];

const TopBar = ({ labelTitle }) => {
    return (
        <div className="topBar sticky-top">
            <div className="topBarLogo">
                <NavToogler />
                <Link href="/users">
                    <Image className="logo img-fluid w-75" src={imgLogo} alt="Logo" />
                </Link>
                <PageLabel labelTitle={labelTitle} />
            </div>

            <Notification iconName={icons[0]} notificatinCount="20" />
        </div>
    );
};

export default TopBar;
