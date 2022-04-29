import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const Banner = () => {
    return (
        <div className='container mt-3'>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src="https://i.ibb.co/c3FsDQK/05.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src="https://i.ibb.co/WVgkP7P/02.jpg"
      alt="Second slide"
      height={'vh'}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src="https://i.ibb.co/kMnJ5vt/03.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;

