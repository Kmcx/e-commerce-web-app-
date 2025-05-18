import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

function MainSlider() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/slider-items`)
      .then(res => {
        console.log("Slider data:", res.data);
        if (Array.isArray(res.data)) {
          setItems(res.data);
        } else {
          setItems([]); // fallback if response is invalid
        }
      })
      .catch(err => {
        console.error('Error fetching slider items:', err);
        setItems([]); // fallback on error
      });
  }, []);

  return (
    <Carousel>
      {Array.isArray(items) && items.map((item, index) => (
        <Carousel.Item key={item.id || index}>
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
  );
}

export default MainSlider;
