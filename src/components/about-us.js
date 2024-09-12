import React from "react";
import Link from "next/link";

function AboutUs() {
  return (
    <div
      className=" px-[140px] py-[50px] bg-[#F8F8F8]
     max-2xl:px-[100px] max-xl:px-[50px] max-md:px-[20px]"
    >
      <div
        className="flex justify-between max-2xl:gap-[50px]
      max-lg:flex-wrap"
      >
        <div>
          <h4 className="pb-[50px]">About us</h4>
          <div className="pb-[50px]">
            <h1 className="text-[36px] font-[600] max-2xl:text-[32px] max-md:text-[22px]">
              The team will turn your <br />
              ideas into reality
            </h1>
            <p className="py-[30px]">
              We feel that in this digital age, connection is reqiired to develop <br />
              a sucessful corporate empire. Having user-focused websites <br />
              or mobile applications that are simple to use can increase your <br />
              market competitiveness.
            </p>
            <Link href="/about">
              <button
                className=" flex items-center text-white
          bg-[#6b6b6b]"
              >
                Learn more
              </button>
            </Link>
          </div>

          <div
            className="flex p-[50px] justify-between border-2 rounded-[20px]
           text-[36px] font-[600] gap-[200px] max-2xl:text-[32px] max-2xl:gap-[100px] max-md:gap-[50px] max-md:p-[30px] max-md:text-[26px]"
          >
            <div className="  text-center ">
              <div className="pb-[50px]">
                <h1>8</h1>
                <p className="font-[500] text-[16px] text-[#6b6b6b]">Operated Years</p>
              </div>
              <div>
                <h1>40+</h1>
                <p className="font-[500] text-[16px] text-[#6b6b6b]">Professionals</p>
              </div>
            </div>

            <div className=" text-center">
              <div className="pb-[50px]">
                <h1>200+</h1>
                <p className="font-[500] text-[16px] text-[#6b6b6b]">Happy Clients</p>
              </div>
              <div>
                <h1>650+</h1>
                <p className="font-[500] text-[16px] text-[#6b6b6b]">Amazing Projects</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src="/imges/about-landing.jpg"
            alt="*"
            className="rounded-[20px] max-2xl:w-[500px]
          max-2xl:h-[736px] max-xl:w-[350px] max-lg:w-[668px] max-lg:h-[350px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
