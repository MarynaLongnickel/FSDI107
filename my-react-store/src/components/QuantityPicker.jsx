// QuantityPicker.jsx
import React, { useState } from 'react';

function QuantityPicker({ onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => {
      const newQuantity = prev + 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    setQuantity(prev => {
      if (prev > 1) {
        const newQuantity = prev - 1;
        onQuantityChange(newQuantity);
        return newQuantity;
      }
      return prev;
    });
  };

  return (
    <div className="quantity-picker">
      <button onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default QuantityPicker;
