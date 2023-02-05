import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '/public/assets/images/logo/logo.png';
import { MdMenuOpen } from 'react-icons/md';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container d-flex align-items-center justify-content-between">
                    <a className="navbar-brand" href="/">
                        <Image className="img-fluid" src={logo} alt="dgym logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <MdMenuOpen />
                    </button>

                    <div className="collapse navbar-collapse d-lg-flex align-items-center justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    About US
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    Privacy
                                </Link>
                            </li>

                            <li className="nav-item ms-3">
                                <Link className="nav-link btnPrimary d-flex align-items-center justify-content-center text-white px-3 py-1" href="auth/signin">
                                    Log In
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
