import React, { Component } from 'react';
import Slider from 'react-slick';

const options = {
    autoplay: true,
    autoplaySpeed: 4000,
    className: 'mx-3',
    draggable: false,
    focusOnSelect: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 1
          }
        }
      ]
}

export default class CardCarousel extends Component {

    render() {
        return (
            <Slider {...options}>
                {this.props.cards}
            </Slider>
        )
    }
}