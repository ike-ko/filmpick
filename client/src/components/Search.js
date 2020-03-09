import React, { Component } from 'react';
import { FormControl, Button, Container, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SelectedSearchOptions from '../containers/SelectedSearchOptions';

export default class Search extends Component {
    constructor() {
        super();

        this.state = {
            isOptionVisible: false
        };
    }

    showSearchOptions = () => {
        this.setState({
            isOptionVisible: true
        });
    }

    hideSearchOptions = () => {
        this.setState({
            isOptionVisible: false
        });
    }

    render() {
        return (
            <Container fluid className="main">
                <SelectedSearchOptions 
                    isVisible={this.state.isOptionVisible}
                    hideSearchOptions={this.hideSearchOptions}
                />

                <InputGroup size="lg">
                    <Button size="lg" variant="outline-secondary" className="mr-2" onClick={this.showSearchOptions}>
                        <FontAwesomeIcon icon="sliders-h" size="lg"/>
                    </Button>
                    <FormControl size="lg" type="text" placeholder="Search" className="mr-2" />
                    <Button size="lg" variant="outline-success">
                        <FontAwesomeIcon icon="search" size="lg"/>
                    </Button>
                </InputGroup>
            </Container>
        )
    }
}