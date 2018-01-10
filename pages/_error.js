import React from 'react';
import Link from 'next/link'


const errorPage = () => (
    <div>
        <h1>Oops something went wronng</h1>
        <p>Go to <Link href="/"><a>Go back</a></Link></p>
        
        
    </div>
);

export default errorPage;