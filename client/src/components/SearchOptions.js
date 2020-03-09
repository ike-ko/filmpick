import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { SearchByOptions, SortByOptions } from '../actions';

export default class SearchOptions extends Component {

    handleSearchBy = (e) => {
        e.preventDefault();

        this.props.setSearchByOption(e.target.value);
    }

    handleSortBy = (e) => {
        e.preventDefault();

        this.props.setSortByOption(e.target.value);
    }

    render() {
        return (
            <Modal show={this.props.isVisible} onHide={this.props.hideSearchOptions}>
                <Modal.Header closeButton>
                <Modal.Title>Search Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formSearchBy">
                            <Form.Label>Search By</Form.Label>
                            <Form.Control as="select" value={this.props.searchByOption} onChange={this.handleSearchBy}>
                                <option value={SearchByOptions.TITLE}>Title</option>
                                <option value={SearchByOptions.DIRECTOR}>Director</option>
                                <option value={SearchByOptions.ACTOR}>Actor</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formSortBy">
                            <Form.Label>Sort By</Form.Label>
                            <Form.Control as="select" value={this.props.sortByOption} onChange={this.handleSortBy}>
                                <option value={SortByOptions.RELEVANCE}>Relevance</option>
                                <option value={SortByOptions.ALPHABETICAL}>Alphabetical</option>
                                <option value={SortByOptions.RELEASE_DATE}>Release Date</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.hideSearchOptions}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}