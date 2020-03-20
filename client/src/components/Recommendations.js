import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import RecommendationCard from '../components/RecommendationCard';
import { getRecommendations } from '../api/recommend';

export default class Recommendations extends Component {
    constructor() {
        super();

        this.state = {
            recResults: []
        }
    }

    async componentDidMount() {
        const { favorites } = this.props;

        if (favorites && favorites.length) {
            let query = '';
    
            favorites.forEach((item, index) => {
                query += item.title;
                if (index !== favorites.length - 1)
                    query += ',';
            });
    
            const recRes = await getRecommendations(query);

            if (recRes.data && recRes.data.success) {
                this.setState({
                    recResults: recRes.data.results
                });
            }
        }
    }

    generateRecommendations = () => {
        const { recResults } = this.state;
        let displayCards = [];

        recResults.forEach(item => {
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
                {this.props.favorites && this.props.favorites.length && this.state.recResults && this.state.recResults.length
                    ?
                    this.generateRecommendations()
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