import Image from 'next/image';
import React from 'react';
import { galleryData } from './galleryData';

const Gallery = () => {
    return (
        <div className="gallery py-4 py-md-5" id="gallery">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Gallery</h2>
                    <p>We Can Help You To Body Fitness</p>
                </div>
                <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                    {galleryData.map((item) => (
                        <div key={item.id} className="col">
                            <div className="gallery-item">
                                <div className="card shadow-sm border-0">
                                    <div className="img-wrap">
                                        <Image src={item.img} className="img-fluid card-img-top" alt={item.title} />
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h5 className="card-title">{item.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
