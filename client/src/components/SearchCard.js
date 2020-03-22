import React, { Component } from 'react';
import { Col, Media, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';

export default class SearchCard extends Component {
    render() {
        const { genres } = this.props;
        const {
            poster_path,
            genre_ids
        } = this.props.details;
        let { overview } = this.props.details;

        const title = this.props.details.title || this.props.details.name;
        const releaseDate = this.props.details.release_date || this.props.details.first_air_date;

        let cardHeader = releaseDate 
            ? `${title} (${releaseDate.substring(0, 4)})`
            : title;

        if (overview.length > 200)
            overview = overview.substring(0, 200) + "..";

        let matchedGenres = "";
        if (genres) {
            genre_ids.forEach(gid => {
                genres.forEach(genre => {
                    if (genre.id === gid) {
                        if (!matchedGenres) {
                            matchedGenres = genre.name;
                        }
                        else {
                            matchedGenres += ", " + genre.name;
                        }
                    }
                })
            });
        }

        return (
            <Col 
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className="mb-3 p-3"
            >
                <Media className="h-100 p-3 border border-primary rounded bg-white">
                    {poster_path 
                        ? <Image height="138px" src={`https://image.tmdb.org/t/p/w92/${poster_path}`} rounded className="mr-3" />
                        : <div className="mr-3 border border-secondary rounded text-center bg-secondary" style={{height:"138px", width:"92px"}}>
                            <FontAwesomeIcon icon="question" size="5x" className="align-self-center mt-4 text-white" />
                        </div>
                    }
                    <Media.Body className="h-100 d-flex flex-column">
                        <h5>{cardHeader}</h5>
                        <h6>{matchedGenres}</h6>
                        <p>{overview}</p>

                        <FavoriteButtonContainer 
                            details={this.props.details}
                        />
                    </Media.Body>
                </Media>
            </Col>
        )
    }
}