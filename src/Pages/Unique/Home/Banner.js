import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const Banner = () => {
  return (
    <div className=''>
      <div className='cards'>
        <Carousel >
          <Carousel.Item >
            <img
              className="d-block w-100 banner"
              src="https://i.ibb.co/c3FsDQK/05.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner"
              src="https://i.ibb.co/WVgkP7P/02.jpg"
              alt="Second slide"
              height={'vh'}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner"
              src="https://i.ibb.co/kMnJ5vt/03.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;

