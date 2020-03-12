import React, { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
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

    // TODO: add login logic
    handleLogin = () => {
        this.props.setLogin(true);
        this.props.hideLogin();
    }

    render() {
        return (
            <Modal show={this.props.isVisible} onHide={this.props.hideLogin}>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleLogin}>
                            Login
                        </Button>
                        <Button variant="secondary" onClick={this.props.hideLogin}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
}