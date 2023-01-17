import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="sticky-sm-bottom mt-4">
            <div className="container">
                <div className="mainFooter">
                    <Link href="#" className="nav-link">
                        Privacy Policy
                    </Link>
                    <div className="copyright">
                        Copyright ©
                        <Link className="nav-link px-1" href="#">
                            Dgym
                        </Link>
                        {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
