import React, { Component } from 'react';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
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

                <Container fluid className="home-container text-center">
                    <div className="home-elements">
                        <div className="text-light mb-5">

                            <InputGroup size="lg" className='home-searchbar mx-auto px-3 pt-3'>
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
                        </div>
                    </div>

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