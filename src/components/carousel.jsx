import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';

export default function Slide() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <div className="carousel">
      <Carousel fade activeIndex={index} onSelect={handleSelect} indicators={false} controls={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={c1}
            alt="Coffee Display"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={c2}
            alt="Black Coffe"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={c3}
            alt="Cappuccino Coffee"
          />
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  