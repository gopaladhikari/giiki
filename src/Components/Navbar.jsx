import React, { useState, useEffect } from "react";
import { navLinks } from "../../constants";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showToggleMenu, setShowToggleMenu] = useState(false);
  const activeStyle = {
    color: "blue",
  };

  useEffect(() => {
    if (showToggleMenu) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
  }, [showToggleMenu]);

  return (
    <header className="px-6 py-5 max-w-[1440px] mx-auto sticky z-30">
      <nav className="flex gap-3 lg:gap-10 justify-between items-center md:h-auto w-full">
        <NavLink to="/">
          <img src="/logo.png" alt="Logo" />
        </NavLink>
        {/* Desktop Menu */}
        <div className="flex justify-between items-center max-md:hidden gap-4 w-full">
          <ul className="flex flex-col md:flex-row gap-4 md:text-[14px] lg:gap-6 xl:gap-8 lg:text-[16px] items-center">
            {navLinks.map(({ id, title, url }) => (
              <li key={id}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to={url}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="text-center hidden md:block text-[16px] ">
            <button className="bg-black text-white px-6 py-3  lg:px-10 lg:py-3 rounded-3xl">
              Book Your Demo
            </button>
          </div>
        </div>
        {/* Mobile Menu */}{" "}
        <div
          className={`flex md:hidden justify-center items-center absolute ${
            showToggleMenu ? "right-0" : "right-[-100%]"
          } top-0 bg-blue-300 z-20 w-full h-screen px-3 transition-all duration-300`}
        >
          {" "}
          <div className="absolute top-[35px] right-6">
            <button
              onClick={() => setShowToggleMenu(!showToggleMenu)}
              className="text-2xl font-bold"
            >
              &#10005;
            </button>
          </div>
          <ul className="flex flex-col gap-4 w-full items-center justify-center">
            {navLinks.map(({ id, title, url }) => (
              <li key={id}>
                <NavLink
                  onClick={() => setShowToggleMenu(false)}
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to={url}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            <li>
              <button className="bg-black text-white px-8 py-3  lg:px-10 lg:py-3 rounded-3xl">
                Book Your Demo
              </button>
            </li>
          </ul>
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
