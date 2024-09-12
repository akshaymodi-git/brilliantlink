import React from "react";
import { TbCodeCircle2Filled } from "react-icons/tb";
import { TbArrowRightToArc } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiStrapi } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

function HomePage() {
  return (
    <div className="  bg-[#F8F8F8]">
      <div className=" ">
        <div
          className=" h-full w-full bg-[url('/imges/background5.png')] bg-no-repeat bg-cover 
        max-2xl:bg-cover max-xl:bg-auto max-lg:bg-cover max-md:bg-auto"
        >
          <div className="px-[140px] max-2xl:px-[100px] max-xl:px-[50px]  max-md:px-[20px]">
            <div
              className="text-[64px] font-[600] pt-[100px] pb-[50px] 
            max-2xl:text-[60px] max-xl:text-[50px] max-lg:text-[42px] max-lg:py-[30px] max-md:text-[32px]"
            >
              <h1 className="">Create Your Dream</h1>
              <div className="flex items-center ">
                <TbCodeCircle2Filled />
                <h1 className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 inline-block text-transparent bg-clip-text ">Website</h1>
                <h1 className="pl-[10px]">Design</h1>
              </div>
              <h1>With best {"{Coding}"} Team</h1>
            </div>

            <p
              className="text-[#6b6b6b] pb-[50px]
            max-lg:pb-[30px]"
            >
              We empower your dream design where you can build <br />
              and customize your professional website wit no worries. <br />
              We provides hassle-free and reliable hosting.{" "}
            </p>
            <div
              className="flex gap-[10px] items-center pb-[60px]
            max-lg:pb-[50px] max-md:pb-[30px]"
            >
              <button
                className=" flex items-center text-white
          bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
              >
                Try for Free
              </button>
              <TbArrowRightToArc className="text-[#6b6b6b]" />
              <p className="text-[#6b6b6b] font-[520]">7-Days Trial</p>
            </div>
            <p
              className="text-[#6b6b6b] pb-[40px] text-[22px]
            max-lg:text-[18px] max-lg:pb-[30px]"
            >
              Working with the best
            </p>
            <div
              className="flex text-[46px] gap-[40px] pb-[100px] max-xl:pb-[50px] 
            max-lg:text-[36px] max-lg:pb-[0px] max-md:text-[32px]"
            >
              <FaReact />
              <FaNodeJs />
              <SiStrapi />
              <RiNextjsFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
