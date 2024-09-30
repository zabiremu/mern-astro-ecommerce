import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  return (
    <div>
      <section className="py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-bold text-black font-manrope max-xl:text-center">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
