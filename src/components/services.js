import React from "react";
import Link from "next/link";

function Services() {
  return (
    <div
      className="bg-black rounded-[20px] py-[100px] px-[140px] text-white 
    max-2xl:px-[100px] max-xl:px-[50px] max-md:px-[20px]"
    >
      <div className="text-center pb-[50px]">
        <p className="pb-[50px] text-[#6b6b6b]">OUR SERVICES</p>
        <h1 className="text-[36px] font-[600] max-2xl:text-[32px] max-md:text-[22px]">
          We help businesses to make their <br />
          product come to life, worldwide.
        </h1>
      </div>

      <div
        className="flex items-center justify-center pb-[50px] gap-[100px]
      max-xl:gap-[75px] max-lg:gap-[50px] max-md:flex-wrap"
      >
        <img
          src="/imges/service1.jpg"
          alt="*"
          className="rounded-[20px] w-[395px] h-[306px]
        max-lg:w-[320px] "
        />
        <div>
          <h4 className="text-[24px] font-[600] pb-[10px] max-md:text-[20px]">Website development</h4>
          <p className="pb-[30px] text-[#6b6b6b]">
            Website and ecommerce do not have to be expensive or <br />
            complicated in order to be effective.We deal with a wide <br />
            spectrum of clients with varying budgets and needs.
          </p>
          <Link href="/services ">
            <button
              className=" flex items-center text-white
          bg-[#6b6b6b]"
            >
              Learn more
            </button>
          </Link>
        </div>
      </div>

      <div
        className="flex items-center justify-center pb-[50px] gap-[100px]
      max-xl:gap-[75px] max-lg:gap-[50px] max-md:flex-wrap"
      >
        <img
          src="/imges/service2.png"
          alt="*"
          className="rounded-[20px] w-[395px] h-[306px]
        max-lg:w-[320px]"
        />
        <div>
          <h4 className="text-[24px] font-[600] pb-[10px] max-md:text-[20px]">Website app development</h4>
          <p className="pb-[30px] text-[#6b6b6b]">
            We provide web applications on a variety of open source <br />
            platforms to enable optimal budget management. <br />
          </p>
          <Link href="/services ">
            <button
              className=" flex items-center text-white
          bg-[#6b6b6b]"
            >
              Learn more
            </button>
          </Link>
        </div>
      </div>

      <div
        className="flex items-center justify-center pb-[50px] gap-[100px]
      max-xl:gap-[75px] max-lg:gap-[50px] max-md:flex-wrap"
      >
        <img
          src="/imges/service3.png"
          alt="*"
          className="rounded-[20px] w-[395px] h-[306px]
        w-[320px]"
        />
        <div>
          <h4 className="text-[24px] font-[600] pb-[10px] max-md:text-[20px]">Mobile app development</h4>
          <p className="pb-[30px] text-[#6b6b6b]">
            Website and ecommerce do not have to be expensive or <br />
            complicated in order to be effective.We deal with a wide <br />
            spectrum of clients with varying budgets and needs.
          </p>
          <Link href="/services ">
            <button
              className=" flex items-center text-white
          bg-[#6b6b6b]"
            >
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
