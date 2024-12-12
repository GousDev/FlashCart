"use client";
import React from "react";

const ProductDetails = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://www.material-tailwind.com/image/product-4.png"
            alt="pink blazer"
            className="h-[36rem] object-contain"
          />
        </div>

        {/* Product Information */}
        <div>
          <h1 className="mb-4 text-black text-2xl md:text-3xl font-semibold">
            Premium Blazer
          </h1>
          <h2 className="text-black text-lg md:text-2xl font-medium">$1,490</h2>

          <p className="mt-4 text-sm md:text-base font-normal leading-[27px] text-gray-600">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others. We get backstabbed by friends. It becomes harder for us to
            give others a hand. We get our heart broken by people we love, even
            that we give them all we have. Then we lose family over time. What
            else could rust the heart more over time? Blackgold.
          </p>

          <div className="mt-6 flex flex-col md:flex-row items-center">
            <div>
              <button className="w-full md:w-52 p-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
