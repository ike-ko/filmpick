import React, { Component } from 'react';
import { Col, Media, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';

export default class Card extends Component {
    render() {
        return (
            <Col 
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className="mb-3 p-3"
            >
                <Media className="h-100 p-3 border border-secondary rounded bg-white">
                    {this.props.posterPath 
                        ? <Image height="138px" src={`https://image.tmdb.org/t/p/w92/${this.props.posterPath}`} rounded className="mr-3" />
                        : <div className="mr-3 border border-secondary rounded text-center bg-secondary" style={{height:"138px", width:"92px"}}>
                            <FontAwesomeIcon icon="question" size="5x" className="align-self-center mt-4 text-white" />
                        </div>
                    }
                    <Media.Body className="h-100 d-flex flex-column">
                        <h5>{`${this.props.title} (${this.props.releaseDate.substring(0, 4)})`}</h5>
                        <h6>{this.props.matchedGenres}</h6>
                        <p>{this.props.overview}</p>

                        <FavoriteButtonContainer 
                            movieId={this.props.id}
                        />
                    </Media.Body>
                </Media>
            </Col>
        )
    }
}