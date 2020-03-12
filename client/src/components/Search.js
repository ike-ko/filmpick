import React, { Component } from 'react';
import { FormControl, Button, Container, InputGroup, Image, Media, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchOptionsContainer from '../containers/SearchOptionsContainer';
import FavoriteButtonContainer from '../containers/FavoriteButtonContainer'

import testMovieResults from '../testMovieResults.json';    // remove once unneeded
import testGenreIds from '../testGenreIds.json';

export default class Search extends Component {
    constructor() {
        super();

        this.state = {
            isOptionVisible: false,
            searchData: null
        };
    }

    showSearchOptions = () => {
        this.setState({
            isOptionVisible: true
        });
    }

    hideSearchOptions = () => {
        this.setState({
            isOptionVisible: false
        });
    }
    
    // TODO: replace placeholder
    submitSearch = () => {
        this.setState({
            searchData: testMovieResults
        });
    }

    generateSearchResults = (data) => {
        let displayCards = [];
        data.results.forEach(item => {
            let overview = item.overview;
            if (overview.length > 200)
                overview = overview.substring(0, 200) + "..";

            let matchedGenres = "";
            item.genre_ids.forEach(id => {
                testGenreIds.genres.forEach(genre => {
                    if (genre.id === id) {
                        if (!matchedGenres) {
                            matchedGenres = genre.name;
                        }
                        else {
                            matchedGenres += ", " + genre.name;
                        }
                    }
                })
            });

            displayCards.push(
                <Col 
                    key={item.id}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    className="mb-3 p-3"
                >
                    <Media className="h-100 p-3 border border-secondary rounded bg-white">
                        {item.poster_path 
                            ? <Image height="138px" src={`https://image.tmdb.org/t/p/w92/${item.poster_path}`} rounded className="mr-3" />
                            : <div className="mr-3 border border-secondary rounded text-center bg-secondary" style={{height:"138px", width:"92px"}}>
                                <FontAwesomeIcon icon="question" size="5x" className="align-self-center mt-4 text-white" />
                            </div>
                        }
                        <Media.Body className="h-100 d-flex flex-column">
                            <h5>{`${item.title} (${item.release_date.substring(0, 4)})`}</h5>
                            <h6>{matchedGenres}</h6>
                            <p>{overview}</p>

                            <FavoriteButtonContainer 
                                movieId={item.id}
                            />
                        </Media.Body>
                    </Media>
                </Col>
            );
        })

        return <Row className="">{displayCards}</Row>;
    }

    render() {
        return (
            <Container fluid className="main bg-light">
                <SearchOptionsContainer 
                    isVisible={this.state.isOptionVisible}
                    hideSearchOptions={this.hideSearchOptions}
                />

                <InputGroup size="lg">
                    <Button size="lg" variant="outline-primary" className="mr-2" onClick={this.showSearchOptions}>
                        <FontAwesomeIcon icon="sliders-h" size="lg"/>
                    </Button>
                    <FormControl size="lg" type="text" placeholder="Search" className="rounded mr-2" />
                    <Button size="lg" variant="outline-primary" onClick={this.submitSearch}>
                        <FontAwesomeIcon icon="search" size="lg"/>
                    </Button>
                </InputGroup>

                {this.state.searchData && this.generateSearchResults(this.state.searchData)}
            </Container>
        )
    }
}