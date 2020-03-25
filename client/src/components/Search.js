import React, { Component } from 'react';
import { FormControl, Button, Container, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loading from './Loading';
import NavigationContainer from '../containers/NavigationContainer';
import SearchCardContainer from '../containers/SearchCardContainer';
import SearchOptionsContainer from '../containers/SearchOptionsContainer';
import { searchTMDB } from '../api/search';
import { isSearchQueryValid } from '../utils/validations';

export default class Search extends Component {
    constructor() {
        super();

        this.state = {
            isOptionVisible: false,
            searchData: null,
            searchQuery: "",
            isLoading: false
        };
    }

    componentDidMount() {
        if (this.props.location && this.props.location.state && this.props.location.state.searchQuery) {
            this.setState({
                searchQuery: this.props.location.state.searchQuery
            }, () => {
                this.submitSearch();
            });
        }
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

    handleSearchQueryChange = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleSearchQueryKeyPress = (e) => {
        if (e.key === "Enter") {
            this.submitSearch();
        }
    }
    
    submitSearch = async () => {
        this.setState({
            isLoading: true
        });

        const { searchQuery } = this.state;
        const { searchForOption, sortByOption } = this.props;
        const validationSearch = isSearchQueryValid(searchQuery)

        if (validationSearch.success) {
            const searchResults = await searchTMDB(
                searchQuery,
                searchForOption === 'MOVIES' ? 'movie' : 'tv',
                sortByOption.toLowerCase()
            );
            this.setState({
                searchData: this.generateSearchResults(searchResults.data.results)
            });
        }
        
        this.setState({
            isLoading: false
        });
    }

    generateSearchResults = (data) => {
        let displayCards = [];

        data.results.forEach(item => {
            displayCards.push(
                <SearchCardContainer 
                    key={item.id}
                    details={item}
                />
            );
        })

        return <Row>{displayCards}</Row>;
    }

    render() {
        return (
            <>
                <NavigationContainer />
                <Container fluid className="main">
                    <SearchOptionsContainer 
                        isVisible={this.state.isOptionVisible}
                        hideSearchOptions={this.hideSearchOptions}
                    />

                    <InputGroup size="lg" className='mb-3'>
                        <Button size="lg" variant="secondary" className="mr-2" onClick={this.showSearchOptions}>
                            <FontAwesomeIcon icon="sliders-h" size="lg"/>
                        </Button>
                        <FormControl 
                            size="lg"
                            type="text"
                            placeholder="Search..."
                            className="rounded mr-2"
                            value={this.state.searchQuery}
                            onChange={this.handleSearchQueryChange}
                            onKeyPress={this.handleSearchQueryKeyPress}
                        />
                        <Button size="lg" variant="secondary" onClick={this.submitSearch}>
                            <FontAwesomeIcon icon="search" size="lg"/>
                        </Button>
                    </InputGroup>

                    {this.state.isLoading 
                        ? <Loading message='Searching...' /> 
                        : this.state.searchData}
                </Container>
            </>
        )
    }
}