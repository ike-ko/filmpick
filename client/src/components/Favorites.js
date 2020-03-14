import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import SearchCard from './SearchCard';

import testMovieResults from '../testMovieResults.json';    // remove once unneeded
import testGenreIds from '../testGenreIds.json';

export default class Favorites extends Component {
    generateFavorites = () => {
        let data = testMovieResults;
        let displayCards = [];

        data.results.forEach(item => {
            if (this.props.favoriteIds.includes(item.id)) {
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
                    <SearchCard
                        key={item.id}
                        id={item.id}
                        posterPath={item.poster_path}
                        title={item.title}
                        releaseDate={item.release_date}
                        matchedGenres={matchedGenres}
                        overview={overview}
                    />
                );
            }
        })

        return <Row>{displayCards}</Row>;
    }

    render() {
        return (
            <Container fluid className="main text-center">
                {this.props.favoriteIds && this.props.favoriteIds.length 
                    ?
                    this.generateFavorites()
                    :
                    <>
                        <h3>No favorites found!</h3>
                        <h5>Search and favorite movies/TV shows to add them here!</h5>
                    </>
                }
            </Container>
        )
    }
}