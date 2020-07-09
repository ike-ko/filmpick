import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom';
import NavigationContainer from '../containers/NavigationContainer';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            searchQuery: '',
            redirectToSearch: false
        }
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

    submitSearch = () => {
        if (this.state.searchQuery) {
            this.setState({
                redirectToSearch: true
            });
        }
    }

    render() {
        return (
            <div className='main'>
                <NavigationContainer />

                <Container className="content home-container text-center mt-4">
                    <Container>
                        <Row>
                            <Col>
                                <h1 className='home-text text-left display-4 home-header'>
                                    Find more of<br/>what you love
                                </h1>
                                <div className='mb-2 text-left'>
                                    <div className='home-spacer spacer-lg d-inline-block'/>
                                    <div className='home-spacer spacer-md d-inline-block'/>
                                </div>
                                <h4 className='home-text text-left'>
                                    Browse movies &amp; TV shows,<br/>
                                    select your favorites,<br/>
                                    and get recommendations!
                                </h4>
                                <InputGroup size="lg" className='home-searchbar pt-3'>
                                    <FormControl 
                                        size="lg"
                                        type="text"
                                        placeholder="Search movies..."
                                        className="rounded shadow-none"
                                        value={this.state.searchQuery}
                                        onChange={this.handleSearchQueryChange}
                                        onKeyPress={this.handleSearchQueryKeyPress}
                                    />
                                    <InputGroup.Append className='input-group-text'>
                                        <Button onClick={this.submitSearch} variant='light' size="sm">
                                            <FontAwesomeIcon icon="search" size="sm"/>
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Col xs={0} md={3}/>
                            <Col xs={0}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width='18rem' height='18rem' viewBox="0 0 172 172" style={{fill:'#000000'}}>
                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" 
                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{'mix-blend-mode': "normal"}}>
                                        <path d="M0,172v-172h172v172z" fill="none"></path>
                                        <g>
                                            <path d="M120.9375,158.5625h-69.875l8.0625,-10.75h53.75z" fill="#acb7d0"></path>
                                            <path d="M72.5625,131.6875h26.875v16.125h-26.875z" fill="#a0aecb"></path>
                                            <rect x="1" y="9" transform="scale(2.6875,2.6875)" width="62" height="40" rx="2" ry="2" fill="#c2cde7"></rect>
                                            <path d="M2.6875,115.5625h166.625v8.0625h-166.625z" fill="#cfd9ed"></path>
                                            <path d="M2.6875,34.9375h166.625v80.625h-166.625z" fill="#c5e4fa"></path>
                                            <path d="M123.43688,115.5625l43.18813,-43.18812v-37.43687h-5.75125l-80.625,80.625zM51.43875,115.5625h17.28063l80.625,-80.625h-17.28063zM39.93625,115.5625l80.625,-80.625h-14.405l-80.625,80.625z" fill="#e3f2ff"></path>
                                            <path d="M40.3125,55.09375l3.3325,6.07375l6.07375,3.3325l-6.07375,3.3325l-3.3325,6.07375l-3.3325,-6.07375l-6.07375,-3.3325l6.07375,-3.3325zM132.81625,46.1175l2.28438,4.21937l4.21938,2.28437l-4.21938,2.31125l-2.28438,4.1925l-2.31125,-4.1925l-4.1925,-2.31125l4.1925,-2.28437zM118.25,89.62813l1.55875,2.87563l2.87563,1.55875l-2.87563,1.55875l-1.55875,2.87563l-1.55875,-2.87563l-2.87563,-1.55875l2.87563,-1.55875z" fill="#fff8f8"></path>
                                            <path d="M67.1875,100.0825v-49.665c0.00017,-0.96563 0.51837,-1.85695 1.35746,-2.33484c0.83909,-0.47789 1.87005,-0.46889 2.70067,0.02359l41.36063,24.8325c0.81589,0.48412 1.31608,1.36254 1.31608,2.31125c0,0.94871 -0.5002,1.82713 -1.31608,2.31125l-41.44125,24.80563c-0.82127,0.44981 -1.81745,0.43972 -2.62944,-0.02663c-0.81199,-0.46635 -1.32271,-1.32171 -1.34806,-2.25775z" fill="#72caaf"></path>
                                            <path d="M163.9375,21.5h-155.875c-4.4528,0 -8.0625,3.6097 -8.0625,8.0625v96.75c0,4.4528 3.6097,8.0625 8.0625,8.0625h61.8125v10.75h-6.28875c-3.56628,-0.00637 -6.98882,1.40519 -9.51375,3.92375l-7.60563,7.60562c-0.77524,0.76887 -1.00825,1.93034 -0.58956,2.93873c0.41869,1.00839 1.40585,1.66324 2.49768,1.65689h75.25c1.09184,0.00635 2.079,-0.6485 2.49768,-1.65689c0.41869,-1.00839 0.18568,-2.16986 -0.58956,-2.93873l-7.60562,-7.60562c-2.52493,-2.51856 -5.94747,-3.93012 -9.51375,-3.92375h-6.28875v-10.75h61.8125c4.4528,0 8.0625,-3.6097 8.0625,-8.0625v-96.75c0,-4.4528 -3.6097,-8.0625 -8.0625,-8.0625zM108.41375,150.5c2.13759,0.00188 4.18694,0.85256 5.6975,2.365l3.03688,3.01h-62.29625l3.01,-3.01c1.51714,-1.51904 3.57748,-2.37026 5.72437,-2.365zM96.75,145.125h-21.5v-10.75h21.5zM163.9375,129h-155.875c-1.48427,0 -2.6875,-1.20323 -2.6875,-2.6875v-8.0625h99.6525c1.48427,0 2.6875,-1.20323 2.6875,-2.6875c0,-1.48427 -1.20323,-2.6875 -2.6875,-2.6875h-99.6525v-83.3125c0,-1.48427 1.20323,-2.6875 2.6875,-2.6875h155.875c1.48427,0 2.6875,1.20323 2.6875,2.6875v83.3125h-8.0625c-1.48427,0 -2.6875,1.20323 -2.6875,2.6875c0,1.48427 1.20323,2.6875 2.6875,2.6875h8.0625v8.0625c0,1.48427 -1.20323,2.6875 -2.6875,2.6875z" fill="#acacac"></path>
                                            <path d="M161.25,34.9375c0,-1.48427 -1.20323,-2.6875 -2.6875,-2.6875h-10.75c-1.48427,0 -2.6875,1.20323 -2.6875,2.6875c0,1.48427 1.20323,2.6875 2.6875,2.6875h10.75c1.48427,0 2.6875,-1.20323 2.6875,-2.6875zM137.0625,32.25h-123.625c-1.48427,0 -2.6875,1.20323 -2.6875,2.6875c0,1.48427 1.20323,2.6875 2.6875,2.6875h123.625c1.48427,0 2.6875,-1.20323 2.6875,-2.6875c0,-1.48427 -1.20323,-2.6875 -2.6875,-2.6875zM113.97688,70.6275l-41.41437,-24.94c-1.65803,-0.95731 -3.70011,-0.96041 -5.36104,-0.00815c-1.66093,0.95227 -2.68995,2.71613 -2.70146,4.63065v49.7725c-0.0271,1.94708 1.001,3.75655 2.6875,4.73c1.66303,0.96015 3.71197,0.96015 5.375,0l41.44125,-24.8325c1.61902,-0.97138 2.60965,-2.721 2.60965,-4.60906c0,-1.88806 -0.99063,-3.63768 -2.60965,-4.60906zM69.875,100.0825v-49.665l41.36063,24.8325z" fill="#acacac"></path>
                                            <path d="M118.25,110.1875c-1.48427,0 -2.6875,1.20323 -2.6875,2.6875v5.375c0,1.48427 1.20323,2.6875 2.6875,2.6875c1.48427,0 2.6875,-1.20323 2.6875,-2.6875v-5.375c0,-1.48427 -1.20323,-2.6875 -2.6875,-2.6875z" fill="#fc6d74"></path>
                                            <path d="M131.6875,110.1875c-1.48427,0 -2.6875,1.20323 -2.6875,2.6875v5.375c0,1.48427 1.20323,2.6875 2.6875,2.6875c1.48427,0 2.6875,-1.20323 2.6875,-2.6875v-5.375c0,-1.48427 -1.20323,-2.6875 -2.6875,-2.6875z" fill="#34c695"></path>
                                            <path d="M145.125,110.1875c-1.48427,0 -2.6875,1.20323 -2.6875,2.6875v5.375c0,1.48427 1.20323,2.6875 2.6875,2.6875c1.48427,0 2.6875,-1.20323 2.6875,-2.6875v-5.375c0,-1.48427 -1.20323,-2.6875 -2.6875,-2.6875z" fill="#5eb0dd"></path>
                                        </g>
                                    </g>
                                </svg>
                            </Col>
                        </Row>
                    </Container>

                    {this.state.redirectToSearch && 
                        <Redirect
                            push
                            to={{
                                pathname: '/search',
                                state: {
                                    searchQuery: this.state.searchQuery
                                }
                            }}
                        />
                    }
                </Container>
            </div>
        )
    }
}