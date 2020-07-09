import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom';
import NavigationContainer from '../containers/NavigationContainer';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            searchQuery: '',
            redirectToSearch: false
        }
    }

    handleSearchQueryChange = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleSearchQueryKeyPress = (e) => {
        if (e.key === "Enter") {
            this.submitSearch();
        }
    }

    submitSearch = () => {
        if (this.state.searchQuery) {
            this.setState({
                redirectToSearch: true
            });
        }
    }

    render() {
        return (
            <>
                <NavigationContainer />

                <Container fluid className="main home-container text-center mt-4">
                    <Container className="d-block">
                        <Row>
                            <Col xs={0} md={3}/>
                            <Col>
                                <h1 className='text-left display-4 home-header'>
                                    Find more of<br/>what you love
                                </h1>
                                <div className='mb-2 text-left'>
                                    <div className='home-spacer spacer-lg d-inline-block'/>
                                    <div className='home-spacer spacer-md d-inline-block'/>
                                </div>
                                <h4 className='text-left'>
                                    Browse movies &amp; TV shows,<br/>
                                    select your favorites,<br/>
                                    and get recommendations!
                                </h4>
                                <InputGroup size="lg" className='home-searchbar pt-3'>
                                    <FormControl 
                                        size="lg"
                                        type="text"
                                        placeholder="Search movies..."
                                        className="rounded shadow-none"
                                        value={this.state.searchQuery}
                                        onChange={this.handleSearchQueryChange}
                                        onKeyPress={this.handleSearchQueryKeyPress}
                                    />
                                    <InputGroup.Append className='input-group-text'>
                                        <Button onClick={this.submitSearch} variant='light' size="sm">
                                            <FontAwesomeIcon icon="search" size="sm"/>
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Col xs={0} md={3}/>
                        </Row>
                    </Container>

                    {this.state.redirectToSearch && 
                        <Redirect
                            push
                            to={{
                                pathname: '/search',
                                state: {
                                    searchQuery: this.state.searchQuery
                                }
                            }}
                        />
                    }
                </Container>
            </>
        )
    }
}