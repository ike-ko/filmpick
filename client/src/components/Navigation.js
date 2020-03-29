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
            isRegisterVisible: false,
            redirectUrl: '',
            isExpanded: false
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick);
    }

    handleClick = (e) => {
        if (this.toggleRef && !this.toggleRef.contains(e.target))
            this.closeNavbar();
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

    handleLogin = (url = '') => {
        this.setState({
            redirectUrl: url
        });
        this.showLogin();
    }

    openNavbar = () => {
        this.setState({
            isExpanded: true
        })
    }

    closeNavbar = () => {
        this.setState({
            isExpanded: false
        })
    }

    toggleNavbar = () => {
        this.setState((prevState) => ({
            isExpanded: !prevState.isExpanded
        }))
    }

    render() {
        const { isHome } = this.props;

        return (
            <Navbar
                collapseOnSelect
                bg="primary"
                variant="dark"
                expand="lg"
                expanded={this.state.isExpanded}
                fixed="top"
                className='d-flex navbar-gradient'
                onSelect={this.closeNavbar}
            >
                {<Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={this.toggleNavbar} ref={node => this.toggleRef = node}/>}
                <Navbar.Brand as={Link} to="/" className={!isHome ? 'logo-filmpick navbar-brand-filmpick mx-auto' : 'logo-filmpick navbar-brand-filmpick mx-auto hidden-element'}>
                    Filmpick
                </Navbar.Brand>
                <Navbar.Brand className='d-block d-sm-none ml-4' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        { this.props.resetSearch 
                            ? <Nav.Link className='nav-link' onClick={this.props.resetSearch}>Search</Nav.Link>
                            : <Nav.Link className='nav-link' as={Link} to="/search">Search</Nav.Link>
                        }
                        { this.props.isLoggedIn 
                            ?
                            <>
                                <Nav.Link className='nav-link' as={Link} to="/favorites">Favorites</Nav.Link>
                                <Nav.Link className='nav-link' as={Link} to="/recommendations">Recommendations</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link className='nav-link' onClick={() => this.handleLogin('/favorites')}>Favorites</Nav.Link>
                                <Nav.Link className='nav-link' onClick={() => this.handleLogin('/recommendations')}>Recommendations</Nav.Link>
                            </>
                        }
                    </Nav>
                    { this.props.isLoggedIn 
                        ? 
                        <Nav>
                            <Nav.Link className='nav-link' onClick={this.handleLogOut}>Log Out</Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link className='nav-link' onClick={this.showRegister}>Register</Nav.Link>
                            <Nav.Link className='nav-link' onClick={this.showLogin}>Log In</Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>

                <RegisterContainer
                    isVisible={this.state.isRegisterVisible}
                    hideRegister={this.hideRegister}
                    showLogin={this.showLogin}
                />

                <LoginContainer
                    isVisible={this.state.isLoginVisible}
                    hideLogin={this.hideLogin}
                    redirectUrl={this.state.redirectUrl}
                    showRegister={this.showRegister}
                />

            </Navbar>
        )
    }
}