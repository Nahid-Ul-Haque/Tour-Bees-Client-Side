import { useEffect, useState } from 'react';

const useOffers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('/offer.json')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])

    return (
        {
            offers
        }
    );
};

export default useOffers;