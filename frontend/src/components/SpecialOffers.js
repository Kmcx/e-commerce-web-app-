import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SpecialOffers.css';

function SpecialOffers() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/products?type=special')
      .then(res => setProducts(res.data.slice(0, 3))) 
      .catch(err => console.error('Error fetching special offers:', err));
  }, []);

  return (
    <Container className="mt-4">
      <h5>Elektronik Fırsatlar</h5>
      <Carousel interval={3000}>
        {products.map(product => (
          <Carousel.Item key={product.id}>
             <Card
                className="text-center"
                style={{ width: '100%', maxWidth: '100%', cursor: 'pointer' }}
                onClick={() => navigate(`/product/${product.id}`)}
             >



              <Card.Img
                variant="top"
                src={product.imageUrl}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title className="fs-6">{product.name}</Card.Title>
                <Card.Text>{product.price} ₺</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default SpecialOffers;
