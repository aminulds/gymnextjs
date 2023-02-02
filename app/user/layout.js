'use client';
import { useState } from 'react';
import { MdSpaceDashboard } from 'react-icons/md';

// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap js
import bootstrapJS from 'bootstrap/dist/js/bootstrap.bundle';
// Custom scss
import '/styles/globals.scss';
import TopBar from '../../components/TopBar/TopBar';
import { usePathname } from 'next/navigation';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function UserLayout({ children }) {
    const router = usePathname();
    const [pageIcon, setPageIcon] = useState(<MdSpaceDashboard />);

    const PageLabelHandler = (icon) => {
        setPageIcon(icon);
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
                    <TopBar labelTitle={`${router === '/' ? 'Home' : router.replaceAll('/', ' > ')}`} />

                    <div className="row pt-4">
                        {/* Sidebar */}
                        <Sidebar PageLabelHandler={PageLabelHandler} />
                        {/* Main Content */}
                        {children}
                    </div>
                </div>

                {/* Footer */}
                <Footer />

                {/* Bootstrap JS */}
                <Script src={bootstrapJS} />
            </body>
        </html>
    );
}
