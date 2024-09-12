import React, { useRef, useState } from "react";
import Link from "next/link";
import { SiAmazon } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function OurWork() {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const scrollRef = useRef(null);

  // function handleScroll(ref) {
  //   console.log(scrollRef.current);
  //   const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;
  // }

  // const element = document.querySelector("#container");
  // element.addEventListener("wheel", (event) => {
  //   event.preventDefault();

  //   element.scrollBy({
  //     left: event.deltaY < 0 ? -300 : 300,
  //   });
  // });

  const WebsiteData = [
    {
      id: 1,
      img: "/imges/work1.png",
      title: "Bloomey, House Plant Store ",
      title2: "Web development",
    },
    {
      id: 2,
      img: "/imges/work2.png",
      title: "Est-Trns Trading Website ",
      title2: "Web development",
    },
    {
      id: 3,
      img: "/imges/work3.png",
      title: "XYZ Interior Website ",
      title2: "Web development",
    },
    {
      id: 4,
      img: "/imges/work4.png",
      title: "Monly Website ",
      title2: "Web development",
    },
    {
      id: 5,
      img: "/imges/work5.png",
      title: "Removy Image crop Website ",
      title2: "Web development",
    },
  ];

  return (
    <div
      className=" px-[140px] pb-[100px] bg-[#F8F8F8]
     max-2xl:px-[100px] max-xl:px-[50px] max-md:px-[20px]"
    >
      <h1 className="text-[#6B6B6B] pt-[50px]">Our Works</h1>
      <div class="relative flex overflow-x-hidden ">
        <div
          class="py-[50px] animate-marquee whitespace-nowrap
        width-[100%] flex gap-[200px] px-[100px]
         max-2xl:gap-[120px] max-2xl:px-[60px] max-xl:gap-[88px] max-xl:px-[45px]
         max-lg:gap-[60px] max-lg:px-[30px] max-md:gap-[30px] max-md:px-[15px]"
        >
          <img src="/imges/google-symbol.png" alt="" className="max-lg:w-[46px] max-lg:h-[46px] max-md:w-[32px] max-md:h-[32px]" />
          <img src="/imges/html-5.png" alt="" className="max-lg:w-[46px] max-lg:h-[46px] max-md:w-[32px] max-md:h-[32px]" />
          <img src="/imges/amazon.png" alt="" className="max-lg:w-[46px] max-lg:h-[46px] max-md:w-[32px] max-md:h-[32px]" />
          <img src="/imges/github.png" alt="" className="max-lg:w-[46px] max-lg:h-[46px] max-md:w-[32px] max-md:h-[32px]" />
          <img src="/imges/pinterest.png" alt="" className="max-lg:w-[46px] max-lg:h-[46px] max-md:w-[32px] max-md:h-[32px]" />
          <img src="/imges/spotify.png" alt="*" className="max-lg:w-[46px] max-lg:h-[46px] max-md:w-[32px] max-md:h-[32px]" />
        </div>

        <div
          class="absolute top-0 py-[50px] animate-marquee2 whitespace-nowrap 
         flex  gap-[200px] px-[100px] 
         max-2xl:gap-[120px] max-2xl:px-[60px] max-xl:gap-[88px] max-xl:px-[45px]
         max-lg:gap-[60px] max-lg:px-[30px] max-md:gap-[30px] max-md:px-[15px]"
        >
          <img src="/imges/google-symbol.png" alt="" className="max-lg:w-[46px] max-lg:h-[46px] max-md:w-[32px] max-md:h-[32px]" />
          <img src="/imges/html-5.png" alt="" className="max-lg:w-[46px] max-lg:h-[46px] max-md:w-[32px] max-md:h-[32px]" />
          <img src="/imges/amazon.png" alt="" className="max-lg:w-[46px] max-lg:h-[46px] max-md:w-[32px] max-md:h-[32px]" />
          <img src="/imges/github.png" alt="" className="max-lg:w-[46px] max-lg:h-[46px] max-md:w-[32px] max-md:h-[32px]" />
          <img src="/imges/pinterest.png" alt="" className="max-lg:w-[46px] max-lg:h-[46px] max-md:w-[32px] max-md:h-[32px]" />
          <img src="/imges/spotify.png" alt="*" className="max-lg:w-[46px] max-lg:h-[46px] max-md:w-[32px] max-md:h-[32px]" />
        </div>
      </div>

      <div className="flex pb-[50px] justify-between max-xl:flex-col">
        <div>
          <h1 className="text-[36px] font-[600] max-2xl:text-[32px] max-md:text-[22px] ">
            We help businesses to make their <br />
            product come to life, worldwide.
          </h1>
        </div>
        <div className="pr-[50px] max-2xl:pr-[0px]">
          <p className="text-[#6B6B6B] pb-[50px] max-xl:pt-[50px] max-md:pt-[30px]">
            Our experience has helped our clients launch new <br />
            companies in the digital arena throughot the years. <br />
            Take a lock at some of our greatest work
          </p>
          <Link href="/work ">
            <button className=" flex items-center text-[#2563EB]  bg-[#EEF0F4] font-[600]">See all works</button>
          </Link>
        </div>
      </div>

      <div id="container" className="flex gap-[100px] overflow-hidden overflow-x-scroll max-2xl:gap-[50px]">
        {WebsiteData.map((item, i) => (
          <div key={i} className=" ">
            <div className="p-[50px] bg-[#EEF0F4] rounded-[20px] w-[760px] h-auto max-2xl:w-[515px] max-md:p-[30px] max-md:w-[380px]">
              <img src={item.img} alt="*" className="w-[660px] h-[450px] rounded-[20px] max-2xl:h-[350px] max-md:h-[300px]" />
            </div>

            <div className="flex p-[20px] justify-between">
              <div>
                <h1 className="text-[26px] font-[600] max-2xl:text-[24px] max-md:text-[20px] ">{item.title}</h1>
                <h1>{item.title2}</h1>
              </div>
              <div className="flex items-center gap-[20px]">
                <Link href="/work ">
                  <div className="border-[2px] border-[#c9c8c8] p-[12px] rounded-[25px]">
                    <FaArrowRightLong className="text-[24px]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurWork;
