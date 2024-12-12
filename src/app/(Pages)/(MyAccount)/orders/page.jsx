"use client";
import React from "react";

function MyOrders() {
  return (
    <div className="bg-white p-6">
      <div className="mb-8">
        <div className="border p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          {/* Static Order Information */}
          <div className="text-sm text-gray-500 mb-4">
            Order ID: 64b7f03c8a9dce0012b5c123
          </div>
          <div className="flex mb-6 border-b pb-6">
            {/* Static Product Information */}
            <img
              src="https://thumbs.dreamstime.com/z/flower-rose-closeup-white-background-d-render-imag-image-65244784.jpg"
              alt="Micro Backpack"
              className="w-24 h-24 object-cover rounded-lg mr-4"
            />
            <div className="flex-grow">
              <h2 className="text-xl font-bold text-black">Micro Backpack</h2>
              <p className="text-sm mb-2 text-gray-600">
                Are you a minimalist looking for a compact carry option? The
                Micro Backpack is the perfect size for your essential everyday
                carry items. Wear it like a backpack or carry it like a satchel
                for all-day use.
              </p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-black">$70.00</p>
                <p className="text-sm text-green-500">
                  Delivered on July 12, 2021
                </p>
              </div>
            </div>
          </div>

          {/* Add more products if needed */}
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
