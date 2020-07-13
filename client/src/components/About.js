import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion"

import NavigationContainer from '../containers/NavigationContainer';
import { MOBILE_BREAKPOINT, HOME_TEXT_VARIANTS, HOME_SPACER_VARIANTS, ABOUT_SPACER_VARIANTS} from '../utils/constants';

export default class About extends Component {
    getAnimationProps = (delay, variants) => {
        return {
            custom: delay,
            initial: "hidden",
            animate: "visible",
            variants
        }
    }

    render() {
        const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

        return (
            <div className='main'>
                <NavigationContainer />
                <Container fluid className="content">
                    <h4 className='py-3 main-header'><strong>About</strong></h4>
                    <div className='about-content'>
                        <Row>
                            <Col>
                                <motion.div {...this.getAnimationProps(0.25, HOME_TEXT_VARIANTS)}>
                                    <h1 className='home-text text-justify display-4 about-header'>
                                        Development
                                    </h1>
                                </motion.div>
                                <motion.div {...this.getAnimationProps(0.5, HOME_SPACER_VARIANTS)}>
                                    <div className='mb-2 text-justify'>
                                        <div className='about-spacer d-inline-block'/>
                                    </div>
                                </motion.div>
                                <motion.div {...this.getAnimationProps(0.75, HOME_TEXT_VARIANTS)}>
                                    <h5 className='home-text text-justify about-text'>
                                        The front end client was created in React, with Bootstrap for responsive design. The back end was created in Node.js with Express
                                        as the web app framework and MongoDB as the database.
                                    </h5>
                                </motion.div>
                            </Col>
                            <Col xs={0} md={1}/>
                            <Col xs={0}>
                                {isMobile ? null : 
                                    <motion.div className='about-images' {...this.getAnimationProps(1, HOME_TEXT_VARIANTS)}>
                                        <img className='d-inline' width="192" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"/>
                                        <img className='d-inline' width="192" alt="Node.js logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png"/>
                                    </motion.div>
                                }
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col xs={0}>
                                {isMobile ? null : 
                                    <motion.div className='about-images' {...this.getAnimationProps(1, HOME_TEXT_VARIANTS)}>
                                        <img width="256" alt="Git-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png"/>
                                    </motion.div>
                                }
                            </Col>
                            <Col xs={0} md={1}/>
                            <Col>
                                <motion.div {...this.getAnimationProps(0.25, HOME_TEXT_VARIANTS)}>
                                    <h1 className='home-text text-justify display-4 about-header direction-rtl'>
                                    Deployment
                                    </h1>
                                </motion.div>
                                <motion.div {...this.getAnimationProps(0.5, ABOUT_SPACER_VARIANTS)}>
                                    <div className='mb-2 text-justify direction-rtl'>
                                        <div className='about-spacer d-inline-block'/>
                                    </div>
                                </motion.div>
                                <motion.div {...this.getAnimationProps(0.75, HOME_TEXT_VARIANTS)}>
                                    <h5 className='home-text text-justify about-text'>
                                        The code for the application is hosted in <a href='https://github.com/ike-ko/filmpick'>this GitHub repository</a>. The application is hosted 
                                        on Heroku, which continuously deploys from the "master" branch of the repository.
                                    </h5>
                                </motion.div>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col>
                                <motion.div {...this.getAnimationProps(0.25, HOME_TEXT_VARIANTS)}>
                                    <h1 className='home-text text-justify display-4 about-header'>
                                        External APIs
                                    </h1>
                                </motion.div>
                                <motion.div {...this.getAnimationProps(0.5, HOME_SPACER_VARIANTS)}>
                                    <div className='mb-2 text-justify'>
                                        <div className='about-spacer d-inline-block'/>
                                    </div>
                                </motion.div>
                                <motion.div {...this.getAnimationProps(0.75, HOME_TEXT_VARIANTS)}>
                                    <h5 className='home-text text-justify about-text'>
                                        This web app utilizes APIs provided by <a href='https://www.themoviedb.org/documentation/api'>TheMovieDB</a> to
                                        search and get details on movies and TV shows and <a href='https://tastedive.com/read/api'>Tastedive</a> to generate
                                        recommendations based on favorited items. 
                                    </h5>
                                </motion.div>
                            </Col>
                            <Col xs={0} md={1}/>
                            <Col xs={0} />
                        </Row>
                        <Row className='mt-5'>
                            <Col>
                                <motion.div {...this.getAnimationProps(1, HOME_TEXT_VARIANTS)}>
                                    <h5 className='my-4 text-center about-text'>
                                        Created by <a href='https://www.linkedin.com/in/ko-iketani/'>Ko Iketani</a>
                                    </h5>
                                </motion.div>
                            </Col>
                        </Row>
                    </div>
                    
                </Container>
            </div>
        )
    }
}