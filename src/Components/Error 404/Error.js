import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error-section'>
            <h1>ERROR 404</h1>
            <p>This Is not the Page you are looking For!!!</p>
            <Link to='/home' className='text-danger' style={{ textDecoration: 'none' }}>Go Home</Link>
        </div>
    );
};

export default Error;