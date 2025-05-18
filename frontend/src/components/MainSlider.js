import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Container } from 'react-bootstrap';

function MainSlider() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/slider-items`)
      .then(res => setItems(res.data))
      .catch(err => console.error('Error fetching slider items:', err));
  }, []);

  return (
    <div className="mt-4">
      <Carousel>
        {items.map((item, index) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.imageUrl}
              alt={`Slide ${index}`}
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h5>{item.heading}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MainSlider;
