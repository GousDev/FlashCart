import React, { useState } from "react";
import { connectDb } from "../../lib/db/connectDb";

const AddressForm = ({ onAddAddress }) => {
  const [address, setAddress] = useState({
    name: "",
    addressLine: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAddress(address); // Send new address to parent
    setAddress({
      name: "",
      addressLine: "",
      city: "",
      state: "",
      postalCode: "",
      phone: "",
    });
  };

  return (
    <div className="w-1/2 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow bg-gray-50"
      >
        <h2 className="text-lg font-bold mb-4">Add New Address</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={address.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-400"
            required
          />
        </div>
        <div className="mb-4 gap-4">
          <label className="block text-gray-700">Address Line</label>
          <input
            type="text"
            name="addressLine"
            value={address.addressLine}
            onChange={handleChange}
            placeholder="Enter your address"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-400"
            required
          />
        </div>
        <div className="mb-4 flex gap-4 ">
          <div className="w-1/2">
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              placeholder="State"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
        </div>
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label className="block text-gray-700">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={address.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <div className="w-1/2 gap-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={address.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-400 text-white py-2 rounded hover:bg-emerald-500"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
