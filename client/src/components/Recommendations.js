import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import NavigationContainer from '../containers/NavigationContainer';
import CardContainer from '../containers/CardContainer';
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

    componentDidMount() {
        this.queryForRecommendations();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.favorites !== this.props.favorites) {
            this.queryForRecommendations();
        }
    }

    queryForRecommendations = async () => {
        const { favorites } = this.props;
        this.setState({
            isLoading: true
        });

        if (favorites && favorites.length) {
            let query = '';
    
            favorites.forEach((item, index) => {
                if (item.title) {   // is movie
                    query += 'movie:'
                    query += item.title;
                }
                else {              // is show (probably)
                    query += 'show:'
                    query += item.name;
                }
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

        recResults.forEach((item, index) => {
            displayCards.push(
                <CardContainer
                    key={item.id}
                    details={item}
                    animationDelay={index}
                />
            );
        })

        return <Row>{displayCards}</Row>;
    }

    render() {
        return (
            <div className='main'>
                <NavigationContainer />
                <Container fluid className="content">
                    {this.state.isLoading
                        ? <Loading className='pt-3' message='Getting your recommendations!'/>
                        :
                        this.props.favorites && this.props.favorites.length && this.state.recResults && this.state.recResults.length
                            ?
                            <><h4 className='py-3 main-header'><strong>Recommendations</strong></h4>
                            {this.generateRecommendations()}</>
                            :
                            <>
                                <h3 className='pt-3 text-center'><strong>No recommendations to be made!</strong></h3>
                                <h5 className='text-center'>Search and favorite movies/TV shows to see recommendations based on them!</h5>
                            </>
                    }
                </Container>
            </div>
        )
    }
}