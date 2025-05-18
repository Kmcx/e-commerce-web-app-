import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addVisitedProduct } from '../redux/visitedSlice';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
        dispatch(addVisitedProduct(res.data)); // Redux
      })
      .catch(err => console.error('Error fetching product:', err));
  }, [id, dispatch]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
      <p>Price: {product.price}₺</p>
      <p>Rating: {product.rating}/5</p>
    </div>
  );
}

export default ProductDetail;
