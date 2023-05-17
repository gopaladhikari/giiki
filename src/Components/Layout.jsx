import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
