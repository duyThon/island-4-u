import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/navbar/navbar-logo.png";
import phone from "../assets/social/phone.png";
import mail from "../assets/social/mail.png";
import linkin from "../assets/social/linkin.png";
import github from "../assets/social/github.png";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavClick = (type) => {
    const params = new URLSearchParams({ type });
    navigate(`/islands?${params.toString()}`);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <div
        style={{ zIndex: "99" }}
        className="navbar fixed top-0 left-0 w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"></div>
        <div className="navbar-container relative flex items-center justify-between px-[20px] py-[10px] md:px-[50px] md:py-[14px]">
          <div className="navbar-logo">
            <Link to="/">
              <img
                src={logo}
                style={{ zIndex: "99" }}
                className="w-[150px] relative"
              />
            </Link>
          </div>
          <ul className="navbar-list hidden md:flex list-none flex-wrap items-center justify-center space-x-[40px] tracking-wide">
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

          <ul className="navbar-list hidden md:flex list-none flex-wrap items-center justify-center space-x-[40px] tracking-wide">
            <li>
              <a
                className="group relative inline-block overflow-hidden transition text-white cursor-pointer"
                onClick={() => handleNavClick("rent")}
              >
                Island For Rent
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                className="group relative inline-block overflow-hidden transition text-white cursor-pointer"
                onClick={() => handleNavClick("sale")}
              >
                Island For Sale
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 focus:outline-none"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>

          <div
            className={`md:hidden fixed top-0 right-0 h-full w-screen bg-black/90 backdrop-blur-lg text-white px-6 pt-[150px] transition-transform duration-500 divide-y-[2px] space-y-[20px] ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="space-y-6 text-lg font-playfair text-center">
              <li>
                <Link
                  to="/island"
                  className="group relative inline-block overflow-hidden transition text-white"
                >
                  Island For Rent
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/island"
                  className="group relative inline-block overflow-hidden transition text-white"
                >
                  Island For Sale
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
            <ul
              style={{ borderColor: "#cccccc33" }}
              className="font-playfair text-center space-y-6 text-lg pt-[20px]"
            >
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

            <ul
              style={{ borderColor: "#cccccc33" }}
              className="navbar-social pt-[20px] flex justify-center space-x-[20px]"
            >
              <li>
                <img src={github} />
              </li>

              <li>
                <img src={mail} />
              </li>

              <li>
                <img src={linkin} />
              </li>

              <li>
                <img src={phone} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
