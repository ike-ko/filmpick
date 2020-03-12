import React, { Component } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class FavoriteButton extends Component {

    handleSetFavorite = (e) => {
        this.props.setFavorite(this.props.movieId);
    }

    render() {
        return (
            this.props.isLoggedIn ?
                <Button 
                    variant={this.props.favoriteIds.includes(this.props.movieId) ? "danger" : "secondary"}
                    className="mt-auto"
                    onClick={this.handleSetFavorite}
                >
                    <FontAwesomeIcon icon="heart" />
                </Button>
            :
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Log in to favorite!</Tooltip>}>
                    <span className="mt-auto">
                        <Button 
                            disabled
                            className="w-100"
                            style={{ pointerEvents: 'none' }}
                            variant="secondary"
                        >
                            <FontAwesomeIcon icon="heart" />
                        </Button>
                    </span>
                </OverlayTrigger>
        )
    }
}