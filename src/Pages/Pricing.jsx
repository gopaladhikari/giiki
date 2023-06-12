import { pricingCollapseList } from "../../constants";
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
        className="my-6 w-full px-6 md:px-0"
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
    </>
  );
}

export default Pricing;
