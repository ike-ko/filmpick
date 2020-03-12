import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class FavoriteButton extends Component {

    handleSetFavorite = (e) => {
        this.props.setFavorite(this.props.movieId);
    }

    render() {
        return (
            <Button 
                variant={this.props.favoriteIds.includes(this.props.movieId) ? "danger" : "secondary"}
                className="mt-auto"
                onClick={this.handleSetFavorite}
            >
                <FontAwesomeIcon icon="heart" />
            </Button>
        )
    }
}