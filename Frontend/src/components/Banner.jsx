import React from "react";
import banner from "/2--.jpg";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
            Hello and welcome to our store! Get a very{" "}
              <span className="text-pink-500">heavy discounts on Prams and Soft Toys!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Get Upto 50% off on Clothing, Shoes and Accessories.
              
            </p>
            
          </div>
         
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
