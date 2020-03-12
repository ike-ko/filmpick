import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav } from 'react-bootstrap';

import RegisterContainer from '../containers/RegisterContainer';
import LoginContainer from '../containers/LoginContainer';

export default class Navigation extends Component {
    constructor() {
        super();

        this.state = {
            isLoginVisible: false,
            isRegisterVisible: false
        };
    }

    showRegister = () => {
        this.setState({
            isRegisterVisible: true
        });
    }

    hideRegister = () => {
        this.setState({
            isRegisterVisible: false
        });
    }

    showLogin = () => {
        this.setState({
            isLoginVisible: true
        });
    }

    hideLogin = () => {
        this.setState({
            isLoginVisible: false
        });
    }

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
                    FilmPick
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link eventKey="1" as={Link} to="/">Search</Nav.Link>  {/* Need eventKey to make collapseOnSelect work */}
                        <Nav.Link eventKey="2" as={Link} to="/favorites">Favorites</Nav.Link>
                        <Nav.Link eventKey="3" as={Link} to="/recommendations">Recommendations</Nav.Link>
                    </Nav>
                    { this.props.isLoggedIn 
                        ? 
                        <Nav>
                            {/* <Nav.Link>Account</Nav.Link> */}
                            <Nav.Link eventKey="4" onClick={() => this.props.setLogin(false)}>Log Out</Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link eventKey="5" onClick={this.showRegister}>Register</Nav.Link>
                            <Nav.Link eventKey="6" onClick={this.showLogin}>Log In</Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>

                <RegisterContainer
                    isVisible={this.state.isRegisterVisible}
                    hideRegister={this.hideRegister}
                />

                <LoginContainer
                    isVisible={this.state.isLoginVisible}
                    hideLogin={this.hideLogin}
                />
            </Navbar>
        )
    }
}