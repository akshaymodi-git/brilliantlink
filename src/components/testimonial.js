import React from "react";
import { IoIosCalculator } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

function Testimonial() {
  return (
    <div
      className=" px-[140px] py-[50px] bg-[#F8F8F8]
     max-2xl:px-[100px] max-xl:px-[50px] max-md:px-[20px]"
    >
      <p className="pb-[30px]">Testimonilas</p>
      <h1
        className="text-[36px] font-[700] pb-[30px]
      max-2xl:text-[32px] max-md:text-[22px]"
      >
        What they say about Us
      </h1>

      <div
        className="flex gap-[50px] justify-between 
      max-lg:flex-wrap"
      >
        <div className=" border-2 rounded-[20px] overflow-hidden">
          <p
            className="p-[50px] text-[28px]
           max-2xl:text-[26px] max-xl:text-[20px]  max-lg:p-[30px] max-lg:text-[18px] max-md:text-[14px]"
          >
            "It has been honor to work with BrilliantLink; they <br />
            are an absolutely fantastic team.Every piece of <br />
            work they've completed is flawless. Many users <br />
            were amazed with the work's quality"{" "}
          </p>

          <div
            className=" bg-[#e0e1e2] flex justify-between px-[50px] py-[30px] gap-[20px]  
           text-[28px] font-[600] max-2xl:text-[26px] max-lg:p-[30px] max-lg:text-[20px] max-md:text-[16px]"
          >
            <div className="flex items-center gap-[20px]">
              <div>
                <img src="/imges/profileimg.png" alt="*" width={70} height={80} className="rounded-[60px] max-md:w-[40px] max-md:h-[40px]" />
              </div>
              <div className="">
                <h1>Aaron mario, CEO</h1>
                <h1>We-famous</h1>
              </div>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="bg-[#F8F8F8] p-[10px] rounded-[25px]">
                <FaChevronLeft />
              </div>
              <div className="bg-[#F8F8F8] p-[10px] rounded-[25px]">
                {" "}
                <FaChevronRight />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-[20px] p-[50px] text-center text-[#F8F8F8] flex-col items-center justify-center max-md:p-[30px]">
          <div className="text-[64px] flex items-center justify-center pb-[50px] max-md:pb-[30px] ">
            {" "}
            <IoIosCalculator />
          </div>
          <h1
            className="text-[28px] pb-[20px] font-[600]
           max-2xl:text-[26px] max-md:text-[22px]"
          >
            Want to <br />
            estimate your <br />
            project ?
          </h1>
          <button
            className=" flex items-center text-black font-[600] 
          bg-[#F8F8F8]
          "
          >
            Project estimation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
