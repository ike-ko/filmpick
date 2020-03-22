import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import NavigationContainer from '../containers/NavigationContainer';

export default class Home extends Component {
    render() {
        return (
            <>
                <NavigationContainer isHome={true} />
                <Container fluid className="bg-primary vh-100 text-center">
                    Home
                </Container>
            </>
        )
    }
}