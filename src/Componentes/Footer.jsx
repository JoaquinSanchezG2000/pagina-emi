import React from "react";
import { instaLogo } from "./Contact";
import { whatsLogo } from "./Contact";
import mercadoLogo from "../Images/mercadoLogo.png";
import logo from "../Images/logo.png";

const Footer = () => {
  return (
    <div className=" w-full bg-yellow-200 flex items-center justify-around lg:mt-[8rem] mt-[15rem]">
      <div className=" h-full w-[20%] lg:w-[50%]  mr-6 flex items-center ">
        <img className="w-[1rem] h-[50%] " src={logo} alt="" />
        <div className="p-7 text-center ">
          <h3 className="text-black mb-10 text-2xl mb-3 hidden lg:block ">Cabañas emi </h3>
        </div>
      </div>
      <div
        id="contacto"
        className=" w-[60%] lg:w-[40%] p-[1rem] flex justify-start text-center flex-col   "
      >
        <h2 className="text-xl text-black mb-8 ">Constacto</h2>
        <div className="flex items-center justify-around w-full">
          <a href="">
            <img className="w-[4rem] " src={instaLogo} alt="" />
          </a>

          <a href="https://wa.link/xnuwu0 " target="_blank" className="border-3 ">
            <img className="w-[4rem] " src={whatsLogo} alt="" />
          </a>
          <a href="">
            {" "}
            <img className="w-[4rem] " src={mercadoLogo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
