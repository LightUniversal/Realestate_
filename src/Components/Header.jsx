import React, { useState } from "react";
import menu from "../assets/imgs/menu.png";
import close from "../assets/imgs/close.png";
import {
  FaUser,
  FaBars,
  FaSignInAlt,
  FaHome,
  FaInfo,
  FaUserPlus,
  FaPhone,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <header className=" bg-slate-700 fixed w-full z-20 text-white">
        <div className="flex  relative top-4 w-full md:flex-nowrap md:justify-between items-center head flex-wrap gap-1">
          <div className="logo">
            <Link to={"/"} className=" font-bold text-4xl relative top-3">
              Mustafa Estate
            </Link>
          </div>

          <div className="menu-bar border-l  ml-3 px-10   py-5 relative top-3">
            <ul className=" justify-end flex gap-4 w-full ">
              
              <li>
                <a
                  href="tel:+2349132623281"
                  className="flex gap-2 items-center"
                >
                  <span className=" md:inline-block hidden">Call us</span> <FaPhone className=" text-2xl" />
                </a>
                
              </li>
              <li>
                <a
                  href="tel:+2349132623281"
                  className="flex gap-2 items-center font-medium text-blue-300"
                >
                  <span className=" md:inline-block hidden">Call us</span> <FaInstagram className=" text-2xl" />
                </a>
                
              </li>
              <li>
                <a
                  href="tel:+2349132623281"
                  className="flex gap-2 items-center"
                >
                  <span className=" md:inline-block hidden">Call us</span> <FaFacebook className=" text-2xl" />
                </a>
                
              </li>
              
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
