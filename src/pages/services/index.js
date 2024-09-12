import React from "react";

function index() {
  return (
    <div>
      <div
        className="bg-[#F8F8F8] rounded-[20px] py-[100px] px-[140px] 
      max-2xl:px-[100px] max-xl:px-[50px] max-md:px-[20px]"
      >
        <div className="text-center pb-[50px]">
          <p className="pb-[50px] text-[#6b6b6b]">OUR SERVICES</p>
          <h1 className="text-[36px] font-[600] max-md:text-[22px]">
            We help businesses to make their <br />
            product come to life, worldwide.
          </h1>
        </div>

        <div className="flex items-center justify-center pb-[50px] gap-[100px]">
          <div>
            <div className="p-[50px] bg-[#e0e1e2] rounded-[20px]">
              <img src="/imges/service1.jpg" alt="*" className="rounded-[20px] w-[700px]" />
            </div>
            <div>
              <h4
                className="flex items-center justify-center text-[24px] font-[600] py-[30px]
              max-md:text-[20px]"
              >
                Website development
              </h4>
              <p className="pb-[30px] text-[#6b6b6b] text-center">
                Website and ecommerce do not have to be expensive or <br />
                complicated in order to be effective.We deal with a wide <br />
                spectrum of clients with varying budgets and needs.
              </p>
              <div className="flex items-center justify-center">
                <button
                  className=" flex items-center justify-center text-white
          bg-[#6b6b6b]"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pb-[50px] gap-[100px]">
          <div>
            <div className="p-[50px] bg-[#e0e1e2] rounded-[20px]">
              <img src="/imges/service2.png" alt="*" className="rounded-[20px] w-[700px]" />
            </div>
            <div>
              <h4
                className="flex items-center justify-center text-[24px] font-[600] py-[30px]
              max-md:text-[20px]"
              >
                Website app development
              </h4>
              <p className="pb-[30px] text-[#6b6b6b] text-center">
                We provide web applications on a variety of open source <br />
                platforms to enable optimal budget management. <br />
              </p>
              <div className="flex items-center justify-center">
                <button
                  className=" flex items-center justify-center text-white
          bg-[#6b6b6b]"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pb-[50px] gap-[100px]">
          <div>
            <div className="p-[50px] bg-[#e0e1e2] rounded-[20px]">
              <img src="/imges/service3.png" alt="*" className="rounded-[20px] w-[700px]" />
            </div>
            <div>
              <h4 className="flex items-center justify-center text-[24px] font-[600] py-[30px]
              max-md:text-[20px]">Mobile app development</h4>
              <p className="pb-[30px] text-[#6b6b6b] text-center">
                Website and ecommerce do not have to be expensive or <br />
                complicated in order to be effective.We deal with a wide <br />
                spectrum of clients with varying budgets and needs.
              </p>
              <div className="flex items-center justify-center">
                <button
                  className=" flex items-center justify-center text-white
          bg-[#6b6b6b]"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
