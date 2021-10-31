import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useOffers from '../../Hooks/useOffers';
import Offer from '../Offer/Offer';


const Offers = () => {
    const { offers } = useOffers()
    return (
        <div id='offers'>
            <Container>
                <h1 className='offers-section' style={{ fontWeight: '800', color: 'Olive' }}>Here Some Place To Visit</h1>
                <Row xs={1} md={2} lg={3} className='g-4 mt-3'>
                    {
                        offers?.map(offer => <Offer
                            key={offer.key}
                            offer={offer}
                        >
                        </Offer>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Offers;