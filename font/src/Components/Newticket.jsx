import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Newticket = () => {
  const [verify, verified] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    verified(true);
  }
  return (
    <>
      <p className="font-sanchez text-center text-[36px] my-[26px]">
        Create New Ticket
      </p>
      <form action="/submit" method="post" className="px-[71px]">
        <div className="flex flex-wrap justify-between">
          <div className="flex w-[450px] 2xl:w-[600px] justify-between mt-[20px]">
            <label
              htmlFor="TicketNo"
              className="text-[24px] font-normal font-sanchez"
            >
              Ticket No.
            </label>
            <input
              required
              type="text"
              name="TicketNo"
              id="TicketNo"
              className="h-[43px] w-[298px] 2xl:w-[450px] bg-[#D9D9D9] outline-none text-[24px] px-[12px] font-sanchez border-[1px] border-[#00000003] rounded-[10px] shadow-custom1"
            />
          </div>
          <div className="flex w-[450px] 2xl:w-[600px] justify-between mt-[20px]">
            <label
              htmlFor="Date"
              className="text-[24px] font-normal font-sanchez"
            >
              Date:
            </label>
            <input
              required
              type="text"
              name="Date"
              id="Date"
              className="h-[43px] w-[298px] 2xl:w-[450px] bg-[#D9D9D9] outline-none text-[24px] px-[12px] font-sanchez border-[1px] border-[#00000003] rounded-[10px] shadow-custom1"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between">
          <div className="flex w-[450px] 2xl:w-[600px] justify-between mt-[20px]">
            <label
              htmlFor="Name"
              className="text-[24px] font-normal font-sanchez"
            >
              Name:
            </label>
            <input
              required
              type="text"
              name="Name"
              id="Name"
              className="h-[43px] w-[298px] 2xl:w-[450px] bg-[#D9D9D9] outline-none text-[24px] px-[12px] font-sanchez border-[1px] border-[#00000003] rounded-[10px] shadow-custom1"
            />
          </div>
          <div className="flex w-[450px] 2xl:w-[600px] justify-between mt-[20px]">
            <label
              htmlFor="Department"
              className="text-[24px] font-normal font-sanchez"
            >
              Department:
            </label>
            <input
              required
              type="text"
              name="Department"
              id="Department"
              className="h-[43px] w-[298px] 2xl:w-[450px] bg-[#D9D9D9] outline-none text-[24px] px-[12px] font-sanchez border-[1px] border-[#00000003] rounded-[10px] shadow-custom1"
            />
          </div>
        </div>
        <div className="mt-[20px]">
          <label
            htmlFor="Subject"
            className="text-[24px] font-normal font-sanchez"
          >
            Subject:
          </label>
          <input
            required
            type="text"
            name="Subject"
            id="Subject"
            className="h-[43px] mt-[20px] w-full bg-[#D9D9D9] outline-none text-[24px] px-[12px] font-sanchez border-[1px] border-[#00000003] rounded-[10px] shadow-custom1"
          />
        </div>
        <div className="flex mt-[20px] justify-between">
          <div className="flex flex-col">
            <label
              htmlFor="Category"
              className="text-[24px] font-normal font-sanchez"
            >
              Category:
            </label>
            <input
              required
              type="text"
              name="Category"
              id="Category"
              className="h-[43px] mt-[15px] w-[400px] 2xl:w-[600px] bg-[#D9D9D9] outline-none text-[24px] px-[12px] font-sanchez border-[1px] border-[#00000003] rounded-[10px] shadow-custom1"
            />

            <label
              htmlFor="Type"
              className="text-[24px] font-normal font-sanchez"
            >
              Type:
            </label>
            <input
              required
              type="text"
              name="Type"
              id="Type"
              className="h-[43px] mt-[15px] w-[400px] 2xl:w-[600px] bg-[#D9D9D9] outline-none text-[24px] px-[12px] font-sanchez border-[1px] border-[#00000003] rounded-[10px] shadow-custom1"
            />

            <label
              htmlFor="Priority"
              className="text-[24px] font-normal font-sanchez"
            >
              Priority:
            </label>
            <input
              required
              type="text"
              name="Priority"
              id="Priority"
              className="h-[43px] mt-[15px] w-[400px] 2xl:w-[600px] bg-[#D9D9D9] outline-none text-[24px] px-[12px] font-sanchez border-[1px] border-[#00000003] rounded-[10px] shadow-custom1"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[24px] font-normal font-sanchez"
              htmlFor="Description"
            >
              Description:
            </label>
            <textarea
              name="Description"
              id="Description"
              required
              className=" mt-[15px] w-[560px] 2xl:w-[800px] h-full bg-[#D9D9D9] resize-none outline-none text-[24px] p-[12px] font-sanchez border-[1px] border-[#00000003] rounded-[10px] shadow-custom1"
            ></textarea>
            <div className="absolute w-[70px] 2xl:w-[70px] h-[70px] mt-[200px] ml-[470px] 2xl:ml-[717px] flex justify-end items-end ">
              <label
                htmlFor="DescriptionFile"
                className="mt-[15px] cursor-pointer flex items-center justify-center h-[50px] w-[50px] bg-[#55D6C2] rounded-[10px] text-white"
              >
                <i className="fas fa-paperclip"></i>
              </label>
              <input
                type="file"
                id="DescriptionFile"
                name="DescriptionFile"
                className="hidden"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-[20px]">
          <ReCAPTCHA
            sitekey="6LcnWpgqAAAAAEObpCwX_1m6zr5UQ_Y_FCZT60NL"
            onChange={onChange}
          />
          {
            verify?(
              <input
                type="submit"
                value="Submit"
                className="cursor-pointer w-[297px] h-[57px] bg-[#55D6C2] text-center font-sanchez text-[24px] font-normal rounded-[10px]"
              ></input>
            ):(
              <input
                type="submit"
                value="Submit"
                disabled
                className="w-[297px] h-[57px] bg-[#a7eae0] text-center font-sanchez text-[24px] font-normal rounded-[10px]"
              ></input>
            )
          }
        </div>
      </form>
    </>
  );
};

export default Newticket;
