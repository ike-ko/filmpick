import React, { Component } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { addFavorite, removeFavorite } from '../api/favorites';

export default class FavoriteButton extends Component {

    isInFavorites = () => {
        return this.props.favorites.find(item => item.id === this.props.details.id);
    }

    handleSetFavorite = async (e) => {
        const favRes = this.isInFavorites() 
            ? await removeFavorite(this.props.details.id)
            : await addFavorite(this.props.details);

        if (favRes.data && favRes.data.success) {
            this.props.setFavorites(favRes.data.favorites);
        }
    }

    render() {
        return (
            this.props.isLoggedIn ?
                <Button 
                    variant={this.isInFavorites() ? "danger" : "secondary"}
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