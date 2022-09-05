import React from "react";
import carrusel1 from "../Images/carrusel1.jpeg";

const ProductInfo = () => {
  return (
    <div id="products" className="text-center mt-10 ">
      <h2 className="text-3xl mb-10 text-black">Alojamientos</h2>
      <div className=" lg:flex w-full h-[60rem] lg:h-[40rem] mb-10 ">
        <div className="w-[100%] h-[50%] lg:h-[100%] lg:w-[50%] lg:p-3 lg:m-5   ">
          <h2 className="text-2xl ">Cabaña1</h2>
          <a href="">
            <img
              className="w-full  h-[90%] mt-5 border-[3px] border-green-500 hover:scale-105 hover:brightness-125   "
              src={carrusel1}
              alt=""
            />
          </a>
        </div>

        <div className="w-[100%] h-[50%] lg:h-[100%] lg:w-[50%] lg:p-3 lg:m-5    ">
          <h2 className=" text-2xl">Cabaña2</h2>
          <a className=" " href="">
            <img
              className="w-full  h-[90%] mt-5 border-[3px] border-green-500 hover:scale-105 hover:brightness-125   "
              src={carrusel1}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
