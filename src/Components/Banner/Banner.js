import React from 'react';
import img1 from '../../Images/ashraful-haque-akash-DceJ5coGPEU-unsplash.jpg';
import img2 from '../../Images/eilis-garvey-I4bkA9w-9Ds-unsplash.jpg';
import img3 from '../../Images/eurico-craveiro-EzM8_ym_jlQ-unsplash.jpg'
import { Carousel } from 'react-bootstrap';



const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height='400px'
                    src={img1}
                    alt="/"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height='400px'
                    src={img2}
                    alt="/"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height='400px'
                    src={img3}
                    alt="/"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;





