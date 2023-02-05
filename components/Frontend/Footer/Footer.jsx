import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FaPhoneAlt, FaEnvelope, FaPaperPlane, FaFacebook, FaTwitter, FaPinterest, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

import logo from '/public/assets/images/logo/logo.png';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="footer-widget">
                                <Link href="/">
                                    <Image src={logo} className="foot-logo" alt="footer logo" width="150" />
                                </Link>
                                <div className="cont-info">
                                    <p>
                                        <FaPhoneAlt />
                                        <Link href="callto:+123456789">+123 456 789</Link>
                                    </p>
                                    <p>
                                        <FaEnvelope />
                                        <Link href="mailto:domain@domain.com">domain@domain.com</Link>
                                    </p>
                                    <p>
                                        <MdLocationPin />
                                        <Link href="#">3626 Fair Oaks, CA 95864</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12">
                            <div className="footer-widget">
                                <h3 className="footer-title">Subscribe Newsletter</h3>
                                <p>By subscribing you will always be updated.</p>
                                <form className="subscribe-form">
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btnPrimary" type="button">
                                            Subscribe <FaPaperPlane />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom d-flex align-items-center justify-content-between flex-column flex-sm-row">
                    <p className="copyright-text">
                        Copyright © 2022
                        <Link className="text-decoration-none mx-1" href="#">
                            DGYM
                        </Link>
                        all right reserved.
                    </p>

                    <ul className="footer-social-link">
                        <li>
                            <Link className="facebook" href="https://www.facebook.com/" target="blank">
                                <FaFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link className="twitter" href="https://www.twitter.com/" target="blank">
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link className="pinterest" href="https://www.pinterest.com/" target="blank">
                                <FaPinterest />
                            </Link>
                        </li>
                        <li>
                            <Link className="linkedin" href="https://www.linkedin.com/" target="blank">
                                <FaLinkedin />
                            </Link>
                        </li>
                        <li>
                            <Link className="youtube" href="https://www.youtube.com/" target="blank">
                                <FaYoutube />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
