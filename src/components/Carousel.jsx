import React from 'react';
import ProductCard from './ProductCard';
import products from '../static/products.json';

const Carousel = () => {
  return (
    <div>
      <ul className="m-20 flex list-none flex-col gap-4 lg:flex-row">
        {products.map((product) => (
          <>
            <li>
              <ProductCard
                name={product.name}
                price={product.price}
                description={product.description_short}
              />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
