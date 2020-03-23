import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
    render() {
        return (
            <>
                <Container fluid className="container-home vh-100 text-center">
                    <h1 className="logo-filmpick home-logo text-white pt-5">Filmpick</h1>
                    <div className="text-light pt-5 mt-3">
                        <p className="home-icons">
                            <FontAwesomeIcon icon="search" size="lg"/>
                            <FontAwesomeIcon className="mx-5" icon="heart" size="lg"/>
                            <FontAwesomeIcon icon="thumbs-up" size="lg"/>
                        </p>
                        <p className="home-tagline">Search, Favorite, &amp; Recommend!</p>
                    </div>
                </Container>
            </>
        )
    }
}