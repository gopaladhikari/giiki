import React from "react";
import { footerLinks } from "../data";
import { footerOtherLinks } from "../data";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="bg-[#1E1515] text-white"
      style={{
        borderRadius: "40px 40px 0 0",
      }}
    >
      <section className="max-w-[1440px] mx-auto px-8 py-6 flex  flex-col md:flex-row gap-12 md:gap-0 justify-between">
        <div className="flex flex-col gap-4 md:w-[400px]  ">
          <h4 className="text-4xl">Keep Improving.</h4>
          <p className="text-[14px]">Subscribe to Giiki updates</p>
          <div className="bg-[#FFFFFF1A] max-w-[400px] rounded-[100px]">
            <form className="flex items-center rounded-[100px] px-6">
              <input
                className="py-3 w-full bg-transparent focus:outline-none"
                type="text"
                placeholder="Enter youe email here"
              />
              <button className="font-bold text-xl"> &rarr; </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          {footerLinks.map((item, index) => {
            const { title, url } = item;
            return (
              <Link
                key={index}
                to={url}
                className="text-whit text-[20px] capitalize hover:text-white"
              >
                {title}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 ">
          <h2>Other Links</h2>
          <div className="flex flex-col gap-4">
            {footerOtherLinks.map((item, index) => {
              const { title } = item;
              return <Link key={index}>{title}</Link>;
            })}
          </div>
        </div>
      </section>
      <div className="h-[1px] w-[100vw] bg-[#ffffffA2]"></div>{" "}
      <section className="max-w-[1440px] mx-auto px-8 py-6 flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
        <div className="flex flex-col gap-4 max-w-[400px] ">
          <img className="h-[58px] w-[98px]" src="./footer-logo.png" alt="" />
          <p className="text-[14px]">
            Bloomingdale International School is a candidate school* for the
            Diploma Programme.
          </p>
          <div className="flex gap-6">
            <img src="./play-store.png" alt="" />
            <img src="./apple-store.png" alt="" />
          </div>
        </div>
        <div className="mr-[-1.8rem]">
          <ul className="flex flex-col gap-3">
            <li className="font-bold text-[20px]">USA</li>
            <li>1124 W State street </li>
            <li>Frisco TX</li>
            <li>T. +91 7569303221</li>
            <li className="flex gap-3 mt-7">
              <img src="./fb.png" alt="" />
              <img src="./youtube.png" alt="" />
              <img src="./insta.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="mr-[4rem]">
          <ul className="flex flex-col gap-3">
            <li className="font-bold text-[20px]">India</li>
            <li>Kukatpally Main Road </li>
            <li>KBHB, Hyderabad</li>
            <li>T. +91 7569303221</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
