import { pricingCollapseList, pricingCollapseList2 } from "../../constants";
import Collapse from "../Components/Collapse";
function Pricing() {
  return (
    <>
      <section className="flex flex-col gap-16 px-6">
        <article>
          <h1 className="font-[600] text-2xl xl:text-4xl">
            Everything you need for to run <br className="max-md:hidden" /> the
            school
          </h1>
          <h2 className="font-normal text-xl">
            Get to know Giiki! It will only take a minute
          </h2>
        </article>
        <div className="flex max-lg:flex-col w-full gap-8 justify-end">
          <div className="lg:border-r-2 lg:pr-6">
            <div className="flex gap-4 items-center">
              <img src="/herb.png" alt="" />
              <span className="text-xl font-bold"> Sprout </span>
            </div>
            <article className="flex flex-col gap-4 my-4">
              <h3 className="font-bold">$0 USD/Scholl/year</h3>
              <p>The essential to manage start up school</p>
              <button className="flex justify-center items-center w-[197px] h-[39px] bg-black text-white  rounded-3xl">
                Start Free Trial
              </button>
            </article>
          </div>
          <div className="lg:border-r-2 lg:pr-6">
            <div className="flex gap-4 items-center">
              <img src="/pot.png" alt="" />
              <span className="text-xl font-bold"> Sprout </span>
            </div>
            <article className="flex flex-col gap-4 my-4">
              <h3 className="font-bold">$0 USD/Scholl/year</h3>
              <p>The essential to manage start up school</p>
              <button className="flex justify-center items-center w-[197px] h-[39px] bg-black text-white  rounded-3xl">
                Start Free Trial
              </button>
            </article>
          </div>
          <div className="lg:border-r-2 lg:pr-6">
            <div className="flex gap-4 items-center">
              <img src="/cloud.png" alt="" />
              <span className="text-xl font-bold"> Sprout </span>
            </div>
            <article className="flex flex-col gap-4 my-4">
              <h3 className="font-bold">$0 USD/Scholl/year</h3>
              <p>The essential to manage start up school</p>
              <button className="flex justify-center items-center w-[197px] h-[39px] bg-black text-white  rounded-3xl">
                Start Free Trial
              </button>
            </article>
          </div>
        </div>
      </section>
      <img
        className="my-16 w-full px-6 md:px-0"
        src="/core-function.png"
        alt=""
      />
      <section className="px-6">
        <div>
          {pricingCollapseList.map((item, index) => (
            <Collapse key={index} {...item} />
          ))}
        </div>
      </section>

      <section className="px-6">
        <div className="bg-[#E7E0EB] rounded-[48px] px-6 flex flex-col gap-4 py-[100px] lg:justify-center lg:items-center">
          <h1 className="font-bold text-4xl">Get the Exact Support You Need</h1>
          <p className="text-[24px]">You can always contact us at</p>
          <div>
            <button className="bg-black text-white py-2 px-20 rounded-3xl">
              Find Out More
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 flex max-md:flex-col gap-6  my-10">
        <div className="flex-[4]">
          <h1 className="text-5xl font-bold">
            Frequently <br className="max-lg:hidden" /> asked{" "}
            <br className="max-lg:hidden" /> questions
          </h1>
          <button className="bg-black text-white px-12 my-6  py-1 lg:px-20 rounded-3xl">
            Get in Touch
          </button>
        </div>
        <div className="flex-[10]">
          {pricingCollapseList2.map((item, index) => (
            <Collapse key={index} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Pricing;
