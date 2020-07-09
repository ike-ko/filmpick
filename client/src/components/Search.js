import React, { Component } from 'react';
import { FormControl, Button, Container, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loading from './Loading';
import CardCarousel from './CardCarousel';
import NavigationContainer from '../containers/NavigationContainer';
import CardContainer from '../containers/CardContainer';
import SearchOptionsContainer from '../containers/SearchOptionsContainer';
import { searchTMDB, getPopularMovies, getPopularTV } from '../api/search';
import { isSearchQueryValid } from '../utils/validations';

export default class Search extends Component {
    constructor() {
        super();

        this.state = {
            isOptionVisible: false,
            searchData: null,
            searchQuery: "",
            isLoading: false,
            loadingMessage: ''
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
        else {
            this.getPopular();
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
            isLoading: true,
            loadingMessage: 'Searching...'
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
                searchData: this.generateSearchCards(searchResults.data.results)
            });
        }
        
        this.setState({
            isLoading: false
        });
    }

    getPopular = async () => {
        this.setState({
            isLoading: true,
            loadingMessage: 'Getting popular movies/TV shows...'
        });
        
        const popularMovies = await getPopularMovies();
        const popularTV = await getPopularTV();

        this.setState({
            isLoading: false,
            popularMovies: this.generateSearchCards(popularMovies.data.results, true),
            popularTV: this.generateSearchCards(popularTV.data.results, true)
        });
    }

    generateSearchCards = (data, isCarousel = false) => {
        let displayCards = [];

        data.results.forEach(item => {
            displayCards.push(
                <CardContainer 
                    key={item.id}
                    details={item}
                    isCarousel={isCarousel}
                />
            );
        })

        return displayCards;
    }

    resetSearch = () => {
        this.setState({
            searchData: null,
            searchQuery: ''
        });
        this.getPopular();
    }

    render() {
        return (
            <>
                <NavigationContainer resetSearch={this.resetSearch} />
                <Container fluid className="main">
                    <SearchOptionsContainer 
                        isVisible={this.state.isOptionVisible}
                        hideSearchOptions={this.hideSearchOptions}
                    />

                    <InputGroup size="lg" className='mb-3 search-bar-group'>
                        <Button size="lg" variant="info" className="search-bar-button mr-2" onClick={this.showSearchOptions}>
                            <FontAwesomeIcon icon="sliders-h" size="lg"/>
                        </Button>
                        <FormControl 
                            size="lg"
                            type="text"
                            placeholder="Search..."
                            className="rounded shadow-none mr-2"
                            value={this.state.searchQuery}
                            onChange={this.handleSearchQueryChange}
                            onKeyPress={this.handleSearchQueryKeyPress}
                        />
                        <Button size="lg" variant="info" className="search-bar-button" onClick={this.submitSearch}>
                            <FontAwesomeIcon icon="search" size="lg"/>
                        </Button>
                    </InputGroup>

                    {this.state.isLoading 
                        ? <Loading message={this.state.loadingMessage} /> 
                        : this.state.searchData
                            ? <Row>{this.state.searchData}</Row>
                            : <>
                                <h5 className='mb-0'><strong>Popular Movies</strong></h5>
                                <CardCarousel cards={this.state.popularMovies}/>
                                <h5 className='mb-0'><strong>Popular TV Shows</strong></h5>
                                <CardCarousel cards={this.state.popularTV}/>
                              </>
                    }
                </Container>
            </>
        )
    }
}