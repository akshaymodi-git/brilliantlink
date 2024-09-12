import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function index() {
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
    {
      id: 6,
      img: "/imges/work1.png",
      title: "Bloomey, House Plant Store ",
      title2: "Web development",
    },
    {
      id: 7,
      img: "/imges/work2.png",
      title: "Est-Trns Trading Website ",
      title2: "Web development",
    },
    {
      id: 8,
      img: "/imges/work3.png",
      title: "XYZ Interior Website ",
      title2: "Web development",
    },
  ];
  return (
    <div
      className=" px-[140px] py-[100px] bg-[#F8F8F8] 
    max-2xl:px-[100px] max-xl:px-[50px] max-md:px-[20px]"
    >
      <div className="flex items-center justify-center text-center">
        <div>
          <h1 className="text-[#6B6B6B]">Our Works</h1>
          <h1 className="text-[36px] font-[600] py-[50px] max-md:text-[22px]">
            We help businesses to make their <br />
            product come to life, worldwide.
          </h1>
          <p className="text-[#6B6B6B] pb-[50px]">
            Our experience has helped our clients launch new <br />
            companies in the digital arena throughot the years. <br />
            Take a lock at some of our greatest work
          </p>
        </div>
      </div>

      <div
        id="container"
        className="grid grid-cols-2 gap-[100px] overflow-hidden 
      max-2xl:gap-[50px] max-lg:flex max-lg:flex-wrap max-lg:pl-[]"
      >
        {WebsiteData.map((item, i) => (
          <div key={i} className=" ">
            <div
              className="p-[50px] bg-[#EEF0F4] rounded-[20px] w-[760px]  h-auto 
            max-2xl:w-[515px] max-xl:w-[425px] max-md:p-[30px] max-md:w-[385px] "
            >
              <img
                src={item.img}
                alt="*"
                className="w-[660px] h-[450px] rounded-[20px]
               max-2xl:h-[350px] max-xl:h-[300px]"
              />
            </div>

            <div className="flex p-[20px] justify-between">
              <div>
                <h1 className="text-[26px] font-[600] max-2xl:text-[24px] max-md:text-[20px]">{item.title}</h1>
                <h1>{item.title2}</h1>
              </div>
              <div className="flex items-center gap-[20px]">
                <div className="border-[2px] border-[#c9c8c8] p-[12px] rounded-[25px]">
                  <FaArrowRightLong className="text-[24px] max-md:text-[20px]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
