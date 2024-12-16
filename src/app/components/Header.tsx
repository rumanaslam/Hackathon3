"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="text-black body-font bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-5">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={"/uio.png"} alt="logo" width={50} height={32} />
            <span className="ml-1 text-3xl font-bold font-poppins">Furniro</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:gap-8 absolute md:static bg-white w-full md:w-auto top-16 left-0 md:top-auto md:left-auto z-20 p-4 md:p-0 shadow-md md:shadow-none`}
          >
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
              <li>
                <Link href="/" className="hover:text-gray-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-gray-600">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Icons */}
          <span className="hidden md:flex gap-6 items-center text-xl">
            <MdOutlineManageAccounts />
            <CiSearch />
            <Link href={"/asgard-sofa"}>
              <IoIosHeartEmpty />
            </Link>
            <button onClick={toggleCart}>
              <IoCartOutline />
            </button>
          </span>
        </div>
      </header>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-[90%] md:w-[417px] h-full bg-white shadow-lg z-30 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          <div className="space-y-4">
            {/* Example Cart Item */}
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src="/sog.png"
                  alt="Asgaard Sofa"
                  width={108}
                  height={105}
                  className="rounded-md"
                />
                <div>
                  <h3 className="text-sm mb-2">Asgaard Sofa</h3>
                  <div className="flex text-xs">
                    <p>1</p>
                    <p className="ml-3">x</p>
                    <p className="ml-3 text-[#B88E2F]">Rs. 250,000.00</p>
                  </div>
                </div>
              </div>
              <Image src="/cross.png" alt="cross" height={20} width={20} />
            </div>

            {/* Additional Cart Item */}
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src="/jkii.png"
                  alt="Casaliving Wood"
                  width={108}
                  height={105}
                  className="rounded-md"
                />
                <div>
                  <h3 className="text-sm mb-2">Casaliving Wood</h3>
                  <div className="flex text-xs">
                    <p>1</p>
                    <p className="ml-3">x</p>
                    <p className="ml-3 text-[#B88E2F]">Rs. 270,000.00</p>
                  </div>
                </div>
              </div>
              <Image src="/cross.png" alt="cross" height={20} width={20} />
            </div>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between items-center border-t pt-4">
            <p>Subtotal</p>
            <p className="font-semibold text-[#B88E2F]">Rs. 520,000.00</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-4">
            <Link href="/cart">
              <button className="w-full border rounded-full py-2 text-sm">
                Cart
              </button>
            </Link>
            <Link href="/checkout">
              <button className="w-full border rounded-full py-2 text-sm">
                Checkout
              </button>
            </Link>
          </div>

          {/* Close Button */}
          <button
            onClick={toggleCart}
            className="absolute top-6 right-4 text-gray-600 hover:text-red-500"
          >
            <Image src="/Group.png" alt="cut" width={16.63} height={19} />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
