import React from "react";
import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#E4E1DF] md:px-8 lg:px-16">
      <div className="lg:flex items-end py-16">
        <h1 className="lg:text-9xl text-7xl text-center md:text-9xl lg:text-left font-header md:font-bold w-full">radisson</h1>
        <p className="w-full hidden md:justify-center lg:flex md:flex items-center gap-2 uppercase">
          <div>
            <span className="font-bold">Lorem</span>ipsum
          </div>
          <div>
            <span className="font-bold">dolor</span>sitamet
          </div>
          <div>
            <span className="font-bold text-lg">consectetur</span>
            <span className="text-lg"> | adipisicing </span>
          </div>
          <div className="font-bold border-b-4 text-sm border-neutral">
            quibusdam
          </div>
        </p>
      </div>
      <div className="py-10 md:flex md:justify-around lg:flex w-full lg:justify-between lg:max-w-2xl">
        <div className="flex flex-col gap-1 text-center lg:text-left">
          <MdEmail className="text-4xl mx-auto lg:mx-0" />
          <h1 className="text-4xl font-medium">EMAIL</h1>
          <h1>Get In Touch</h1>
          <h1>hello@radisson.re</h1>
        </div>
        <div className="flex flex-col gap-1 text-center lg:text-left">
          <MdLocalPhone className="text-4xl mx-auto lg:mx-0" />
          <h1 className="text-4xl font-medium">PHONE</h1>
          <h1>Call or text</h1>
          <h1>+1 (234) 567-8900</h1>
        </div>
        <div className="flex flex-col gap-1 text-center lg:text-left">
          <MdLocationOn className="text-4xl mx-auto lg:mx-0" />
          <h1 className="text-4xl font-medium">OFFICE</h1>
          <h1>1801 Lorem St, Ipsum</h1>
          <h1>Dolor P5H 4Y8</h1>
        </div>
      </div>
      <div className="flex lg:justify-end justify-center pb-8 gap-6">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
      <div className="flex border-t pt-10 pb-14 border-neutral md:justify-between lg:justify-between">
        <p className="text-center">Copyright © 2022 - All right reserved by Radisson Resort Ltd</p>
        <p className="hidden lg:block md:block">Credits</p>
      </div>
    </div>
  );
};

export default Footer;
