import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Offer.css'

const Offer = (props) => {
    const { name, img, description, key } = props.offer || {};
    return (
        <div>
            <Col>
                <Card className='offer-card'>
                    <Card.Img className='offer-img' height='250px' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-black'>{name}</Card.Title>
                        <Card.Text className='text-black'>
                            {description.slice(0, 100)}
                        </Card.Text>
                        <Link to={`/details/${key}`}>
                            <button className='offer-btn'>Click More</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Offer;