"use client";
import React from "react";

const Preloader = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-[100dvh] flex items-center justify-center bg-white z-[99999]'>
      <div className='loader border-4 border-solid border-gray-300 border-t-[#FF8213] w-9 h-9 rounded-full'></div>
    </div>
  );
};

export default Preloader;
