import React from 'react';

const Hero = () => {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center bg-white p-24">
      <h1 className="my-2 text-4xl font-bold">
        Welcome to the new{' '}
        <span className=" font-extrabold text-[#444ce7]">YOU</span>
      </h1>
      <h2 className="text-lg">It's time to start living!</h2>
      <button className="mt-2 rounded-full bg-[#444ce7] px-6 py-3 text-white">
        Take the course now
      </button>
    </div>
  );
};

export default Hero;
