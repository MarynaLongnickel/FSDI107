import React from 'react';
import QuantityPicker from './QuantityPicker';
import "./Product.css";

function Product({ name, price, description, imageUrl }) {
  const handleQuantityChange = (newQuantity) => {
    console.log(`Updated quantity for ${name}: ${newQuantity}`);
  };

  const handleAddToCart = () => {
    console.log(`Added ${name} to cart!`);
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${parseFloat(price).toFixed(2)}</span>
      
      <QuantityPicker onQuantityChange={handleQuantityChange} />
      
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
