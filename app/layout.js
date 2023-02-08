'use client';
import { useEffect } from 'react';
// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom scss
import '/styles/globals.scss';

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/logo/favicon.png" />
                <title>Dgym | Home</title>
            </head>

            <body>
                {children}

                {/* Bootstrap JS */}
                {useEffect(() => {
                    require('bootstrap/dist/js/bootstrap.bundle.min.js');
                }, [])}
            </body>
        </html>
    );
}
