import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    document.body.style.overflow = toggleMenu ? "hidden" : "auto";
  }, [toggleMenu]);

  return (
    <header className="px-6 py-5 max-w-[1440px] mx-auto sticky">
      <nav className="font-[Roboto]">
        <ul className="justify-end gap-8 hidden md:flex">
          <li className="">
            <Link to="contact">Contact Sales Team</Link>
          </li>
          <li>
            <a href="">EN</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
        <div className="h-[2px] my-4 w-full bg-[rgba(0,0,0,0.2)] hidden md:block ">
          {" "}
        </div>
      </nav>
      <nav className="flex gap-8 justify-between items-center md:h-auto w-full md:static">
        <Link to="/giiki/">
          <img src="./logo.png" alt="Logo" />
        </Link>
        <div
          className={`flex absolute md:static h-screen w-full gap-6 top-[100px] ${
            toggleMenu ? "left-[0]" : "left-[-100%]"
          } transition-all duration-[0.8s] md:h-auto left-0 flex-col items-center md:flex-row md:justify-between bg-[#ECF9FE] md:bg-[#F5F5F5]`}
        >
          <ul className="flex flex-col md:flex-row gap-6 lg:gap-10 items-center mt-[50%] md:m-0">
            <li>
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Link to="products">Products</Link>
              </button>
            </li>
            <li>
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Link to="case-studies">Case Studies</Link>
              </button>
            </li>
            <li>
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Link to="pricing">Pricing</Link>
              </button>
            </li>
            <li>
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Link to="about">About Giiki</Link>
              </button>
            </li>
            <li>
              <button className="md:hidden bg-black text-white px-6 py-2  lg:px-10 lg:py-3 rounded-3xl">
                Book Your Demo
              </button>
            </li>
          </ul>
          <div className="text-center hidden md:block">
            <button className="bg-black text-white px-6 py-2  lg:px-10 lg:py-3 rounded-3xl">
              Book Your Demo
            </button>
          </div>
        </div>
        <div className="md:hidden">
          {toggleMenu ? (
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="text-2xl"
            >
              &#10005;
            </button>
          ) : (
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="text-4xl"
            >
              &#9776;
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
