import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function About() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(48).jpg'
        alt='...'
      >
        <h5>About Us</h5>
        <p>I am Muzaffer I belong from bihar , I am working as a PHP developer right now at SDNA tech , I have experience in PHP 3 year + experience .</p>
        <p>I know the Laravel , codeigniter , Wordpress, Drupal , React Js etc .</p>
      </MDBCarouselItem>
      


    </MDBCarousel>
  );
}