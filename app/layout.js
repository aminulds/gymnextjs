'use client';
// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap js
import bootstrapJS from 'bootstrap/dist/js/bootstrap.bundle';

// Custom scss
import '/styles/globals.scss';
import Script from 'next/script';

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
                <Script src={bootstrapJS} />
            </body>
        </html>
    );
}
