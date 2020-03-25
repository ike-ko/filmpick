import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import NavigationContainer from '../containers/NavigationContainer';
import RecommendationCard from './RecommendationCard';
import Loading from './Loading';
import { getRecommendations } from '../api/recommend';

export default class Recommendations extends Component {
    constructor() {
        super();

        this.state = {
            recResults: [],
            isLoading: false
        }
    }

    async componentDidMount() {
        const { favorites } = this.props;
        this.setState({
            isLoading: true
        });

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

        this.setState({
            isLoading: false
        });
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
            <>
                <NavigationContainer />
                <Container fluid className="main text-center">
                    {this.state.isLoading
                        ? <Loading message='Getting your recommendations!'/>
                        :
                        this.props.favorites && this.props.favorites.length && this.state.recResults && this.state.recResults.length
                            ?
                            this.generateRecommendations()
                            :
                            <>
                                <h3>No recommendations to be made!</h3>
                                <h5>Search and favorite movies/TV shows to see recommendations based on them!</h5>
                            </>
                    }
                </Container>
            </>
        )
    }
}