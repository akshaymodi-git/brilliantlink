// "use client";
import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";

function Index() {
  const textAreaRef = useRef(null);
  // const [val, setVal] = useState("");
  // const handleChange = (e) => {
  //   setVal(e.target.value);
  // };

  const validatePeople = (peopleData) => {
    const errors = {};

    if (!peopleData.FirstName) {
      errors.FirstName = "Please Enter your First Name";
    } else if (peopleData.FirstName.length > 10) {
      errors.FirstName = "FirstName cannot exceed 10 characters";
    }

    if (!peopleData.LastName) {
      errors.LastName = "Please Enter your Last Name";
    } else if (peopleData.LastName.length > 10) {
      errors.LastName = "LastName cannot exceed 10 characters";
    }

    if (!peopleData.Message) {
      errors.Message = "Please Enter your Message";
    } else if (peopleData.Message.length < 5) {
      errors.Message = "Message should at least 5 characters";
    } else if (peopleData.Message.length > 20) {
      errors.Message = "Message cannot exceed 20 characters";
    }

    if (!peopleData.Number) {
      errors.Number = "Please Enter your Number";
    } else if (!/^[0-9]{10}$/i.test(peopleData.Number) && peopleData.Number.length !== 10) {
      errors.Number = "10 digit required";
    }

    if (!peopleData.EmailId) {
      errors.EmailId = "Please Enter Email ID";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(peopleData.EmailId)) {
      errors.EmailId = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Number: "",
      EmailId: "",
      Message: "",
    },
    validate: validatePeople,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [formik.values.Message]);

  return (
    <div
      className="bg-[#F8F8F8] rounded-[20px] py-[100px] px-[140px]
     max-2xl:px-[100px] max-xl:px-[50px] max-md:px-[20px]"
    >
      <div>
        <h1 className="pb-[50px] text-[#6b6b6b] text-center">Contact US</h1>
        <form onSubmit={formik.handleSubmit}>
          <div
            className=" p-[50px] justify-between border-2 rounded-[20px] text-[26px] text-[#6b6b6b] 
          max-lg:p-[30px] max-lg:text-[20px]"
          >
            <div
              className="flex justify-center  gap-[100px] py-[20px] max-2xl:gap-[50px] 
            max-lg:gap-[30px] max-md:flex-wrap"
            >
              <div>
                <label htmlFor="FirstName"></label>
                <input
                  className="border-2 rounded-[30px] px-[20px] py-[10px] w-[500px] active:outline-none   focus:outline-none
                   max-2xl:w-[400px] max-xl:w-[350px] max-lg:w-[280px] max-md:w-[260px]"
                  type="text"
                  placeholder="First Name"
                  Firstname="FirstName"
                  id="FirstName"
                  value={formik.values.FirstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.FirstName && formik.errors.FirstName ? <div style={{ color: "red" }}>{formik.errors.FirstName}</div> : null}
              </div>
              <div>
                <label htmlFor="LastName"></label>
                <input
                  className="border-2 rounded-[30px] px-[20px] py-[10px] w-[500px] 
                  active:outline-none   focus:outline-none
                   max-2xl:w-[400px] max-xl:w-[350px] max-lg:w-[280px] max-md:w-[260px]"
                  type="text"
                  placeholder="Last Name"
                  Lastname="LastName"
                  id="LastName"
                  value={formik.values.LastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.LastName && formik.errors.LastName ? <div style={{ color: "red" }}>{formik.errors.LastName}</div> : null}
              </div>
            </div>

            <div
              className="flex justify-center gap-[100px] py-[20px] 
            max-2xl:gap-[50px] max-lg:gap-[30px] max-md:flex-wrap"
            >
              <div>
                <label htmlFor="EmailId"> </label>
                <input
                  className="border-2 rounded-[30px] px-[20px] py-[10px] w-[500px] 
                  active:outline-none   focus:outline-none 
                  max-2xl:w-[400px] max-xl:w-[350px] max-lg:w-[280px] max-md:w-[260px]"
                  type="email"
                  placeholder="Email"
                  EmailId="EmailId"
                  id="EmailId"
                  value={formik.values.EmailId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.EmailId && formik.errors.EmailId ? <div style={{ color: "red" }}>{formik.errors.EmailId}</div> : null}
              </div>
              <div>
                <label htmlFor="Number"> </label>
                <input
                  className="border-2 rounded-[30px] px-[20px] py-[10px] w-[500px] 
                  active:outline-none  focus:outline-none 
                  max-2xl:w-[400px] max-xl:w-[350px] max-lg:w-[280px] max-md:w-[260px]"
                  type="tel"
                  placeholder="Phone Number"
                  Number="Number"
                  id="Number"
                  value={formik.values.Number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  maxLength={10}
                />
                {formik.touched.Number && formik.errors.Number ? <div style={{ color: "red" }}>{formik.errors.Number}</div> : null}
              </div>
            </div>
            <div className="flex justify-center gap-[100px] py-[20px] text-center">
              <div>
                <label htmlFor="Message"> </label>
                <textarea
                  className="border-2 rounded-[30px] px-[20px] py-[20px]  active:outline-none 
                    focus:outline-none w-[800px] 
                    max-2xl:w-[600px] max-xl:w-[400px] max-md:w-[320px]"
                  type="text"
                  placeholder="Message..."
                  // value={val}
                  // onChange={handleChange}
                  rows="1"
                  ref={textAreaRef}
                  Firstname="Message"
                  id="Message"
                  value={formik.values.Message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Message && formik.errors.Message ? <div style={{ color: "red" }}>{formik.errors.Message}</div> : null}
              </div>
            </div>

            <div className="flex justify-center  py-[50px]">
              <button type="submit" className=" flex items-center text-white  bg-[#6b6b6b]">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Index;
