import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import NavigationContainer from '../containers/NavigationContainer';
import CardContainer from '../containers/CardContainer';

// import testGenreIds from '../testGenreIds.json';

export default class Favorites extends Component {
    generateFavorites = () => {
        const { favorites } = this.props;
        let displayCards = [];

        favorites.forEach(item => {
            displayCards.push(
                <CardContainer
                    key={item.id}
                    details={item}
                />
            );
        });

        return <Row>{displayCards}</Row>;
    }

    render() {
        return (
            <>
                <NavigationContainer />
                <Container fluid className="main">
                    <h5 className='pt-2'>Favorites</h5>
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
            </>
        )
    }
}