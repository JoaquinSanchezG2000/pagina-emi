import React from "react";
import menu from "../Images/menu.png";
import logo from "../Images/logo.png";

const Navegation = () => {
  return (
    <div className="mb-4 header-background  flex w-full h-[7rem] items-center justify-start bg-white  ">
      <div className="border-b-3 border-gray  flex w-full justify-between lg:justify-around mx-4">
        <div className="flex items-center justify-center  ">
          <img className="h-[5rem] " src={logo} alt="" />
          <h2 className="text-3xl text-green-400 ml-6">Cabaña</h2>
        </div>

        <img className="h-[6.5rem]  lg:hidden  " src={menu} alt="" />

        <div className="h-full hidden lg:block ">
          <ul className="   h-full lg:flex text-2xl w-[70%] mx-[14rem] my-[1.5rem] justify-between ">
            <li className="p-2 hover:border-b-2 border-gray hover:scale-110 ">
              {" "}
              <a href="#features">Quienes Somos ?</a>{" "}
            </li>
            <li className=" p-2 hover:border-b-2 border-gray hover:scale-110 ">
              {" "}
              <a href="#products">Nuestras opciones</a>{" "}
            </li>
            <li className=" p-2 hover:border-b-2 border-gray hover:scale-110">
              {" "}
              <a href="#contacto">Contacto</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navegation;
