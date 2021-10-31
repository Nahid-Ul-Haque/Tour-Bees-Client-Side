import { faGlobeAsia, faHotel, faPlane, faRoute, faUserShield, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    return (
        <section>
            <div className='services'>
                <h1>
                    <span className='S'>S</span>
                    <span className='E'>E</span>
                    <span className='R'>R</span>
                    <span className='V'>V</span>
                    <span className='I'>I</span>
                    <span className='C'>C</span>
                    <span className='E'>E</span>
                    <span className='S'>S</span>
                </h1>
            </div>
            <div>
                <Row xs={1} md={2} lg={3} className='g-4 mt-3'>
                    <div class="box">
                        <FontAwesomeIcon icon={faHotel} style={{ color: 'red', fontSize: '30px' }} />
                        <h3 style={{ fontWeight: '800' }}>affordable hotels</h3>
                        <p>Ideally set in Eindhoven, Hotel the Match features air-conditioned rooms, a bar, free WiFi and a garden. All rooms boast a flat-screen TV with cable channels and a private bathroom.</p>
                    </div>
                    <div class="box">
                        <FontAwesomeIcon icon={faUtensils} style={{ color: 'red', fontSize: '30px' }} />
                        <h3 style={{ fontWeight: '800' }}>food and drinks</h3>
                        <p>"Victuals" is the correct word for food and drink; or you can use the old English form of the word "vittles". Drink or beverages alone are sometimes referred to as "libations".</p>
                    </div>
                    <div class="box">
                        <FontAwesomeIcon icon={faUserShield} style={{ color: 'red', fontSize: '30px' }} />
                        <h3 style={{ fontWeight: '800' }}>safty guide</h3>
                        <p>Improve safety culture. My number one tip is to improve your workplace safety culture! ...
                            Avoid worker fatigue. ...
                            Hazard communication. ...
                            Take breaks to move.</p>
                    </div>
                    <div class="box">
                        <FontAwesomeIcon icon={faGlobeAsia} style={{ color: 'red', fontSize: '30px' }} />
                        <h3 style={{ fontWeight: '800' }}>around the world</h3>
                        <p>In its most general sense, the term "world" refers to the totality of entities, to the whole of reality or to everything that is. The nature of the world has been conceptualized differently in different fields. Some conceptions see the world as unique while others talk of a "plurality of worlds". </p>
                    </div>
                    <div class="box">
                        <FontAwesomeIcon icon={faPlane} style={{ color: 'red', fontSize: '30px' }} />
                        <h3 style={{ fontWeight: '800' }}>fastest travel</h3>
                        <p>An air speed record is the highest airspeed attained by an aircraft of a particular class. The rules for all official aviation records are defined by Fédération Aéronautique Internationale (FAI),[1] which also ratifies any claims. Speed records are divided into multiple classes with sub-divisions</p>
                    </div>
                    <div class="box">
                        <FontAwesomeIcon icon={faRoute} style={{ color: 'red', fontSize: '30px' }} />
                        <h3 style={{ fontWeight: '800' }}>adventures</h3>
                        <p>an undertaking usually involving danger and unknown risks a book recounting his many bold adventures. b : the encountering of risks the spirit of adventure. 2 : an exciting or remarkable experience an adventure in exotic dining They were looking for adventure.</p>
                    </div>
                </Row>
            </div>
        </section>
    );
};

export default Services;