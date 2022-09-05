import React, { useEffect, useState } from "react";
import carrusel1 from "../Images/carrusel1.jpeg";

const Carrusel = () => {
  const [imagePosition, setImagePosition] = useState(0);
  const [imageCarrusel, setImageCarrusel] = useState("1lol");

  const images = require.context("../Images");
  const prevImage = () => {
    if (imagePosition === 0) {
      setImagePosition(3);
    } else {
      setImagePosition(previousState => previousState - 1);
    }
  };

  const nextImage = () => {
    if (imagePosition === 3) {
      setImagePosition(0);
    } else {
      setImagePosition(previousState => previousState + 1);
    }
  };

  useEffect(() => {
    setImageCarrusel(images[imagePosition]);
    console.log(images);
  }, [imagePosition]);

  return (
    <div>
      <div className="bg-red border-2 border-black flex justify-around items-end h-[30rem]">
        <button onClick={prevImage}>prev</button>
        <img
          className="w-full h-[100%] "
          // src={imageCarrusel}
          alt=""
        />

        <button onClick={nextImage}>next</button>
      </div>
    </div>
  );
};

export default Carrusel;
