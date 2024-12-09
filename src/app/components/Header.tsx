import React from 'react'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="text-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
          <Image src={"/uio.png"} alt='logo' width={50} height={32} />
          <span className="ml-1 text-3xl font-bold font-poppins">Furniro</span>
        </a>
        
        <nav className="flex justify-center md:ml-auto md:mr-auto gap-8 font-semibold">
          <ul className="head flex gap-8">
            <li>
              <Link href="/" className="mr-8">Home</Link>
            </li>
            <li>
              <Link href="/shop" className="mr-8">Shop</Link>
            </li>
            <li>
              <Link href="/blog" className="mr-8">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="mr-8">Contact</Link>
            </li>
          </ul>
        </nav>
        
        <span className='flex gap-6 items-center text-xl'>
          <MdOutlineManageAccounts />
          <CiSearch />
          <Link href={"/asgard-sofa"}> <IoIosHeartEmpty /> </Link>
          
          <IoCartOutline />
        </span>
      </div>
    </header>
  )
}

export default Header
