import React, { Component } from 'react';
import { Modal, Button, Media, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ISO6391 from 'iso-639-1';

import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';
import { TMDB_LG_IMG_HEIGHT, TMDB_LG_IMG_WIDTH } from '../utils/constants';

export default class DetailModal extends Component {
    constructor() {
        super();

        this.state = {
            isImageLoaded: true
        }
    }
    
    handleImageLoadError = () => {
        this.setState({
            isImageLoaded: false
        })
    }

    render() {
        const { details, matchedGenres, isBrowser } = this.props;
        const {
            poster_path,
            original_language,
            overview
        } = details;
        
        const isMovie = details.title ? true : false;

        const title = details.title || details.name;
        const originalReleaseDate = details.release_date || details.first_air_date;
        let releaseDate = null;
        if (originalReleaseDate) {
            const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;
            const [, year, month, day] = datePattern.exec(originalReleaseDate);
            releaseDate = new Date(`${year}, ${month} ${day}`);
        }

        return (
            <Modal 
                show={this.props.isVisible}
                onHide={this.props.closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="h-100">
                    <Media 
                        className="h-100"
                    >
                        {poster_path && this.state.isImageLoaded 
                            ? <Image src={`https://image.tmdb.org/t/p/w154/${poster_path}`} onError={this.handleImageLoadError} rounded className="mr-3" />
                            : <div className="mr-3 border border-secondary rounded text-center bg-secondary d-flex" style={{height: TMDB_LG_IMG_HEIGHT, width: TMDB_LG_IMG_WIDTH}}>
                                <FontAwesomeIcon icon="question" size='8x' className="m-auto text-white" />
                            </div>
                        }
                        <Media.Body className="modal-media-body h-100 d-flex flex-column">
                            <h6 className='modal-body-label mb-0'>
                                <strong>Type</strong>
                            </h6>
                            <h6>
                                {isMovie ? 'Movie' : 'TV Show'}
                            </h6>
                            {releaseDate && 
                                <>
                                    <h6 className='modal-body-label mb-0'>
                                        <strong>Release Date</strong>
                                    </h6>
                                    <h6>
                                        {releaseDate.toDateString().substring(3)}
                                    </h6>
                                </>
                            }
                            {original_language &&
                                <>
                                    <h6 className='modal-body-label mb-0'>
                                        <strong>Original Language</strong>
                                    </h6>
                                    <h6>
                                        {ISO6391.getName(original_language)}
                                    </h6>
                                </>
                            }
                            {matchedGenres &&
                                <>
                                    <h6 className='modal-body-label mb-0'>
                                        <strong>Genre</strong>
                                    </h6>
                                    <h6>
                                        {matchedGenres}
                                    </h6>
                                </>
                            }
                            {isBrowser && <FavoriteButtonContainer 
                                details={this.props.details}
                            />}
                        </Media.Body>
                    </Media>
                </Modal.Body>
                
                {!isBrowser && <FavoriteButtonContainer 
                    details={this.props.details}
                />}

                <p className='detail-modal-overview'>{overview}</p>

                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={this.props.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}