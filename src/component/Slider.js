import React from 'react';
import slider1 from './img/IMG_2544.jfif';
import slider2 from './img/IMG_3290.jfif';
import slider3 from './img/IMG_3346.jfif';
import slider4 from './img/IMG_3366.jfif';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
export default function Slider() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={slider1}
        alt='...'
      >
        <h5>Woops game</h5>
        <p>I am jumping from top at this matterial </p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={slider2}
        alt='...'
      >
        <h5>Lunch</h5>
        <p>Lunch with my company friend during the woops game party.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={slider3}
        alt='...'
      >
        <h5>Bowling </h5>
        <p>This is the awseam game of bowling.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={slider4}
        alt='woop enjoy'
      >
        <h5>Picture with Boss</h5>
        <p>Taking picture with my boss in woops ground.</p>
      </MDBCarouselItem>

    </MDBCarousel>
  );
}