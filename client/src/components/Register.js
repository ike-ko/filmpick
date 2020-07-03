import React, { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import { registerUser } from '../api/user';
import { isRegistrationValid } from '../utils/validations';

const initialState = {
    username: "",
    password: "",
    confirmPassword: "",
    registerError: ""
}

export default class Register extends Component {
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
    
    handleConfirmPasswordChange = (e) => {
        this.setState({
            confirmPassword: e.target.value
        });
    }
    
    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleRegister();
        }
    }

    handleCloseModal = () => {
        this.setState({
            ...initialState
        });
        this.props.hideRegister();
    }

    handleRegister = async () => {
        let { username, password, confirmPassword } = this.state;
        const validationRes = isRegistrationValid(username, password, confirmPassword);

        if (validationRes.success) {
            const regRes = await registerUser(username, password);

            if (regRes.data.success) {
                this.props.setLogin(true);
                this.handleCloseModal();
            }
            else {
                this.setState({
                    registerError: regRes.data.message
                })
            }
        }
        else {
            this.setState({
                registerError: validationRes.message
            })
        }
    }

    render() {
        return (
            <Modal show={this.props.isVisible} onHide={this.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                            <Form.Group controlId="formLoginUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                    type="text"
                                    className="user-account-form shadow-none"
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
                                    className="user-account-form shadow-none"
                                    placeholder="Enter password" 
                                    value={this.state.password} 
                                    onChange={this.handlePasswordChange}
                                    onKeyPress={this.handleKeyPress}
                                />
                            </Form.Group>
                            <Form.Group controlId="formLoginConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    className="user-account-form shadow-none"
                                    placeholder="Confirm password" 
                                    value={this.state.confirmPassword} 
                                    onChange={this.handleConfirmPasswordChange}
                                    onKeyPress={this.handleKeyPress}
                                />
                            </Form.Group>
                            {this.state.registerError && <Form.Label className="text-danger">{this.state.registerError}</Form.Label>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='mr-auto' variant="outline-info" onClick={() => {this.props.hideRegister(); this.props.showLogin()}}>Already have an account?</Button>
                        <Button variant="outline-info" onClick={this.handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="info" onClick={this.handleRegister}>
                            Register
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
}