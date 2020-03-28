import React, { Component } from 'react';
import { Modal, Button, Media, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ISO6391 from 'iso-639-1';

import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';

export default class DetailModal extends Component {
    render() {
        const { details, matchedGenres } = this.props;
        const {
            poster_path,
            original_language,
            overview
        } = details;
        
        const title = details.title || details.name;
        const originalReleaseDate = details.release_date || details.first_air_date;
        const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;
        const [, year, month, day] = datePattern.exec(originalReleaseDate);
        const releaseDate = new Date(`${year}, ${month} ${day}`);

        const isMobile = window.innerWidth < 576;

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
                        {poster_path 
                            ? <Image src={`https://image.tmdb.org/t/p/w154/${poster_path}`} rounded className="mr-3" />
                            : <div className="mr-3 border border-secondary rounded text-center bg-secondary d-flex" style={{height: 92, width: 138}}>
                                <FontAwesomeIcon icon="question" size='8x' className="m-auto text-white" />
                            </div>
                        }
                        <Media.Body className="modal-media-body h-100 d-flex flex-column">
                            {releaseDate && 
                                <>
                                    <h6 className={isMobile ? 'modal-body-label mb-0' : ''}>
                                        <strong>Release Date</strong>
                                    </h6>
                                    <h6>
                                        {releaseDate.toDateString().substring(3)}
                                    </h6>
                                </>
                            }
                            {original_language &&
                                <>
                                    <h6 className={isMobile ? 'modal-body-label mb-0' : ''}>
                                        <strong>Original Language</strong>
                                    </h6>
                                    <h6>
                                        {ISO6391.getName(original_language)}
                                    </h6>
                                </>
                            }
                            {matchedGenres &&
                                <>
                                    <h6 className={isMobile ? 'modal-body-label mb-0' : ''}>
                                        <strong>Genre</strong>
                                    </h6>
                                    <h6>
                                        {matchedGenres}
                                    </h6>
                                </>
                            }
                            {!isMobile && <FavoriteButtonContainer 
                                details={this.props.details}
                            />}
                        </Media.Body>
                    </Media>
                </Modal.Body>
                
                {isMobile && <FavoriteButtonContainer 
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