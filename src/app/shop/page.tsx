"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import client from "@/sanity/lib/client";
import { GoArrowSwitch } from "react-icons/go";
import { IoShareSocialSharp } from "react-icons/io5";

import FeaturesSection from "../components/Services";
import FilterBar from "./FilterBar";
import AddToList from "../components/Addtowishlist";

const formatPrice = (price: number) => {
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

const Shop = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] {
          _id,
          title,
          "productImage": productImage.asset->url,
          price,
          tags,
          discountPercentage,
          isNew
        }`;
        const data = await client.fetch(query);
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div className="relative">
        <Image
          src={"/Rectangle 1.png"}
          alt="contact"
          width={1440}
          height={316}
          className="w-full h-[316px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#000000] bg-opacity-40">
          <Image src="/uio.png" alt="Logo" width={77} height={77} className="mb-2" />
          <h1 className="text-5xl font-semibold font-poppins">Shop</h1>
          <p className="text-sm mt-2">
            <span className="opacity-80 font-bold text-[#000000]">Home</span> &gt; <span>Shop</span>
          </p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <FilterBar products={products} setFilteredProducts={setFilteredProducts} />

      {/* Product Grid */}
      <div className="px-6 sm:px-12 mt-8 lg:px-24 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div
              key={product._id}
              className="relative bg-white border p-4 group hover:bg-gray-300 transition-colors mx-auto w-full max-w-[270px] h-auto overflow-hidden"
            >
              {/* Discount or New Tag */}
              {(product.discountPercentage || product.isNew) && (
                <div
                  className={`absolute top-2 right-2 px-2 py-1 text-white text-sm font-bold rounded-full ${
                    product.discountPercentage ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {product.discountPercentage ? `${product.discountPercentage}% OFF` : "NEW"}
                </div>
              )}

              {/* Product Image */}
              <Image
                src={product.productImage || "/placeholder-image.jpg"}
                alt={product.title}
                width={301}
                height={301}
                className="w-full h-[301px] object-cover mb-4"
              />

              {/* Product Info */}
              <h2 className="text-xl text-[#3A3A3A] font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 text-sm line-clamp-1 mb-2">
                {product.tags?.join(", ")}
              </p>
              <div className="text-sm font-medium mb-4">
                <span className="text-[#3A3A3A] font-semibold">
                  Rs. {formatPrice(product.price)}
                </span>
              </div>

              {/* Hover Options */}
                
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-transform duration-200 ease-in-out">
                   <Link href={`/shop/${product._id}`}>
                    <h1
                      
                      className="bg-white text-yellow-600 font-bold py-2 px-4 rounded shadow mb-2 hover:shadow-lg hover:bg-graay transition-shadow"
                    >
                      View Detail
                    </h1>
                    </Link>
                    <div className="flex justify-center space-x-2 text-white text-sm mt-2">
                      <button className="hover:text-black flex items-center">
                        <IoShareSocialSharp /> Share
                      </button>
                      <Link href={"/product-comparision"}>
                        <button className="hover:text-black flex items-center">
                          <GoArrowSwitch /> Compare
                        </button>
                      </Link>
                      <AddToList
                        product={{
                          id: product._id,
                          title: product.title,
                          price: product.price,
                          image: product.productImage,
                        }}
                      />
                    </div>
                  </div>
                
              </div>
            ))
          ) : (
            <h1 className="text-center text-red-600 items-center text-xl">
              Products not found
            </h1>
          )}
        </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center space-x-4 mt-10 p-10">
        <button
          className="px-4 py-2 bg-[#F9F1E7] rounded-md hover:bg-[#B88E2F]"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7] hover:bg-[#B88E2F]"}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-6 py-3 bg-[#F9F1E7] rounded-md hover:bg-[#B88E2F] "
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

      <FeaturesSection />
    </div>
  );
};

export default Shop;
