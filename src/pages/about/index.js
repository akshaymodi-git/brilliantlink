import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const index = () => {
  const AboutUs = [
    {
      id: 1,
      description:
        "It has been honor to work with BrilliantLink they are an absolutely fantastic team.Every piece of work they've completed is flawless. Many users were amazed with the work's quality",
      img: "/imges/profileimg.png",
      title: "Aaron mario, CEO",
      title2: "We-famous",
    },
    {
      id: 2,
      description:
        "It has been honor to work with BrilliantLink they are an absolutely fantastic team.Every piece of work they've completed is flawless. Many users were amazed with the work's quality",
      img: "/imges/profileimg.png",
      title: "Aaron mario, CEO",
      title2: "We-famous",
    },
    {
      id: 3,
      description:
        "It has been honor to work with BrilliantLink they are an absolutely fantastic team.Every piece of work they've completed is flawless. Many users were amazed with the work's quality",
      img: "/imges/profileimg.png",
      title: "Aaron mario, CEO",
      title2: "We-famous",
    },
    {
      id: 4,
      description:
        "It has been honor to work with BrilliantLink they are an absolutely fantastic team.Every piece of work they've completed is flawless. Many users were amazed with the work's quality",
      img: "/imges/profileimg.png",
      title: "Aaron mario, CEO",
      title2: "We-famous",
    },
  ];

  return (
    <div
      className=" px-[140px] py-[50px] bg-[#F8F8F8] 
    max-2xl:px-[100px] max-xl:px-[50px] max-md:px-[20px]"
    >
      <h4 className="py-[50px] text-center  text-[#6b6b6b]">About us</h4>

      <div className="flex justify-center pb-[50px]">
        <div
          className="p-[50px] bg-[#e0e1e2] rounded-[20px] w-[1300px] 
        max-md:p-[30px]"
        >
          <img src="/imges/team.jpg" alt="*" className="w-[1200px] rounded-[20px]" />
        </div>
      </div>

      <div>
        <div className="flex justify-center text-center">
          <div className="pb-[50px]">
            <h1
              className="text-[36px] font-[600]
            max-md:text-[22px]"
            >
              Our team will turn your ideas into reality
            </h1>
            <p className="py-[30px]">
              We feel that in this digital age, connection is reqiired to develop <br />
              a sucessful corporate empire. Having user-focused websites <br />
              or mobile applications that are simple to use can increase your <br />
              market competitiveness.
            </p>

            <div className="flex justify-center">
              <button className=" flex items-center text-white bg-[#6b6b6b]">Learn more</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className="flex p-[50px] justify-between border-2 rounded-[20px] text-[36px] font-[600] gap-[200px]
          max-xl:gap-[150px] max-md:gap-[50px] max-md:p-[30px] max-md:text-[26px]"
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
      </div>

      <div>
        <h1
          className="text-[36px] font-[700] py-[50px] text-center
        max-md:text-[22px]"
        >
          What they say about Us
        </h1>
        <div
          className="grid grid-cols-2 gap-[100px]
         max-2xl:gap-[50px] max-md:flex max-md:flex-wrap"
        >
          {AboutUs.map((item, i) => (
            <div key={i}>
              <div className=" border-2 rounded-[20px] overflow-hidden ">
                <p
                  className="p-[50px] text-[24px] 
                max-2xl:text-[22px] max-xl:text-[18px] max-lg:p-[30px] max-md:text-[16px]"
                >
                  {item.description}
                </p>

                <div
                  className=" bg-[#e0e1e2] flex justify-between px-[50px] py-[30px] 
           text-[26px] font-[600] max-xl:text-[24px] max-lg:text-[18px] max-lg:p-[30px]"
                >
                  <div className="flex items-center gap-[20px]">
                    <div>
                      <img src={item.img} alt="*" width={70} height={80} className="rounded-[60px] " />
                    </div>
                    <div>
                      <h1>{item.title}</h1>
                      <h1>{item.title2}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
