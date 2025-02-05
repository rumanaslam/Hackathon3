"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu on outside click (for better UX)
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      if (menu && !menu.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md text-black">
        <div className="container mx-auto flex justify-between items-center p-5">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image src="/uio.png" alt="logo" width={50} height={32} />
              <span className="ml-2 text-3xl font-bold font-poppins">Furniro</span>
            </div>
          </Link>

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
            id="mobile-menu"
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
          <div className="hidden md:flex gap-6 items-center text-xl">
  <SignedOut>
    <SignInButton>
      <MdOutlineManageAccounts className="cursor-pointer" />
    </SignInButton>
  </SignedOut>
  
  <SignedIn>
    <UserButton />
  </SignedIn>

  <CiSearch className="cursor-pointer" />
  <Link href="/wishlist">
    <IoIosHeartEmpty className="cursor-pointer" />
  </Link>
  <button onClick={toggleCart} className="relative">
    <IoCartOutline className="cursor-pointer" />
    {isCartOpen && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        3
      </span>
    )}
  </button>
</div>

        </div>
      </header>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-30">
          <div className="w-80 bg-white h-full shadow-lg p-6 relative">
            <h2 className="text-lg font-semibold">Your Cart</h2>

            {/* Buttons */}
            <div className="mt-6 space-y-4">
              <Link href="/cart">
                <button className="w-full border rounded-full py-2 text-sm">
                  View Cart
                </button>
              </Link>
              <Link href="/checkout">
                <button className="w-full border rounded-full py-2 text-sm">
                  Checkout
                </button>
              </Link>
              <Link href="/comparison">
                <button className="w-full border rounded-full py-2 text-sm">
                  Compare
                </button>
              </Link>
            </div>

            {/* Close Button */}
            <button
              onClick={toggleCart}
              className="absolute top-6 right-4 text-gray-600 hover:text-red-500"
            >
              <Image src="/Group.png" alt="close" width={17} height={19} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
