import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex border-2 bg-yellow-50">
      <div className="flex flex-col w-1/2  p-3 pl-6 ">
        <h1 className="text-3xl font-bold">FlashCart</h1>
        <p className="font-light">
          &copy; {new Date().getFullYear()} Quick Delivery App. All rights
          reserved.
        </p>
      </div>
      <div className="w-1/2 p-3 flex gap-6 text-3xl justify-end items-center pr-6">
        <FaInstagram />
        <FaFacebook />
        <FaTwitter />
        <FaLinkedinIn />
        <FaThreads />
      </div>
    </div>
  );
};

export default Footer;
