import Image from 'next/image';
import React from 'react';
import package1 from '/public/assets/images/packages/1.png';
import package2 from '/public/assets/images/packages/2.png';
import package3 from '/public/assets/images/packages/3.png';

const Package = () => {
    return (
        <div className="packages py-4 py-md-5" id="packages">
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
                                <div className="col">
                                    <div className="place-item">
                                        <div className="card shadow-sm border-0">
                                            <div className="img-wrap">
                                                <Image src={package1} className="img-fluid card-img-top" alt="Package one" />
                                            </div>
                                            <div className="card-body">
                                                <div className="address d-flex align-items-center justify-content-center">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <p className="card-title">Paris, France</p>
                                                </div>
                                                <div className="price-time">
                                                    <div className="time">
                                                        <i className="fa-solid fa-calendar-days"></i>4 Days
                                                    </div>
                                                    <div className="price">$349</div>
                                                </div>
                                                <a href="#contact" className="btn primary-btn">
                                                    Book
                                                    <i className="fa-solid fa-plane"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="place-item">
                                        <div className="card shadow-sm border-0">
                                            <div className="img-wrap">
                                                <Image src={package2} className="img-fluid card-img-top" alt="Package two" />
                                            </div>
                                            <div className="card-body">
                                                <div className="address d-flex align-items-center justify-content-center">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <p className="card-title">Bol, Croatia</p>
                                                </div>
                                                <div className="price-time">
                                                    <div className="time">
                                                        <i className="fa-solid fa-calendar-days"></i>4 Days
                                                    </div>
                                                    <div className="price">$349</div>
                                                </div>
                                                <a href="#contact" className="btn primary-btn">
                                                    Book
                                                    <i className="fa-solid fa-plane"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="place-item">
                                        <div className="card shadow-sm border-0">
                                            <div className="img-wrap">
                                                <Image src={package3} className="img-fluid card-img-top" alt="Package three" />
                                            </div>
                                            <div className="card-body">
                                                <div className="address d-flex align-items-center justify-content-center">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <p className="card-title">Greater London, UK</p>
                                                </div>
                                                <div className="price-time">
                                                    <div className="time">
                                                        <i className="fa-solid fa-calendar-days"></i>4 Days
                                                    </div>
                                                    <div className="price">$349</div>
                                                </div>
                                                <a href="#contact" className="btn primary-btn">
                                                    Book
                                                    <i className="fa-solid fa-plane"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row g-5 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                                <div className="col">
                                    <div className="place-item">
                                        <div className="card shadow-sm border-0">
                                            <div className="img-wrap">
                                                <Image src={package1} className="img-fluid card-img-top" alt="Package one" />
                                            </div>
                                            <div className="card-body">
                                                <div className="address d-flex align-items-center justify-content-center">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <p className="card-title">Dubai, UAE</p>
                                                </div>
                                                <div className="price-time">
                                                    <div className="time">
                                                        <i className="fa-solid fa-calendar-days"></i>4 Days
                                                    </div>
                                                    <div className="price">$349</div>
                                                </div>
                                                <a href="#contact" className="btn primary-btn">
                                                    Book
                                                    <i className="fa-solid fa-plane"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="place-item">
                                        <div className="card shadow-sm border-0">
                                            <div className="img-wrap">
                                                <Image src={package2} className="img-fluid card-img-top" alt="Package one" />
                                            </div>
                                            <div className="card-body">
                                                <div className="address d-flex align-items-center justify-content-center">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <p className="card-title">New York, USA</p>
                                                </div>
                                                <div className="price-time">
                                                    <div className="time">
                                                        <i className="fa-solid fa-calendar-days"></i>4 Days
                                                    </div>
                                                    <div className="price">$349</div>
                                                </div>
                                                <a href="#contact" className="btn primary-btn">
                                                    Book
                                                    <i className="fa-solid fa-plane"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="place-item">
                                        <div className="card shadow-sm border-0">
                                            <div className="img-wrap">
                                                <Image src={package3} className="img-fluid card-img-top" alt="Package one" />
                                            </div>
                                            <div className="card-body">
                                                <div className="address d-flex align-items-center justify-content-center">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <p className="card-title">Gardens Bay, Singapore</p>
                                                </div>
                                                <div className="price-time">
                                                    <div className="time">
                                                        <i className="fa-solid fa-calendar-days"></i>4 Days
                                                    </div>
                                                    <div className="price">$349</div>
                                                </div>
                                                <a href="#contact" className="btn primary-btn">
                                                    Book
                                                    <i className="fa-solid fa-plane"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;
