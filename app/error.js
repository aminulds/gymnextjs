'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="col-12 col-md-9 col-lg-10">
            <p>Something went wrong!</p>
            <button onClick={() => reset()}>Reset error boundary</button>
        </div>
    );
}
