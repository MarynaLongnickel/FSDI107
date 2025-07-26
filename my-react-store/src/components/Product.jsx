// Product.jsx
import React from 'react';
import QuantityPicker from './QuantityPicker';

function Product({ name, price, description, imageUrl }) {
  const handleQuantityChange = (newQuantity) => {
    console.log(`Updated quantity for ${name}: ${newQuantity}`);
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{price}</span>
      <QuantityPicker onQuantityChange={handleQuantityChange} />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
