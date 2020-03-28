import React, { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

import Loading from './Loading';
import { loginUser } from '../api/user';
import { getFavorites } from '../api/favorites'
import { isLoginValid } from '../utils/validations';

const initialState = {
    username: "",
    password: "",
    loginError: "",
    isLoading: false
}

export default withRouter(class Login extends Component {
    constructor() {
        super();

        this.state = {
            ...initialState
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleLogin();
        }
    }

    handleCloseModal = () => {
        this.setState({
            ...initialState
        });
        this.props.hideLogin();
    }

    handleLogin = async () => {
        this.setState({
            isLoading: true
        });
        let { username, password } = this.state;
        const validationLogin = isLoginValid(username, password);

        if (validationLogin.success) {
            const loginRes = await loginUser(username, password);

            if (loginRes.data.success) {
                this.props.setLogin(true);

                const favRes = await getFavorites();
                if (favRes.data && favRes.data.favorites)
                    this.props.setFavorites(favRes.data.favorites);
                this.setState({
                    isLoading: false
                }, () => this.handleCloseModal);
                if (this.props.redirectUrl)
                    this.props.history.push(this.props.redirectUrl);
            }
            else {
                this.setState({
                    loginError: loginRes.data.message,
                    isLoading: false
                });
            }
        }
        else {
            this.setState({
                loginError: validationLogin.message,
                isLoading: false
            })
        }
    }

    render() {
        return (
            <Modal show={this.props.isVisible} onHide={this.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                            <Form.Group controlId="formLoginUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Enter username"
                                    value={this.state.username}
                                    onChange={this.handleUsernameChange}
                                    onKeyPress={this.handleKeyPress}
                                />
                            </Form.Group>
                            <Form.Group controlId="formLoginPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password" 
                                    placeholder="Enter password" 
                                    value={this.state.password} 
                                    onChange={this.handlePasswordChange}
                                    onKeyPress={this.handleKeyPress}
                                />
                            </Form.Group>
                            {this.state.isLoading && <Loading message='Logging in...' small /> }
                            {this.state.loginError && <Form.Label className="text-danger">{this.state.loginError}</Form.Label>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='mr-auto' variant="outline-secondary" onClick={() => {this.props.hideLogin(); this.props.showRegister()}}>Need an account?</Button>
                        <Button variant="outline-secondary" onClick={this.handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="secondary" onClick={this.handleLogin}>
                            Log In
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
})