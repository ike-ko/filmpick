import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav } from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar
                collapseOnSelect
                bg="light"
                variant="light"
                expand="lg"
                fixed="top"
            >
                <Navbar.Brand as={Link} to="/">
                    <FontAwesomeIcon icon="film" size="lg" />
                    {' '}
                    Filmpick
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Search</Nav.Link>
                        <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
                        <Nav.Link as={Link} to="/recommendations">Recommendations</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}