import React from "react";

function About() {
  return (
    <main className="px-6">
      <h1 className="text-[96px] lg:text-center">The Giiki Story</h1>
      <p className="text-[#808284] text-[36px] lg:text-center">
        We do things differently here
      </p>
      <section className="flex max-sm:flex-col justify-between  items-center border-y border-gray-400 my-20">
        <h3 className="max-w-[607px] text-[36px] font-normal py-10">
          Giiki is a platform that is owned by Educators and School Management
          teams in collaboration with IT Professionals{" "}
        </h3>
        <img src="/Giiki.png" alt="" className="pb-10" />
      </section>
      <img
        src="/about-banner.png"
        className="object-contain w-full max-h-[712px]"
        alt=""
      />

      <section></section>
    </main>
  );
}

export default About;
