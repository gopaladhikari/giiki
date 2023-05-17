import React, { useState } from "react";
import HomeBanner from "../Components/HomeBanner";
import { HomeImages } from "../data";
import { HomeCollapseList } from "../data";
import HomeCollapse from "../Components/HomeCollapse";

function Homepage() {
  const [showparagraph, setShowparagraph] = useState(false);
  return (
    <>
      <HomeBanner />

      <section className="my-12">
        <div className="flex justify-around gap-6 flex-wrap">
          {HomeImages.map((image, index) => {
            return (
              <div key={index}>
                <img className="w-full" src={image.img} alt="Image" />
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#ECF9FE] py-12 px-4">
        <h1 className="text-center text-5xl">
          Every School Process. In One Place.{" "}
        </h1>
        <div className="flex flex-col md:flex-row md:pr-8 items-center">
          <div className="md:basis-1/2 ">
            <img className="mt-[4rem]" src="./goals.png" alt="" />
          </div>
          <div className="md:basis-1/2 w-full md:px-0">
            {HomeCollapseList.map((collapse, index) => {
              return <HomeCollapse key={index} {...collapse} />;
            })}
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font my-24 px-4">
        <div className="flex  md:flex-row flex-col-reverse items-center gap-12 md:gap-0 md:justify-around">
          <div className="basis-[50%] !mt-[-4rem] flex flex-col gap-6 md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
              More Time for What Matters
            </h1>
            <p className="leading-relaxed">
              Gone are the days with abundance data but no time for action Its
              time to take action! Gone are the days with abundance data but no
              time for
            </p>
            <div className="flex justify-center">
              <button className="font-bold bg-black text-white px-6 py-2  lg:px-10 lg:py-3 rounded-3xl">
                See How It Works
              </button>
            </div>
          </div>
          <div className="basis-[50%]">
            <img className="" alt="hero" src="./goals.png" />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font my-24 px-4">
        <div className="flex  md:flex-row flex-col items-center gap-12 md:gap-0 md:justify-between">
          <div className="basis-[50%]">
            <img
              className="lg:ml-[-2rem] xl:ml-[-4rem] "
              alt="hero"
              src="./goals.png"
            />
          </div>
          <div className="basis-[50%] !mt-[-4rem] flex flex-col gap-6 md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
              Manage work, Not Paper{" "}
            </h1>
            <p className="leading-relaxed">
              Gone are the days with abundance data but no time for action Its
              time to take action! Gone are the days with abundance data but no
              time for
            </p>
            <div className="flex justify-center">
              <button className="font-bold bg-black text-white px-6 py-2  lg:px-10 lg:py-3 rounded-3xl">
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
