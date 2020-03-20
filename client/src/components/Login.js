import React, { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import { loginUser } from '../api/user';
import { getFavorites } from '../api/favorites'
import { isLoginValid } from '../utils/validations';

const initialState = {
    username: "",
    password: "",
    loginError: ""
}

export default class Login extends Component {
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

    handleCloseModal = () => {
        this.setState({
            ...initialState
        });
        this.props.hideLogin();
    }

    handleLogin = async () => {
        let { username, password } = this.state;
        const validationLogin = isLoginValid(username, password);

        if (validationLogin.success) {
            const loginRes = await loginUser(username, password);

            if (loginRes.data.success) {
                this.props.setLogin(true);

                const favRes = await getFavorites();
                if (favRes.data && favRes.data.favorites)
                    this.props.setFavorites(favRes.data.favorites);

                this.handleCloseModal();
            }
            else {
                this.setState({
                    loginError: loginRes.data.message
                });
            }
        }
        else {
            this.setState({
                loginError: validationLogin.message
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
                                />
                            </Form.Group>
                            <Form.Group controlId="formLoginPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password" 
                                    placeholder="Enter password" 
                                    value={this.state.password} 
                                    onChange={this.handlePasswordChange}
                                />
                            </Form.Group>
                            {this.state.loginError && <Form.Label className="text-danger">{this.state.loginError}</Form.Label>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleLogin}>
                            Login
                        </Button>
                        <Button variant="secondary" onClick={this.handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
}