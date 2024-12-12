"use client";

import { use, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Account from "./DropDown";
import Login from "./Login";

const Header = ({ onLoginClick }) => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <header className="  flex p-4 border-2 items-center  justify-center bg-teal-100 flex-wrap">
      {/* {openLogin && <Login setOpenLogin={setOpenLogin} />} */}
      <div className="w-1/4">
        <h1 className="text-5xl">FlashCart</h1>
      </div>
      <div className="w-4/12 flex items-center rounded-lg hover:outline bg-teal-50">
        <FaSearch className="mr-2 text-xl ml-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-100 p-2 rounded-lg outline-none hover:focus bg-transparent"
        />
      </div>
      <div className="w-2/5 flex justify-end items-center gap-9">
        <div>
          {isLogin ? (
            <div className="text-xl flex items-center">
              <Account />
            </div>
          ) : (
            <button
              className="text-xl flex items-center gap-1 bg-emerald-400 px-3 py-2 rounded-lg"
              onClick={onLoginClick}
            >
              Login
              <IoIosArrowRoundForward />
            </button>
          )}
        </div>
        <div className="mr-4 flex items-center">
          <button
            className="flex items-center gap-2 text-lg font-bold rounded-full bg-yellow-300 w-100 p-2 px-3 pr-4"
            onClick={() => setOpen(true)}
          >
            <HiOutlineShoppingCart />
            Cart
          </button>
        </div>
      </div>

      {/* ##### Cart Dailog Box #####  */}

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        {/* Backdrop with transition */}
        <TransitionChild
          enter="transition-opacity duration-500 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
        </TransitionChild>

        {/* Sliding Dialog Panel */}
        <div className="fixed inset-0 overflow-hidden flex justify-end">
          <TransitionChild
            enter="transform transition-transform duration-500 ease-in-out"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition-transform duration-300 ease-in-out"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="relative w-screen max-w-md bg-white shadow-xl">
              {/* Close Button at Top Right */}
              <div className="absolute top-6 right-8">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <span className="sr-only">Close panel</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Dialog Content */}
              <div className="flex h-full flex-col overflow-y-scroll py-6">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold text-gray-900">
                    Cart Details
                  </DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {/* Add cart details or content here */}
                  <p>Your cart is currently empty!</p>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </header>
  );
};

export default Header;
