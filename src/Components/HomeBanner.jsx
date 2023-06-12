function HomeBanner() {
  return (
    <section className="px-6 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0">
      <div className="flex flex-col gap-7 text-[18px]">
        <h2>The School Operating System</h2>
        <h1 className="text-3xl lg:text-[48px] font-semibold lg:pr-52 lg:leading-[56px]">
          Every Data Leads to Measurable Action{" "}
        </h1>
        <p className="lg:pr-52">
          Gone are the days with abundance data but no time for action Its time
          to take action!
        </p>
        <div>
          <button className="bg-black text-white px-6 py-2  lg:px-10 lg:py-3 rounded-3xl">
            Book Your Demo
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex gap-3 items-center">
            <img src="./2.png" alt="" />
            <div>
              <h3 className="font-[450]">225 Reviews</h3>
              <div className="flex items-center">
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./half-star.png" alt="" />
                <div className="h-[18px] bg-[rgba(0,0,0,0.2)] w-[2px] mx-2"></div>
                <h2>4.3</h2>
              </div>
            </div>
          </div>
          <div className="-2">
            <img src="./capterra.png" alt="" />
            <div>
              <div className="flex items-center">
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./half-star.png" alt="" />
                <div className="h-[18px] bg-[rgba(0,0,0,0.2)] w-[2px] mx-2"></div>
                <h2>4.3</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="max-w-[100%]" src="./banner.png" alt="" />
      </div>
    </section>
  );
}

export default HomeBanner;
