import React from 'react'
import './nav-bar.css';

import {Container, Nav, Navbar} from 'react-bootstrap';


export default class NavBar extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <React.Fragment>
                <Navbar expand="lg" bg="dark" variant="dark" className='navigation-bar'>
                    <Container>
                        <Navbar.Brand className="navigation-links" href="/">Happy Goats</Navbar.Brand>
                        <Nav>
                            <Nav.Link className="navigation-links" href="/routeTo">About Us</Nav.Link> 
                        </Nav>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}