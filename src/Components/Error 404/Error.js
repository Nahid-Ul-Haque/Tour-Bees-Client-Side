import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div>
            <div style={{ marginTop: '100px' }}>
                <div className='error-banner'>
                    <div className="overlay">
                        <div className='d-flex justify-content-center '>
                            <div>
                                <Link to='/home'><button className='error-btn'>Go Back</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;