import React from "react";
import img1 from "../assets/about/1.jpg";

const Contact = () => {
  return (
    <>
      <div className="h-[60vh] overflow-hidden relative">
        <img src={img1} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-playfair text-[80px]">
          Contact Us
        </div>
      </div>

      <div className="contact-container"></div>
    </>
  );
};

export default Contact;
