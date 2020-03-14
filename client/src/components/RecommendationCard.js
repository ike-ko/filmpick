import React, { Component } from 'react';
import { Col, Media } from 'react-bootstrap';
import YouTube from 'react-youtube';

export default class RecommendationCard extends Component {

    render() {
        const opts = {
            height: '180',
            width: '320',
            origin: window.location.origin,
            enablejsapi: 1,
            widget_referrer: window.location.origin
        }

        return (
            <Col 
                sm={12}
                md={12}
                lg={12}
                xl={6}
                className="mb-3 p-3"
            >
                <Media className="h-100 p-3 border border-secondary rounded bg-white">
                    <Media.Body className="h-100 mr-3 d-flex flex-column">
                        <h5>{this.props.title}</h5>
                        <p>{this.props.overview}</p>
                    </Media.Body>
                    <div className="my-auto">
                        <YouTube
                            videoId={this.props.videoId}
                            opts={opts}
                        />
                    </div>
                </Media>
            </Col>
        )
    }
}