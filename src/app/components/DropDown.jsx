import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaUser, FaShoppingBag, FaRegAddressBook } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import Link from "next/link";

const Account = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-lg font-semibold  shadow-sm    ">
          Account
          <ChevronDownIcon aria-hidden="true" className="mt-1 size-5 " />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in "
      >
        <div className="py-2 hover:bg-gray-100">
          <MenuItem>
            <div>
              <Link
                href="/profile"
                className="block flex px-4 py-2 text-md text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none  gap-3"
              >
                <FaUser className="-ml-2 mt-2 text-gray-600" />
                MyAccount
              </Link>
              <p className="text-sm text-gray-600 -mt-2 ml-10">8928065925</p>
            </div>
          </MenuItem>
        </div>

        <div className="py-2">
          <MenuItem>
            <div className="flex items-center hover:bg-gray-100">
              <FaShoppingBag className="ml-2 text-gray-600" />
              <Link
                href="/orders"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none -ml-2"
              >
                Orders
              </Link>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex items-center hover:bg-gray-100">
              <FaRegAddressBook className="ml-2 text-gray-600" />
              <Link
                href="/address"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none -ml-2"
              >
                Saved Address
              </Link>
            </div>
          </MenuItem>
        </div>

        <div className="py-1">
          <MenuItem>
            <div className="flex items-center hover:bg-gray-100">
              <TbLogout className="ml-2 text-gray-600" />
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none -ml-2"
              >
                Logout
              </a>
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Account;
