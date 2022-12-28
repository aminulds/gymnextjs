// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom scss
import '/styles/globals.scss';

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link rel="icon" href="/images/logo/favicon.png" />
            </head>

            <body>{children}</body>
        </html>
    );
}
