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
            <div className='main'>
                <NavigationContainer />
                <Container fluid className="content">
                    
                    {this.props.favorites && this.props.favorites.length 
                        ?
                        <>
                            <h4 className='py-3 ml-10'><strong>Favorites</strong></h4>
                            {this.generateFavorites()}
                        </>
                        :
                        <>
                            <h3 className='pt-3 text-center'><strong>No favorites found!</strong></h3>
                            <h5 className='text-center'>Search and favorite movies/TV shows to add them here!</h5>
                        </>
                    }
                </Container>
            </div>
        )
    }
}