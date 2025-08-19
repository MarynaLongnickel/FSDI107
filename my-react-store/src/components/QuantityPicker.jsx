import { useState } from 'react';
import './QuantityPicker.css';

function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  function decrease() {
    let val = quantity - 1;
    if (val < 1) val = 1;
    setQuantity(val);
  }

  function increase() {
    let val = quantity + 1;
    setQuantity(val);
  }

  return (
    <div className="qt-picker">
      <button className="qt-btn" onClick={decrease} disabled={quantity === 1}>
        -
      </button>

      <label className="qt-label">{quantity}</label>

      <button className="qt-btn" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
