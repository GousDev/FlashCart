import React from "react";

const AddressList = ({ addresses }) => (
  <div className="grid gap-4">
    {addresses.map((address, index) => (
      <div key={index} className="p-4 border rounded shadow bg-gray-50">
        <h3 className="font-semibold">{address.name}</h3>
        <p>{address.addressLine}</p>
        <p>
          {address.city}, {address.state}, {address.postalCode}
        </p>
        <p>{address.phone}</p>
      </div>
    ))}
  </div>
);

export default AddressList;
