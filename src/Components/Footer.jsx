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
      <section className="max-w-[1440px] mx-auto py-6 flex justify-between">
        <div className="flex flex-col gap-4">
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
        <div className="flex flex-col gap-4">
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
        <div className="flex flex-col gap-4">
          <h2>Other Links</h2>
          <div className="flex flex-col gap-4">
            {footerOtherLinks.map((item, index) => {
              const { title } = item;
              return <Link>{title}</Link>;
            })}
          </div>
        </div>
      </section>
      <div className="h-[3px] w-[100vw] bg-[#ffffffA2]"></div>
    </footer>
  );
}

export default Footer;
