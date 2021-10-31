import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useOffers from '../../Hooks/useOffers';
import Footer from '../Shared/Footer/Footer';

const OfferDetails = () => {
    const { detailsId } = useParams();
    const { offers } = useOffers();
    const [singleOffer, setSingleOffer] = useState([]);

    useEffect(() => {
        if (offers.length > 0) {
            const Details = offers?.find((service) => service.key === Number(detailsId));
            setSingleOffer(Details);

        }
    }, [offers, detailsId]);


    return (
        <div>
            <img height='300px' src={singleOffer.img} alt="" />
            <h2 style={{ color: 'MidnightBlue' }}>{singleOffer.name}</h2>
            <h5>{singleOffer.description}</h5>
            <br />
            <br />
            <Link style={{ textDecoration: 'none', color: 'DarkMagenta', fontSize: '30px', fontWeight: '800' }} to='/home'>Back</Link>
            <Footer></Footer>
        </div>
    );
};

export default OfferDetails;