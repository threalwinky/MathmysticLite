import React, { useState } from "react";
import Button from "./Button";
import { withTranslation, Trans } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nav = () => {
  let Links = [
    { name: "Trang chủ", link: "/" },
    { name: "Giới thiệu", link: "/intro" },
    { name: "Mô hình toán học", link: "/about" },
    { name: "Tài liệu học tập", link: "/doc" },
    { name: "Cửa hàng", link: "/store" },
    { name: "Liên hệ", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="absolute w-full fixed top-22 left-0">
      <div className="md:flex items-center justify-between py-3 md:px-0 px-0 navbg">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ioni"></ion-icon>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center  absolute md:static bg-white left-0 w-full md:w- transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-560px]"
          } nav`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                <Trans>{link.name}</Trans>
              </a>
            </li>
          ))}
          {/* h1
        <Button className=" md:pb-10 pb-12 absolute md:pl-0 pl-9">
          Get Started
        </Button> */}
        </ul>
        {/* <Button>
          Get Started
        </Button> */}
      </div>
    </div>
  );
};

export default Nav;
