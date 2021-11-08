import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';





const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="white" text="dark">
            <Container>
                <Navbar.Brand as={HashLink} to="/home" style={{
                    fontWeight: "700",
                    fontSize: "33px",
                    fontStyle: "italic"
                }}>Tour Bees</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav.Link as={HashLink} to="/home#home" style={{ fontWeight: '500' }}>Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#offers" style={{ fontWeight: '500' }}>Offer</Nav.Link>
                    <Nav.Link as={HashLink} to="/contacts" style={{ fontWeight: '500' }}>Contacts</Nav.Link>
                    {
                        user?.email ?
                            <>
                                <Nav.Link as={HashLink} to="/manageorders">Manage All Orders</Nav.Link>
                                <Nav.Link as={HashLink} to="/addoffers">Add A New Service</Nav.Link>
                            </> :
                            <>
                            </>
                    }
                    {
                        user?.email ?
                            <Button onClick={logOut} variant="light" style={{ fontWeight: '500' }}>Log out</Button> :
                            <Nav.Link className='text-black' as={HashLink} to="/register" style={{ fontWeight: '500' }}>Sign In</Nav.Link>
                    }
                    {/* <Nav.Link as={HashLink} to ="/register">Login</Nav.Link> */}
                    <Navbar.Text>
                        <a style={{ textDecoration: 'none', color: 'black' }} href="#login">Name: {user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;