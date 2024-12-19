import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstImage from '../../assets/images/caraoselImage/CONCEIRGECARAOUSEL/ConciergeBannerImage-min.png';
import secondImage from '../../assets/images/caraoselImage/CONCEIRGECARAOUSEL/Group 65-min.png';
import thirdImage from '../../assets/images/caraoselImage/CONCEIRGECARAOUSEL/Group 66-min.png';
import fourthImage from '../../assets/images/caraoselImage/CONCEIRGECARAOUSEL/Group 67-min.png';



const Carouselconceirge = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 custom_styling_image"
            src={firstImage}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom_styling_image"
            src={secondImage}
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom_styling_image"
            src={thirdImage}
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom_styling_image"
            src={fourthImage}
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default Carouselconceirge;
