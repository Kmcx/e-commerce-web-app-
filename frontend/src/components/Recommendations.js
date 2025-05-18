import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Recommendations.css';

function Recommendations() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/products?type=recommendation`)
      .then(res => {
        console.log("Recommendations response:", res.data);
        if (Array.isArray(res.data)) {
          setProducts(res.data.slice(0, 10));
        } else {
          console.warn('Expected array but got:', res.data);
          setProducts([]);
        }
      })
      .catch(err => {
        console.error('Error fetching recommendations:', err);
        setProducts([]);
      });
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <Container className="mt-5 position-relative">
      <h5 className="mb-3">Sana Özel Öneriler</h5>

      <div className="scroll-button" onClick={scrollRight}>
        ›
      </div>

      <div className="recommend-scroll-container" ref={scrollRef}>
        {Array.isArray(products) && products.map(product => (
          <Card
            key={product.id}
            className="recommend-card me-2"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <Card.Img variant="top" src={product.imageUrl} className="recommend-image" />
            <Card.Body className="p-2">
              <Card.Title className="fs-6">{product.name}</Card.Title>
              <Card.Text className="text-muted">{product.price} ₺</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Recommendations;
