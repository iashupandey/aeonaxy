import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [openSidebar, setOpensidebar] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="" className="h-10 w-40" />
          </div>
          <div className="hidden sm:ml-6 lg:flex">
            <div className="relative ml-3">
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <select
                    href="#"
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium outline-none nav-select "
                  >
                    <option value="0">Product</option>
                    <option value="1">Product 1</option>
                    <option value="2">Product 2</option>
                  </select>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="absolute top-3 right-1 h-3 w-3 "
                  />
                </div>

                <div className="relative group">
                  <select
                    href="#"
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium outline-none nav-select "
                  >
                    <option value="0">Docs</option>
                    <option value="1">Doc 1</option>
                    <option value="2">Doc 2</option>
                  </select>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="absolute top-3 right-0 h-3 w-3 "
                  />
                </div>

                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Customers
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div className=" flex items-center">
            <div className="hidden lg:flex flex-col items-center group">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 px-3 pt-2 rounded-md text-sm font-semibold"
              >
                LOGIN
              </a>
              <span className="h-0.5 w-12 border border-red-700/70 group-hover:scale-100 scale-0 transition-all duration-200"></span>
            </div>

            <a
              href="#"
              className=" hidden lg:flex ml-4 px-4 py-2 rounded-full text-sm font-medium bg-indigo-700/80 text-white hover:bg-indigo-700"
            >
              SIGN UP
            </a>
            <div
              className="lg:hidden flex items-center cursor-pointer"
              onClick={() => setOpensidebar(true)}
            >
              <FontAwesomeIcon icon={faBars} className="text-black h-6 w-6 " />
            </div>
          </div>
        </div>

        <div
          className={`bg-slate-600/90 h-full fixed top-0 -left-full  transition-all duration-150 w-full  pt-28 ${
            openSidebar ? "translate-x-full" : ""
          }`}
        >
          <div className="relative   flex justify-center items-center w-full h-full">
            <ul className=" -mt-28 flex flex-col gap-10">
              <li className="flex justify-center cursor-pointer">
                <p className="text-white text-2xl md:text-4xl border-b-4 border-b-red-400 w-fit">
                  Products
                </p>
              </li>
              <li className="flex justify-center cursor-pointer">
                <p className="text-white text-2xl md:text-4xl border-b-4 border-b-red-400 w-fit">
                  Docs
                </p>
              </li>
              <li className="flex justify-center cursor-pointer">
                <p className="text-white text-2xl md:text-4xl border-b-4 border-b-red-400 w-fit">
                  Customers
                </p>
              </li>
              <li className="flex justify-center cursor-pointer">
                <p className="text-white text-2xl md:text-4xl border-b-4 border-b-red-400 w-fit">
                  Pricing
                </p>
              </li>

              <li className="md:mt-20">
                <a
                  href="#"
                  className=" flex ml-4 px-6 py-3 rounded-full text-white text-2xl md:text-4xl bg-indigo-700/80  hover:bg-indigo-700"
                >
                  SIGN UP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex ml-4 px-6 py-3  rounded-full text-white text-2xl md:text-4xl bg-indigo-700/80  hover:bg-indigo-700 flex justify-center"
                >
                  LOGIN
                </a>
              </li>
            </ul>

            <div
              className="absolute -top-10 md:top-0 right-10 md:right-20 border flex items-center"
              onClick={() => setOpensidebar(false)}
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-white md:h-16 md:w-16 h-8 w-8"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
