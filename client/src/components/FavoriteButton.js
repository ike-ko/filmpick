import React, { Component } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { addFavorite, removeFavorite } from '../api/favorites';

export default class FavoriteButton extends Component {

    isInFavorites = () => {
        return this.props.favorites.find(item => item.id === this.props.details.id);
    }

    handleSetFavorite = async (e) => {
        e.stopPropagation();    // prevent opening details modal when favoriting

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
                    variant={this.isInFavorites() ? "success" : "info"}
                    className="mt-auto hvr-grow"
                    onClick={this.handleSetFavorite}
                >
                    <FontAwesomeIcon className='hvr-grow-icon' icon="heart" />
                </Button>
            :
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Log in to favorite!</Tooltip>}>
                    <span className="mt-auto">
                        <Button 
                            disabled
                            className="w-100"
                            style={{ pointerEvents: 'none' }}
                            variant="info"
                        >
                            <FontAwesomeIcon icon="heart" />
                        </Button>
                    </span>
                </OverlayTrigger>
        )
    }
}