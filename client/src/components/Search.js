import React, { Component } from 'react';
import { FormControl, Button, Container, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from './Card';
import SearchOptionsContainer from '../containers/SearchOptionsContainer';

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
                <Card 
                    key={item.id}
                    id={item.id}
                    posterPath={item.poster_path}
                    title={item.title}
                    releaseDate={item.release_date}
                    matchedGenres={matchedGenres}
                    overview={overview}
                />
            );
        })

        return <Row className="">{displayCards}</Row>;
    }

    render() {
        return (
            <Container fluid className="main">
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