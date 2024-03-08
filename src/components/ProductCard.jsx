import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

const ProductCard = ({ name, price, description }) => {
  const prices = price.toString().split('.');

  return (
    <div className="max-w-[320px] rounded-lg bg-white p-2 shadow-lg">
      <figure className="relative">
        <img
          src="https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-60 w-full rounded-lg rounded-b-none bg-center object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent from-75% to-white"></div>
      </figure>
      <div className="mx-2">
        <h3 className="mt-4 text-lg font-bold">{name}</h3>
        <p className="text-lg  font-bold">
          ${prices[0]}
          <span className=" align-top text-sm">
            .{prices[1] ? prices[1] : '00'}
          </span>
        </p>
        <p className="mt-1 text-xs text-gray-600">{description}</p>
        <button className="mb-2 mt-4 flex w-full justify-center gap-1 rounded-lg bg-[#444ce7] py-4 text-white hover:bg-indigo-700">
          <MdShoppingCart size={24} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
