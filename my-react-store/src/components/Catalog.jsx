import React, { useEffect, useState } from "react";
import Product from "./Product";
import getCatalog from "./services/catalogService";
import "./Catalog.css";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCatalog = async () => {
      const data = await getCatalog();
      setProducts(data);
    };

    fetchCatalog();
  }, []);

  return (
    <div className="catalog">
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
