import React from 'react';
import Product from './Product';

function Catalog() {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: '$10.00', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: '$20.00', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: '$30.00', description: 'Description of Product 3' }
  ];

  return (
    <div className="catalog">
      <h2>Product Catalog</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product 
            key={product.id} 
            name={product.name} 
            price={product.price} 
            description={product.description} 
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
