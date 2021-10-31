import { faMailBulk, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';


const Contacts = () => {
    return (
        <Container>
            <div>
                <h3>Get Connected</h3>
                <p>Highly-optical & modern website template created for you and your Travel prosperity.  Travel tours has all the flexibility and features.</p>
                <hr /><br /><br /><br />
                <div className='col-md-12' style={{ backgroundColor: 'black' }}>
                    <h5 className='text-white'>Our Address</h5>
                    <div>
                        <FontAwesomeIcon icon={faMapMarker} style={{ color: 'red' }} />
                        <p className='text-white'>Comfort Tower 167/B, Green Road, Dhanmondi, Dhaka, Bangladesh.</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} style={{ color: 'red' }} />
                        <p className='text-white'>58956388 & 58954726</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMailBulk} style={{ color: 'red' }} />
                        <p className='text-white'>Mail@example.com</p>
                    </div>
                </div>
                <h4 className='mt-5'>Creative Design for You</h4>
                <p>Our program is make you enjoy & explore the life. we‘ll be happy when see you and your family happy.</p>
            </div>
        </Container>
    );
};

export default Contacts;


