import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Recommendations() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/products?type=recommendation')
      .then(res => setProducts(res.data.slice(0, 5))) // sadece 5 tane göster
      .catch(err => console.error('Error fetching recommendations:', err));
  }, []);

  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? 'text-warning' : 'text-secondary'}>
        ★
      </span>
    ));
  };

  return (
    <Container className="mt-5">
      <h5>Sana Özel Öneriler</h5>
      <Row>
        {products.map(product => (
          <Col md={4} lg={3} key={product.id} className="mb-4">
            <Card onClick={() => navigate(`/product/${product.id}`)} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={product.imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}₺</Card.Text>
                <div>{renderStars(product.rating)}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Recommendations;
