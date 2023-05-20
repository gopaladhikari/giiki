import React from "react";
import { footerLinks } from "../data";
import { footerOtherLinks } from "../data";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const validateNewsLetter = yup.object({
  newsLetter: yup.string().email("Please enter a valid email address"),
});

function Footer() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const initialValues = {
    newsLetter: "",
  };

  const { handleChange, handleSubmit, values, errors, handleBlur } = useFormik({
    initialValues,
    validationSchema: validateNewsLetter,
    onSubmit: (values, action) => {
      axios
        .post(url, values.newsLetter)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      action.resetForm();
    },
  });
  return (
    <footer
      className="bg-[#1E1515] text-white relative mt-[14rem] md:mt-[12rem] z-[-1]"
      style={{
        borderRadius: "40px 40px 0 0",
      }}
    >
      {" "}
      <div className="bg-[#64A8DF] rounded-[48px] py-8 absolute w-[95%] lg:w-[80%] px-2 left-1/2 translate-x-[-50%] top-[-8%] md:top-[-16%] mx-auto">
        <p className="flex flex-wrap text-3xl items-center justify-center gap-2">
          <span>Unlock your Schools</span>
          <span>
            <img src="./img1.png" alt="" />
          </span>
          <span>
            <img src="./img2.png" alt="" />
          </span>
          <span>potential —</span>
        </p>
        <p className="flex flex-wrap text-3xl items-center justify-center my-4">
          <span> apply to start today!</span>
        </p>
        <div className="w-[113px] mx-auto bg-white text-black flex justify-center items-center gap-3 h-[56px] rounded-[100px]">
          <button className="text-[#64A8DF] flex items-center gap-4">
            Join{" "}
            <div className="bg-[#64A8DF] w-[32px] h-[32px] font-bold text-[18px] rounded-full flex items-center justify-center text-white">
              {" "}
              &rarr;{" "}
            </div>{" "}
          </button>
        </div>
      </div>
      <section className="max-w-[1440px] mx-auto px-8 pt-[12rem] pb-16 flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
        <div className="flex flex-col gap-4 md:w-[400px]  ">
          <h4 className="text-4xl">Keep Improving.</h4>
          <p className="text-[14px]">Subscribe to Giiki updates</p>
          <div className="bg-[#FFFFFF1A] max-w-[400px] rounded-[100px]">
            <form
              onSubmit={handleSubmit}
              className="flex items-center rounded-[100px] px-6"
            >
              <input
                className="py-3 w-full bg-transparent focus:outline-none"
                name="newsLetter"
                type="text"
                placeholder="Enter youe email here"
                onChange={handleChange}
                value={values.newsLetter}
                onBlur={handleBlur}
              />
              <button type="submit" className="font-bold text-xl">
                {" "}
                &rarr;{" "}
              </button>
            </form>
          </div>
          {errors.newsLetter && (
            <p className="ml-3 text-[red]"> {errors.newsLetter} </p>
          )}
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
