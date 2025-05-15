import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function DailyDeal() {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/products?type=special')
      .then(res => setProduct(res.data[0]))
      .catch(err => console.error('Error fetching daily deal:', err));
  }, []);

  if (!product) return null;

  return (
    <Card>
      <Card.Img
        variant="top"
        src={product.imageUrl}
        alt={product.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price} ₺</Card.Text>
        <Button variant="primary" onClick={() => navigate(`/product/${product.id}`)}>Sepete Ekle</Button>
      </Card.Body>
    </Card>
  );
}

export default DailyDeal;
