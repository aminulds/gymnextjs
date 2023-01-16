'use client';
import { useEffect, useState } from 'react';
import { MdSpaceDashboard } from 'react-icons/md';

// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar/Sidebar';
// Custom scss
import '/styles/globals.scss';
import TopBar from '../components/TopBar/TopBar';
import { usePathname } from 'next/navigation';
import Footer from '../components/Footer/Footer';

export default function RootLayout({ children }) {
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
                    <TopBar pageIcon={pageIcon} labelTitle={`${router === '/' ? 'Home' : router.split('/')[1]}`} />

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
                {useEffect(() => {
                    import('bootstrap/dist/js/bootstrap');
                }, [])}
            </body>
        </html>
    );
}
