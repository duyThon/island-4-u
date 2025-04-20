import React from "react";
import "../styles/footer.css";

import logo from "../assets/navbar/navbar-logo.png";
import phone from "../assets/social/phone.png";
import mail from "../assets/social/mail.png";
import linkin from "../assets/social/linkin.png";
import github from "../assets/social/github.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer bg-primary">
        <div className="footer-container flex flex-col justify-center items-center px-[30px] md:px-[50px] lg:px-[100px] py-[50px] space-y-[20px] md:space-y-[80px]">
          <div className="footer-top w-full flex items-center grid grid-cols-12">
            <div className="footer-logo col-span-12 md:col-span-6 flex justify-center md:justify-start">
              <img src={logo} />
            </div>
            <ul className="footer-list hidden md:flex md:col-span-6 flex list-none flex-wrap items-center justify-end space-x-[40px] tracking-wide">
              <li>
                <Link
                  to="/about"
                  className="group relative inline-block overflow-hidden transition text-white"
                >
                  About Us
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="group relative inline-block overflow-hidden transition text-white"
                >
                  Contact
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="group relative inline-block overflow-hidden transition text-white"
                >
                  Services
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-mid font-playfair w-full flex justify-between items-center grid grid-cols-12 pt-[40px] md:pt-[80px] space-y-[20px]">
            <div className="footer-address col-span-12 md:col-span-4">
              <div className="text-center md:text-start font-roboto text-mix text-[14px] md:text-[22px]">
                <div>Da Nang -</div> <div>117 Tran Van Tra</div> Hoa Vang, Hoa
                Chau
              </div>
            </div>
            <div className="footer-info col-span-12 md:col-span-4">
              <div className="text-center md:text-start">
                <div className="md:mb-[8px]">
                  <a
                    className="text-white text-[28px] md:text-[40px]"
                    href="tel:0398185925"
                  >
                    039 8185 925
                  </a>
                </div>
                <span className="group relative inline-block overflow-hidden transition">
                  <a
                    className="text-mix font-roboto text-[14px] md:text-[22px]"
                    href="mailto:thongduy0512@gmail.com"
                  >
                    thongduy0512@gmail.com
                  </a>
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-mix transition-all duration-500 group-hover:w-0"></span>
                </span>
              </div>
            </div>
            <div className="footer-quote col-span-12 md:col-span-4 text-center md:text-end">
              <div className="text-[28px] md:text-[30px] text-mix">
                <div className="text-white">Let's go on a trip</div> of your
                dream
              </div>
            </div>
          </div>
          <div className="footer-end w-full flex justify-between items-center grid grid-cols-12 space-y-[20px]">
            <div className="footer-copyright col-span-12 order-2 md:order-1 md:col-span-8 pt-[20px] md:pt-0">
              <div className="text-center md:text-start font-roboto text-mix text-[14px] md:text-[22px]">
                NGUYEN DUY THONG © 2025. All rights reserved.
              </div>
            </div>
            <div className="footer-social col-span-12 order-1 md:order-2 md:col-span-4 flex">
              <div className="flex justify-center md:justify-end w-full">
                <ul
                  style={{ borderColor: "#cccccc33" }}
                  className="flex justify-center space-x-[20px]"
                >
                  <li>
                    <img
                      className="brightness-100 transition duration-300 hover:brightness-50 cursor-pointer"
                      src={github}
                    />
                  </li>
                  <li>
                    <img
                      className="brightness-100 transition duration-300 hover:brightness-50 cursor-pointer"
                      src={mail}
                    />
                  </li>
                  <li>
                    <img
                      className="brightness-100 transition duration-300 hover:brightness-50 cursor-pointer"
                      src={linkin}
                    />
                  </li>
                  <li>
                    <img
                      className="brightness-100 transition duration-300 hover:brightness-50 cursor-pointer"
                      src={phone}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
