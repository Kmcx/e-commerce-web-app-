import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function VisitedProducts() {
  const visited = useSelector(state => state.visited.visitedProducts);
  const navigate = useNavigate();

  if (visited.length === 0) return null;

  return (
    <Container className="mt-5">
      <h5>Gezilen Ürünler</h5>
      <Row>
        {visited.map(product => (
          <Col md={4} lg={3} key={product.id} className="mb-3">
            <Card style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${product.id}`)}>
              <Card.Img variant="top" src={product.imageUrl} style={{ height: '180px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}₺</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default VisitedProducts;
