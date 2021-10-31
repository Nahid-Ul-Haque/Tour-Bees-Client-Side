import React from 'react';
import { Row } from 'react-bootstrap';
import './Gallery.css'

const Gallery = () => {
    return (
        <section>
            <Row>
                <div className='gallery'>
                    <h1>
                        <span className='G'>G</span>
                        <span className='A'>A</span>
                        <span className='L'>L</span>
                        <span className='L'>L</span>
                        <span className='E'>E</span>
                        <span className='R'>R</span>
                        <span className='Y'>Y</span>
                    </h1>
                </div>
            </Row>
            <div>
                <Row xs={1} md={2} lg={3} className='g-4 mt-3'>
                    <div className='gallery-box'>
                        <img height='200px' src="https://i.ibb.co/1G4WYqq/g-1.jpg" alt="/" />
                    </div>
                    <div className='gallery-box'>
                        <img height='200px' src="https://i.ibb.co/VQ3QFgJ/g-2.jpg" alt="/" />
                    </div>
                    <div className='gallery-box'>
                        <img height='200px' src="https://i.ibb.co/YDFBNhj/g-4.jpg" alt="/" />
                    </div>
                    <div className='gallery-box'>
                        <img height='200px' src="https://i.ibb.co/CBMpDDg/g-6.jpg" alt="/" />
                    </div>
                    <div className='gallery-box'>
                        <img height='200px' src="https://i.ibb.co/dJWTGxQ/g-7.jpg" alt="/" />
                    </div>
                    <div className='gallery-box'>
                        <img height='200px' src="https://i.ibb.co/GnxcKLs/g-9.jpg" alt="/" />
                    </div>
                    <div className='gallery-box'>
                        <img height='200px' src="https://i.ibb.co/5RSRGX6/p-2.jpg" alt="/" />
                    </div>
                    <div className='gallery-box'>
                        <img height='200px' src="https://i.ibb.co/J5M07q7/p-4.jpg" alt="/" />
                    </div>
                    <div className='gallery-box'>
                        <img height='200px' src="https://i.ibb.co/6chqcSd/p-5.jpg" alt="/" />
                    </div>
                </Row>
            </div>
        </section>
    );
};

export default Gallery;