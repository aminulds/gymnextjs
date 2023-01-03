'use client';
import { MdSpaceDashboard, MdForum, MdWaterDrop, MdFitnessCenter, MdChecklistRtl, MdExpandMore, MdSettings } from 'react-icons/md';
import { IoMdNutrition } from 'react-icons/io';
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
    const router = usePathname();

    useEffect(() => {
        if (router === '/') {
            setPageIcon(<MdSpaceDashboard />);
        } else if (router === '/discussions') {
            setPageIcon(<MdForum />);
        } else if (router === '/peds') {
            setPageIcon(<MdWaterDrop />);
        } else if (router === '/nutrition') {
            setPageIcon(<IoMdNutrition />);
        } else if (router === '/training') {
            setPageIcon(<MdFitnessCenter />);
        } else if (router === '/progress') {
            setPageIcon(<MdChecklistRtl />);
        } else if (router === '/settings') {
            setPageIcon(<MdSettings />);
        }
    }, [router]);

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
                        <Sidebar />

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
