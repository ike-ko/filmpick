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
        // let { overview } = this.props.details;

        const title = this.props.details.title || this.props.details.name;
        const releaseDate = this.props.details.release_date || this.props.details.first_air_date;

        // if (overview.length > 200)
        //     overview = overview.substring(0, 200) + "..";

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

        const colOptions = this.props.isCarousel 
            ? {}
            : {
                sm: 12,
                md: 6,
                lg: 4,
                xl: 3,
                className: "px-3 pb-3"
            };

        const imageUrl = window.innerWidth > 576    // sm breakpoint
            ? `https://image.tmdb.org/t/p/w154/${poster_path}`
            : `https://image.tmdb.org/t/p/w92/${poster_path}`

        return (
            <Col 
                {...colOptions}
            >
                <Media className="h-100 p-3 border border-light rounded bg-light hvr-glow">
                    {poster_path 
                        ? <Image src={imageUrl} rounded className="mr-3" />
                        : <div className="mr-3 border border-secondary rounded text-center bg-secondary" style={{height:"138px", width:"92px"}}>
                            <FontAwesomeIcon icon="question" size="5x" className="align-self-center mt-4 text-white" />
                        </div>
                    }
                    <Media.Body className="h-100 d-flex flex-column">
                        <h6><strong>{title}</strong></h6>
                        {releaseDate && <h6>{releaseDate.substring(0, 4)}</h6>}
                        <h6 className='search-card-genres'>{matchedGenres}</h6>
                        {/* <p>{overview}</p> */}

                        <FavoriteButtonContainer 
                            details={this.props.details}
                        />
                    </Media.Body>
                </Media>
            </Col>
        )
    }
}