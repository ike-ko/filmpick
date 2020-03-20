import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import SearchCard from './SearchCard';

// import testGenreIds from '../testGenreIds.json';

export default class Favorites extends Component {
    generateFavorites = () => {
        const { favorites } = this.props;
        let displayCards = [];

        favorites.forEach(item => {
            displayCards.push(
                <SearchCard
                    key={item.id}
                    details={item}
                />
            );
        });

        return <Row>{displayCards}</Row>;
    }

    render() {
        return (
            <Container fluid className="main text-center">
                {this.props.favorites && this.props.favorites.length 
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