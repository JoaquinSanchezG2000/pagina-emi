import React from "react";
import instaLogo from "../Images/instagram.png";
import whatsLogo from "../Images/whatsapp.png";

const Contact = () => {
  return (
    <div className="contacto ">
      <div className="text-center mb-[6rem]  ">
        <h2 className="text-red-300 text-2xl mb-5">Contacto</h2>
      </div>
      <div className="flex justify-around">
        <a className="mb-[5rem]" href="">
          <img src="" alt="mercadolibre" />
        </a>
        <a className="border-2 mb-[5rem]" href="">
          <img className="w-16  border-4 " src={whatsLogo} alt="whatsap" />
        </a>
        <a className="mb-[5rem]" href="">
          <img className="w-16 border-2" src={instaLogo} alt="instagram" />
        </a>
      </div>
    </div>
  );
};
export { instaLogo, whatsLogo };
export default Contact;
