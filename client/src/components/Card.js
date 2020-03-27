import React, { Component } from 'react';
import { Col, Media, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DetailModal from './DetailModal';
import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';

export default class Card extends Component {
    constructor() {
        super();

        this.state = {
            isVisible: false
        };
    }

    handleOpenModal = (e) => {
        this.setState({
            isVisible: true
        });
    }

    handleCloseModal = () => {
        this.setState({
            isVisible: false
        })
    }

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

        let imgWidth = 92;              
        let imgHeight = 138;
        if (window.innerWidth > 576) {      // sm breakpoint
            imgWidth = 154;
            imgHeight = 231;
        }

        return (
            <Col 
                {...colOptions}
            >
                <Media 
                    className="card-media h-100 p-3 border border-light rounded bg-light hvr-glow"
                    onClick={this.handleOpenModal}
                >
                    {poster_path 
                        ? <Image src={`https://image.tmdb.org/t/p/w${imgWidth}/${poster_path}`} rounded className="mr-3" />
                        : <div className="mr-3 border border-secondary rounded text-center bg-secondary d-flex" style={{height: imgHeight, width: imgWidth}}>
                            <FontAwesomeIcon icon="question" size={window.innerWidth > 576 ? '8x' : '5x'} className="m-auto text-white" />
                        </div>
                    }
                    <Media.Body className="h-100 d-flex flex-column">
                        <h6><strong>{title}</strong></h6>
                        {releaseDate && <h6>{releaseDate.substring(0, 4)}</h6>}
                        <h6 className='search-card-genres'>{matchedGenres}</h6>

                        <FavoriteButtonContainer 
                            details={this.props.details}
                        />
                    </Media.Body>
                </Media>

                <DetailModal
                    isVisible={this.state.isVisible}
                    details={this.props.details}
                    closeModal={this.handleCloseModal}
                    matchedGenres={matchedGenres}
                />
            </Col>
        )
    }
}