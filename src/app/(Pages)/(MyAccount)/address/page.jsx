"use client";

import React, { useState } from "react";
import AddressForm from "../../../components/Address/AddressForm";
import AddressList from "../../../components/Address/AddressList";
import Image from "next/image";

const AddressPage = () => {
  const [addresses, setAddresses] = useState([]); // State for addresses
  const [isAdding, setIsAdding] = useState(false); // State to toggle form

  const addAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
    setIsAdding(false); // Hide form after adding address
  };

  return (
    <div className="p-6  ">
      <h1 className="text-2xl font-bold mb-4">Manage Your Addresses</h1>

      {/* Show List or Add Address */}
      {!isAdding ? (
        <div className="w-1/2 mx-auto flex flex-col gap-4 justify-center p-3">
          {/* Display saved addresses or a message */}
          {addresses.length > 0 ? (
            <AddressList addresses={addresses} />
          ) : (
            <div className="mx-auto">
              <Image
                src="/images/address.jpg"
                width={300}
                height={300}
                alt="Address Image ...."
                className=" mx-auto"
              />
              <p className="text-gray-600 mb-4">
                No saved addresses yet. Click the button below to add one.
              </p>
            </div>
          )}

          {/* "Add New Address" Button */}
          <button
            onClick={() => setIsAdding(true)}
            className="bg-emerald-400 text-white w-64 mx-auto px-4 py-2 rounded hover:bg-emerald-500"
          >
            Add New Address
          </button>
        </div>
      ) : (
        <AddressForm onAddAddress={addAddress} />
      )}
    </div>
  );
};

export default AddressPage;
