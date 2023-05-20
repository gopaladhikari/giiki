import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showToggleMenu, setShowToggleMenu] = useState(false);
  if (window.innerWidth < 768)
    document.body.style.overflow = showToggleMenu ? "hidden" : "auto";
  return (
    <header className="px-6 py-5 max-w-[1440px] mx-auto sticky">
      <nav className="flex gap-3 lg:gap-10 justify-between items-center md:h-auto w-full">
        <Link to="/giiki/">
          <img src="./logo.png" alt="Logo" />
        </Link>
        {/* Desktop Menu */}
        <div className="flex max-md:hidden justify-between gap-4 w-full">
          <ul className="flex flex-col md:flex-row gap-3 md:text-[13px] lg:gap-6 xl:gap-8 lg:text-[16px] items-center">
            <li>
              <Link to="products">Products</Link>
            </li>
            <li>
              <Link to="case-studies">Case Studies</Link>
            </li>
            <li>
              <Link to="pricing">Pricing</Link>
            </li>
            <li>
              <Link to="contact">Contact Sales Team</Link>
            </li>
            <li>
              <Link to="about">About Giiki</Link>
            </li>
          </ul>
          <div className="text-center hidden md:block text-[13px] lg:text-[16px] ">
            <button className="bg-black text-white px-3 py-2  lg:px-10 lg:py-3 rounded-3xl">
              Book Your Demo
            </button>
          </div>
        </div>
        {/* Mobile Menu */}{" "}
        <div
          className={`flex md:hidden justify-between absolute ${
            showToggleMenu ? "right-0" : "right-[-100%]"
          } top-0 bg-blue-300 w-full h-screen pr-6 transition-all duration-300`}
        >
          <ul className="flex flex-col gap-4 w-full items-center justify-center">
            <li>
              <Link onClick={() => setShowToggleMenu(false)} to="products">
                Products
              </Link>
            </li>
            <li>
              <Link onClick={() => setShowToggleMenu(false)} to="case-studies">
                Case Studies
              </Link>
            </li>
            <li>
              <Link onClick={() => setShowToggleMenu(false)} to="pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link onClick={() => setShowToggleMenu(false)} to="contact">
                Contact Sales Team
              </Link>
            </li>
            <li>
              <Link onClick={() => setShowToggleMenu(false)} to="about">
                About Giiki
              </Link>
            </li>
            <li>
              <button className="bg-black text-white px-8 py-3  lg:px-10 lg:py-3 rounded-3xl">
                Book Your Demo
              </button>
            </li>
          </ul>
          <div>
            <button
              onClick={() => setShowToggleMenu(!showToggleMenu)}
              className="text-2xl mt-[36px] font-bold"
            >
              &#10005;
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setShowToggleMenu(!showToggleMenu)}
            className="text-2xl firefox-text-4xl active:bg-transparent"
          >
            &#9776;
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
