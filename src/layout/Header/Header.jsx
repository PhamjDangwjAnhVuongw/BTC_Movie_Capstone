import React from "react";
import logo from "./../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { getLocalStorage } from "../../utils/utils";
const Header = () => {
  const userLocal = getLocalStorage("User");
  console.log(userLocal);
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3 bg-opacity-95 shadow-xl fixed w-full z-10">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#logo" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Cybersoft Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Cybersoft Movie
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            {userLocal ? (
              <p>{userLocal.hoTen}</p>
            ) : (
              <NavLink
                to="/sign-in"
                className="text-gray-800 hover:text-red-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Đăng nhập
              </NavLink>
            )}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  aria-current="page"
                >
                  Lịch chiếu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  aria-current="page"
                >
                  Cụm rạp
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  aria-current="page"
                >
                  Tin tức
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  aria-current="page"
                >
                  Ứng dụng
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
