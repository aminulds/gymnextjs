'use client';
import { useEffect, useState } from 'react';
import { MdSpaceDashboard } from 'react-icons/md';

// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar/Sidebar';
// Custom scss
import '/styles/globals.scss';
import TopBar from '../components/TopBar/TopBar';

export default function RootLayout({ children }) {
    const [pageIcon, setPageIcon] = useState(<MdSpaceDashboard />);
    const [pagePath, setPagePath] = useState('/');

    const PageLabelHandler = (icon, path) => {
        setPageIcon(icon);
        setPagePath(path);
    };

    return (
        <html>
            <head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link rel="icon" href="/images/logo/favicon.png" />
            </head>

            <body>
                <div className="container-fluid px-md-4">
                    {/* Top Bar */}
                    <TopBar pageIcon={pageIcon} labelTitle={`${pagePath === '/' ? 'Home' : pagePath.split('/')[1]}`} />

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
