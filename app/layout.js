'use client';

import { useEffect } from 'react';
// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
// Custom scss
import '/styles/globals.scss';
import TopBar from '../components/TopBar/TopBar';

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link rel="icon" href="/images/logo/favicon.png" />
            </head>

            <body>
                <div className="container-fluid px-md-4">
                    {/* Top Bar */}
                    <TopBar />

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
