import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { packageData } from './packageData';

const Package = () => {
    return (
        <div className="packages py-4 py-md-5" id="package">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Packages</h2>
                    <p>We Can Help You To Make This Tour Memorable</p>
                </div>
                <div id="packageID" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#packageID" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#packageID" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                                {packageData.slice(0, 3).map((item) => (
                                    <div key={item.id} className="col">
                                        <div className="package-item">
                                            <div className="card shadow-sm border-0">
                                                <div className="img-wrap">
                                                    <Image src={item.img} className="img-fluid card-img-top" alt={item.title} />
                                                </div>
                                                <div className="card-body">
                                                    <div className="address d-flex align-items-center justify-content-center">
                                                        <h4 className="card-title">{item.title}</h4>
                                                    </div>
                                                    <div className="price-time">
                                                        <div className="price">
                                                            ${item.cost} / <span className="text-muted">Month</span>
                                                        </div>
                                                    </div>
                                                    <Link href="auth/signup" className="btn btnPrimary d-flex align-items-center justify-content-center fw-bold">
                                                        Book
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                                {packageData.slice(3, 6).map((item) => (
                                    <div key={item.id} className="col">
                                        <div className="package-item">
                                            <div className="card shadow-sm border-0">
                                                <div className="img-wrap">
                                                    <Image src={item.img} className="img-fluid card-img-top" alt={item.title} />
                                                </div>
                                                <div className="card-body">
                                                    <div className="address d-flex align-items-center justify-content-center">
                                                        <h4 className="card-title">{item.title}</h4>
                                                    </div>
                                                    <div className="price-time">
                                                        <div className="price">
                                                            ${item.cost} / <span className="text-muted">Month</span>
                                                        </div>
                                                    </div>
                                                    <Link href="auth/signup" className="btn btnPrimary d-flex align-items-center justify-content-center fw-bold">
                                                        Book
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;
