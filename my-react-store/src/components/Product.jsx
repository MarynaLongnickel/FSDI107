import React from 'react';

function Product({ name, price, description }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{price}</span>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
