import React, { Component } from 'react';
import { Modal, Button, Media, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';

export default class DetailModal extends Component {
    render() {
        const { details } = this.props;
        const {
            poster_path,
        } = details;
        
        const title = details.title || details.name;
        const releaseDate = details.release_date || details.first_air_date;

        return (
            <Modal 
                show={this.props.isVisible}
                onHide={this.props.closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Media 
                        // className="card-media h-100 p-3 border border-light rounded bg-light hvr-glow"
                    >
                        {poster_path 
                            ? <Image src={`https://image.tmdb.org/t/p/w154/${poster_path}`} rounded className="mr-3" />
                            : <div className="mr-3 border border-secondary rounded text-center bg-secondary d-flex" style={{height: 92, width: 138}}>
                                <FontAwesomeIcon icon="question" size='8x' className="m-auto text-white" />
                            </div>
                        }
                        <Media.Body className="h-100 d-flex flex-column">
                            {releaseDate && <h6>Release Date: {releaseDate}</h6>}
                            <h6 className='search-card-genres'>{this.props.matchedGenres}</h6>
                            {/* <p>{overview}</p> */}

                            <FavoriteButtonContainer 
                                details={this.props.details}
                            />
                        </Media.Body>
                    </Media>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={this.props.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}