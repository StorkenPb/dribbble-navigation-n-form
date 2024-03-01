import React from 'react';
import { HiArrowSmLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const PageHeader = ({ title }) => {
  return (
    <div className="mt-[1px] bg-white p-8">
      <Link to={-1} className="ml-[-0.5rem] p-2 focus:ring-2">
        {<HiArrowSmLeft className="inline" />} Back
      </Link>
      <h1 className="my-1 text-2xl font-bold">{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore
        quisquam nulla perspiciatis, veritatis ipsa ratione.
      </p>
    </div>
  );
};

export default PageHeader;
