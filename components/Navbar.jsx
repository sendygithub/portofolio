"use client";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="navbar py-6 ">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="text-3xl font-bold">Portofolio</h1>
          </div>
          <ul
            className={`menu flex items-center gap-12 md:static absolute  ${
              active ? "top-24 opacity- 100" : "top-20 opacity-0"
            } left-1/2-translate-x-1/2 md:-translate-x-1/2 md:flex-row flex-col md:bg-transparent bg-slate-700 w-full md:w-auto md:py-0 py-10 text-white md:text-black  transition-all duration-500 ease-in md:opacity-100 md:text-base text-xl`}
          >
            <li>
              <Link href="#beranda" className="text-white">
                Profile
              </Link>
            </li>
            <li>
              <Link href="#layanan" className="text-white">
                Skill
              </Link>
            </li>
            <li>
              <Link href="#proyek" className="text-white">
                Poject
              </Link>
            </li>
            <li>
              <Link href="#kontak" className="text-white">
                Kontak
              </Link>
            </li>
          </ul>
          <div className="md:hidden block" onClick={() => handleClick()}>
            <i className="ri-menu-3-line ri-2x font-bold"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
