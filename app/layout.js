'use client';
import { MdSpaceDashboard, MdForum, MdWaterDrop, MdFitnessCenter, MdChecklistRtl, MdExpandMore, MdSettings, MdDashboard } from 'react-icons/md';
import { IoMdNutrition } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
// Custom scss
import '/styles/globals.scss';
import TopBar from '../components/TopBar/TopBar';

export default function RootLayout({ children }) {
    const [pageIcon, setPageIcon] = useState(<MdSpaceDashboard />);

    let router = usePathname();

    const PageLabelHandler = (icon) => {
        setPageIcon(icon);
    };

    //console.log(pageIcon);

    return (
        <html>
            <head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link rel="icon" href="/images/logo/favicon.png" />
            </head>

            <body>
                <div className="container-fluid px-md-4">
                    {/* Top Bar */}
                    <TopBar pageIcon={pageIcon} labelTitle={`${router === '/' ? 'Home' : router.split('/')[1]}`} />

                    <div className="row pt-3">
                        {/* Sidebar */}
                        <Sidebar PageLabelHandler={PageLabelHandler} />
                        {/* Main Content */}
                        {children}
                    </div>
                </div>

                {/* Bootstrap JS */}
                {useEffect(() => {
                    import('bootstrap/dist/js/bootstrap');
                }, [])}
            </body>
        </html>
    );
}
