import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div
        className="text-white bg-black rounded-[20px] px-[140px] 
      max-2xl:px-[100px] max-xl:px-[50px] max-md:px-[20px]"
      >
        <div
          className="text-center py-[70px] 
       max-md:py-[50px] "
        >
          <p className="">CONTACT US</p>
          <div className="leading-[50px] py-[30px] font-[600] ">
            <h1
              className="text-[36px]
            max-md:text-[24px]"
            >
              You've got this far.
            </h1>
            <h1
              className="text-[46px] 
            max-xl:text-[36px] max-md:text-[24px]"
            >
              Ready to get started?
            </h1>
          </div>
          <div
            className="pb-[50px] flex items-center justify-center 
          max-lg pb-[0px]"
          >
            <Link href="/contact ">
              <button
                className=" text-[18px]
          bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400
         py-[10px] px-[30px]
          rounded-[25px] max-md:text-[16px]"
              >
                Get in touch
              </button>
            </Link>
          </div>
        </div>

        <div
          className="flex  gap-[150px] items-center justify-between py-[10px] bottom-1
      border-b-2 border-white  max-2xl:gap-[100px] max-xl:gap-[40px] max-lg flex-wrap"
        >
          <div className="">
            <Link href="/">
              <h1
                className="bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 inline-block text-transparent bg-clip-text 
          text-[32px] font-[600] hover:cursor-pointer max-2xl:text-[30px]  max-md:text-[26px] "
              >
                {"{Brilliant}LINK"}
              </h1>
            </Link>
          </div>

          <div>
            <ul className="flex gap-[50px] font-[600] max-2xl:gap-[40px]">
              <Link href="/work ">
                <li className="hover:bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text hover:cursor-pointer">
                  Work
                </li>
              </Link>
              <Link href="/services ">
                <li className="hover:bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text hover:cursor-pointer">
                  Services
                </li>
              </Link>

              <Link href="/about">
                <li className="hover:bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text hover:cursor-pointer">
                  About
                </li>
              </Link>
              <Link href="/blog ">
                <li className="hover:bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text hover:cursor-pointer">
                  Blog
                </li>
              </Link>
              <Link href="/contact ">
                <li className="hover:bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text hover:cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex gap-[20px] text-[26px] ">
            <FaSquareFacebook />
            <FaSquareXTwitter />
            <GrLinkedin />
          </div>
        </div>

        <div className="flex justify-between py-[20px]">
          <div className="flex ">
            <p>Copyright &copy; 2022 BrilliantLink </p>
            <p className="max-lg:hidden">.Inc. All rights reserved</p>
          </div>
          <div
            className="flex gap-[40px] 
          max-lg:hidden "
          >
            <p>Privacy policy</p>
            <p>FAQ</p>
            <p>Terms of service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
