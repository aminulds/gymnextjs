'use client';

import Image from 'next/image';
import Link from 'next/link';
import { uploadData } from './data';

const Home = () => {
    const latestUpload = uploadData.filter((latesItems) => {
        return latesItems.type === 'latestUpload';
    });

    const eventData = uploadData.filter((eventItem) => {
        return eventItem.type === 'event';
    });

    return (
        <div className="col-12 col-md-9 col-lg-10">
            <div className="row">
                <div className="col-lg-6">
                    <div className="sectionTitle d-flex align-items-center justify-content-between">
                        <h4>Latest Uploads</h4>
                    </div>

                    {latestUpload.map((item) => (
                        <>
                            {item.items.map((item) => (
                                <div className="card p-3 p-lg-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="card-title">{item.title}</h6>
                                        <span className="bg-primary p-2 text-white d-flex align-items-center justify-content-center rounded-circle">{item.categoryIcon}</span>
                                    </div>
                                    <p>{item.description}</p>
                                    <Image className="img-fluid" src={item.image} />
                                </div>
                            ))}
                        </>
                    ))}
                </div>

                <div className="col-lg-6">
                    <div className="sectionTitle d-flex align-items-center justify-content-between">
                        <h4>Upcoming Events</h4>
                        <Link href="#">All Events</Link>
                    </div>

                    <div className="row">
                        {eventData.map((item) => (
                            <>
                                {item.items.map((item) => (
                                    <div className="col">
                                        <div className="card p-3 p-lg-4">
                                            <Image className="img-fluid" src={item.image} />
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="card-title">{item.title}</h6>
                                                <span>{item.categoryIcon}</span>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
