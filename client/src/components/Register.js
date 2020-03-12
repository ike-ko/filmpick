import React, { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            confirmPassword: ""
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

    // TODO: add register logic
    handleRegister = () => {
        this.props.setLogin(true);
        this.props.hideRegister();
    }

    render() {
        return (
            <Modal show={this.props.isVisible} onHide={this.props.hideRegister}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
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
                            <Form.Group controlId="formLoginConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password" 
                                    placeholder="Confirm password" 
                                    value={this.state.confirmPassword} 
                                    onChange={this.handleConfirmPasswordChange}
                                />
                            </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleRegister}>
                            Register
                        </Button>
                        <Button variant="secondary" onClick={this.props.hideRegister}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
}