import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <html>
            <head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </head>

            <body>
                <div className="auth py-4 py-md-0">{children}</div>
            </body>
        </html>
    );
};

export default AuthLayout;
