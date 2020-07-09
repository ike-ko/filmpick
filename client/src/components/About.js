import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationContainer from '../containers/NavigationContainer';

export default class About extends Component {
    render() {
        return (
            <div className='main'>
                <NavigationContainer />
                <Container fluid className="content">
                    <h4 className='py-3 main-header'><strong>About</strong></h4>
                    <div className='about-content'>
                        <Row>
                            <Col>
                                <h1 className='home-text text-justify display-4 about-header'>
                                    Development
                                </h1>
                                <div className='mb-2 text-justify'>
                                    <div className='about-spacer d-inline-block'/>
                                </div>
                                <h5 className='home-text text-justify'>
                                    The front end client was created in React, with Bootstrap for responsive design. The back end was created in Node.js with Express
                                    as the web app framework and MongoDB as the database.
                                </h5>
                            </Col>
                            <Col xs={0} md={1}/>
                            <Col xs={0}>
                                <div className='about-images'>
                                    <img className='d-inline' width="192" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"/>
                                    <img className='d-inline' width="192" alt="Node.js logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png"/>
                                </div>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col xs={0}>
                                <div className='about-images'>
                                    <img width="256" alt="Git-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png"/>
                                </div>
                            </Col>
                            <Col xs={0} md={1}/>
                            <Col>
                                <h1 className='home-text text-justify display-4 about-header direction-rtl'>
                                    Deployment
                                </h1>
                                <div className='mb-2 text-justify direction-rtl'>
                                    <div className='about-spacer d-inline-block'/>
                                </div>
                                <h5 className='home-text text-justify'>
                                    The code for the application is hosted in <a href='https://github.com/ike-ko/filmpick'>this GitHub repository</a>. The application is hosted 
                                    on Heroku, which continuously deploys from the "master" branch of the repository.
                                </h5>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col>
                                <h1 className='home-text text-justify display-4 about-header'>
                                    External APIs
                                </h1>
                                <div className='mb-2 text-justify'>
                                    <div className='about-spacer d-inline-block'/>
                                </div>
                                <h5 className='home-text text-justify'>
                                This web app utilizes APIs provided by <a href='https://www.themoviedb.org/documentation/api'>TheMovieDB</a> to
                                search and get details on movies and TV shows and <a href='https://tastedive.com/read/api'>Tastedive</a> to generate
                                recommendations based on favorited items. 
                                </h5>
                            </Col>
                            <Col xs={0} md={1}/>
                            <Col xs={0}>
                                <div className='about-images'>
                                </div>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col>
                                <h5 className='my-5 text-center'>
                                    Created by <a href='https://www.linkedin.com/in/ko-iketani/'>Ko Iketani</a>
                                </h5>
                            </Col>
                        </Row>
                    </div>
                    
                </Container>
            </div>
        )
    }
}