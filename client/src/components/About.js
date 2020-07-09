import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import NavigationContainer from '../containers/NavigationContainer';

export default class About extends Component {

    render() {
        return (
            <div className='main'>
                <NavigationContainer />

                <Container fluid className="content">
                    <h4 className='py-3 ml-10'><strong>About</strong></h4>

                    <Container fluid="sm" className='mt-2 p-2 text-center border border-light rounded bg-light'>
                        <p>
                            This web app utilizes APIs provided by <a href='https://www.themoviedb.org/documentation/api'>TheMovieDB</a> to
                            search and get details on movies and TV shows and <a href='https://tastedive.com/read/api'>Tastedive</a> to generate recommendations based on favorited items. The front end
                            client was created in React, with Bootstrap for responsive design. The back end was created in Node.js with Express as the web app framework and MongoDB as the database.
                            All of this is hosted on Heroku, which continuously deploys from <a href='https://github.com/ike-ko/filmpick'>this GitHub repository</a>.
                            <br/>
                            <br/>
                            Created by Ko Iketani
                        </p>
                    </Container>
                </Container>
            </div>
        )
    }
}