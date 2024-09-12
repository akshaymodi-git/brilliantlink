import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="px-[140px] bg-[#F8F8F8] 
     max-2xl:px-[100px] max-xl:px-[50px] max-md:px-[20px]"
    >
      <div
        className="flex  gap-[150px] items-center justify-between py-[20px]
       max-2xl:gap-[100px] max-xl:gap-[40px] "
      >
        <div>
          <Link href="/">
            <h1
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 inline-block text-transparent bg-clip-text 
          text-[32px] font-[600] hover:cursor-pointer
           max-2xl:text-[30px] max-xl:text-[28px] max-md:text-[26px]"
            >
              {"{Brilliant}Link"}
            </h1>
          </Link>
        </div>

        <div className="max-lg:hidden">
          <ul className="flex gap-[50px] font-[600] text-[#6b6b6b] max-2xl:gap-[40px] ">
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
        <button
          className="   text-white
          bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400
          max-lg:"
        >
          Project Estimation
        </button>
      </div>
    </div>
  );
};

export default Header;
