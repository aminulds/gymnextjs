import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bannerIMG from '/public/assets/images/banner/homBanner.png';
import { CgGym } from 'react-icons/cg';

const Banner = () => {
    return (
        <div className="banner py-4 py-md-5" id="banner">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4 flex-row-reverse">
                    <div className="col d-flex align-items-center justify-content-center">
                        <div className="bannerRight">
                            <Image className="img-fluid w-75" src={bannerIMG} />
                        </div>
                    </div>
                    <div className="col d-flex align-items-center">
                        <div className="bannerLeft">
                            <div className="border-bottom">
                                <h4 className="text-uppercase">Are You Ready?</h4>
                                <h1 className="text-uppercase">Join the best gym today</h1>
                            </div>
                            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos est quidem quod ab sequi ipsum fugiat eaque alias optio saepe?</p>
                            <Link className="btn btnPrimary mt-3 d-flex align-items-center justify-content-center" href="auth/signup">
                                Join Now
                                <span className="ms-2">
                                    <CgGym />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
