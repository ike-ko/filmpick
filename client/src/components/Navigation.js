import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';

import RegisterContainer from '../containers/RegisterContainer';
import LoginContainer from '../containers/LoginContainer';
import { logoutUser } from '../api/user';

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

    handleLogOut = async () => {
        await logoutUser();
        this.props.setLogin(false);
    }

    render() {
        const { isHome } = this.props;

        return (
            <Navbar
                collapseOnSelect
                bg="primary"
                variant="dark"
                expand={ isHome ? "xs" : "lg"}
                fixed="top"
                className='d-flex navbar-gradient'
            >
                {<Navbar.Toggle aria-controls="responsive-navbar-nav" />}
                {!isHome && <Navbar.Brand as={Link} to="/" className={'logo-filmpick navbar-brand-filmpick mx-auto'}>
                    Filmpick
                </Navbar.Brand>}
                <Navbar.Brand className='d-block d-sm-none ml-4' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link eventKey="1" as={Link} to="/search">Search</Nav.Link>  {/* Need eventKey to make collapseOnSelect work */}
                        { this.props.isLoggedIn 
                            ?
                            <>
                                <Nav.Link eventKey="2" as={Link} to="/favorites">Favorites</Nav.Link>
                                <Nav.Link eventKey="3" as={Link} to="/recommendations">Recommendations</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link eventKey="2" onClick={this.showLogin}>Favorites</Nav.Link>
                                <Nav.Link eventKey="3" onClick={this.showLogin}>Recommendations</Nav.Link>
                            </>
                        }
                    </Nav>
                    { this.props.isLoggedIn 
                        ? 
                        <Nav>
                            {/* <Nav.Link>Account</Nav.Link> */}
                            <Nav.Link eventKey="4" onClick={this.handleLogOut}>Log Out</Nav.Link>
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