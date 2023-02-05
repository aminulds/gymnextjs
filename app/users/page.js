import Link from 'next/link';

import { uploadData } from './data';
import { MdArrowForward } from 'react-icons/md';
import Card from '../../components/Card/Card';

const Home = () => {
    const latestUpload = uploadData.filter((latesItems) => {
        return latesItems.type === 'latestUpload';
    });

    return (
        <div className="col-12 col-lg-10">
            <div className="mainContent">
                <div className="row mb-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="sectionTitle">
                            <h4 className="title">Latest Uploads</h4>
                        </div>
                        {latestUpload.map((item) => (
                            <>
                                {item.items.map((item) => (
                                    <Card key={item.id} img={item.image} title={item.title} description={item.description} categoryIcon={item.categoryIcon} />
                                ))}
                            </>
                        ))}
                    </div>

                    <div className="col-lg-8">
                        <div className="sectionTitle">
                            <h4 className="title">Upcoming Events</h4>
                            <Link className="link" href="/users/events">
                                All Events
                                <span className="icon">
                                    <MdArrowForward />
                                </span>
                            </Link>
                        </div>

                        <div className="row g-4 row-cols-1 row-cols-md-2">
                            {uploadData.map((item) => (
                                <>
                                    {item.type === 'event' && (
                                        <>
                                            {item.items.slice(0, 2).map((item) => (
                                                <div className="col" key={item.id}>
                                                    <Card img={item.image} url="/users/events/details" title={item.title} description={item.description} categoryIcon={item.categoryIcon} event={true} />
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                </div>

                {/* lASTEST Videos */}
                <div className="sectionTitle">
                    <h4 className="title">Latest Videos</h4>
                    <Link className="link" href="/users/videos">
                        All Videos
                        <span className="icon">
                            <MdArrowForward />
                        </span>
                    </Link>
                </div>

                <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-5">
                    {uploadData.map((item) => (
                        <>
                            {item.type === 'video' && (
                                <>
                                    {item.items.slice(0, 8).map((item) => (
                                        <div className="col" key={item.id}>
                                            <Card img={item.image} title={item.title} url="/users/videos/details" description={item.description} categoryIcon={item.categoryIcon} />
                                        </div>
                                    ))}
                                </>
                            )}
                        </>
                    ))}
                </div>

                {/* POPULAR Discussions */}
                <div className="sectionTitle">
                    <h4 className="title">Popular Discussions</h4>
                    <Link className="link" href="/users/discussions">
                        All Discussions
                        <span className="icon">
                            <MdArrowForward />
                        </span>
                    </Link>
                </div>

                <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-5">
                    {uploadData.map((item) => (
                        <>
                            {item.type === 'discussions' && (
                                <>
                                    {item.items.slice(0, 8).map((item) => (
                                        <div className="col" key={item.id}>
                                            <Card img={item.image} title={item.title} url="/users/discussions/details" description={item.description} categoryIcon={item.categoryIcon} />
                                        </div>
                                    ))}
                                </>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
