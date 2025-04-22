import React from "react";
import PageTransition from "../components/PageTransition";
import img1 from "../assets/about/1.jpg";

const Contact = () => {
  return (
    <PageTransition>
      <div className="h-[60vh] overflow-hidden relative">
        <img src={img1} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-playfair text-[30px] md:text-[60px] lg:text-[80px]">
          Contact Us
        </div>
      </div>

      <div className="contact-container grid grid-cols-12 px-[30px] py-[50px] md:px-[50px] md:py-[80px] lg:p-[200px]">
        <div className="col-span-12 md:col-span-4 space-y-[20px] lg:space-y-[40px]">
          <h3 className="text-dark text-center md:text-start text-[30px] lg:text-[38px] font-playfair tracking-wider leading-none">
            Contact Detail
          </h3>
          <p className="text-dark font-roboto text-[14px] lg:text-[16px] tracking-wide text-center md:text-start">
            Feel free to use the form or drop us an email,
            <br className="hidden lg:block" /> Old-fashioned phone calls work
            too.
          </p>
          <div className="contact-info text-center md:text-start space-y-[10px] md:space-y-[16px] text-gray font-roboto text-[14px] lg:text-[18px] tracking-wide">
            <p>039 8185 925</p>
            <p>thongduy0512@gmail.com</p>
            <p>
              117 Tran Van Tra, Hoa Vang <br />
              Hoa Chau, Da Nang
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 md:pl-[60px] lg:pl-[180px] pt-[50px] md:pt-0">
          <div className="grid grid-cols-12 space-y-[40px]">
            <div className="col-span-12 space-y-[40px]">
              <div className="grid grid-cols-2 gap-[20px] md:gap-[40px]">
                <input
                  className="section6-input col-span-2 md:col-span-1"
                  placeholder="Name"
                />
                <input
                  className="section6-input col-span-2 md:col-span-1"
                  placeholder="Email Adrress"
                />
              </div>

              <div className="grid grid-cols-2 gap-[20px] md:gap-[40px]">
                <input
                  className="section6-input col-span-2 md:col-span-1"
                  placeholder="Phone"
                />
                <input
                  className="section6-input col-span-2 md:col-span-1"
                  placeholder="Subject"
                />
              </div>

              <textarea
                id="message"
                className="section6-input"
                placeholder="How can we help you? Feel free to get in touch!"
              ></textarea>

              <div className="w-full flex items-center flex-col justify-center space-y-[20px] lg:flex-row lg:justify-between lg:space-y-0">
                <div className="space-x-[10px] flex">
                  <input type="checkbox" name="agree" />
                  <p className="text-gray text-[8px] md:text-[14px] lg:text-[16px] font-roboto">
                    I agree that my data is{" "}
                    <span className="underline underline-offset-4 cursor-pointer">
                      collected and stored
                    </span>
                    .
                  </p>
                </div>
                <button className="bg-red font-roboto font-600 uppercase px-[16px] md:px-[30px] py-[6px] md:py-[16px] text-white tracking-wide shadow-lg hover:bg-opacity-80 transition">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
