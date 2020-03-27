import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';

export default class Loading extends Component {

    render() {
        return (
            <Container fluid className='text-center pt-3'>
                {this.props.small 
                    ? <p>{this.props.message}</p> 
                    : <h3>{this.props.message}</h3>
                }
                <FontAwesomeIcon icon='spinner' spin />
            </Container>
        )
    }
}