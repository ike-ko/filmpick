import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import RecommendationCard from '../components/RecommendationCard';
import testRecommendations from '../testRecommendations.json';

export default class Recommendations extends Component {
    generateRecommendations = (data) => {
        let displayCards = [];

        data.Similar.Results.forEach(item => {
            displayCards.push(
                <RecommendationCard
                    key={item.yId}
                    title={item.Name}
                    overview={item.wTeaser}
                    videoId={item.yId}
                />
            );
        })

        return <Row>{displayCards}</Row>;
    }

    render() {
        return (
            <Container fluid className="main text-center">
                {this.props.favoriteIds && this.props.favoriteIds.length 
                    ?
                    this.generateRecommendations(testRecommendations)
                    :
                    <>
                        <h3>No recommendations to be made!</h3>
                        <h5>Search and favorite movies/TV shows to see recommendations based on them!</h5>
                    </>
                }
            </Container>
        )
    }
}