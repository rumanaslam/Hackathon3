// pages/cart.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Services from "../components/Services";


const CartPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     {/* Banner Section with Text and Logo */}
           <div className="relative">
             <Image
               src="/Rectangle 1.png"
               alt="blog"
               width={1440}
               height={316}
               className="w-full h-[316px] object-cover"
             />
             {/* Overlay with logo and text */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-[#000000] bg-opacity-40">
               {/* Logo */}
               <Image
                 src="/uio.png"
                 alt="Logo"
                 width={77}
                 height={77}
                 className="mb-2" // Adds spacing between logo and text
               />
               <h1 className="text-5xl font-semibold font-poppins">Cart</h1>
               <p className="text-sm mt-2">
                 <span className="opacity-80 font-bold text-[#000000]">Home</span> &gt; <span>Cart</span>
               </p>
             </div>
           </div>
     

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-4 md:px-6 lg:px-8 w-[817 px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items Table */}
          <div className="lg:col-span-2">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9F1E7]">
                  <th className="p-4 font-medium pl-40 ">Product</th>
                  <th className="p-4 font-medium">Price</th>
                  <th className="p-4 font-medium">Quantity</th>
                  <th className="p-4 font-medium">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 flex items-center space-x-4">
                    <Image src="/Asgaard sofa 5.png" alt="Asgaard sofa" width={111} height={90} />
                    <span className="font-medium">Asgaard sofa</span>
                  </td>
                  <td className="p-4">Rs. 250,000.00</td>
                  <td className="p-4">
                    <input
                      type="number"
                      className="w-12 border rounded px-2 py-1 text-center focus:outline-none"
                      defaultValue={1}
                    />
                  </td>
                  <td className="p-4">Rs. 250,000.00</td>
                  <td className="p-4"><Image src="/Vector (8).png" alt="delete" height={21} width={21} /></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="bg-[#F9F1E7] shadow-lg rounded-lg p-6 w-[393px] h-[390px]">
            <h2 className="text-2xl text-center items-center font-bold mb-8 pb-8 ">Cart Totals</h2>
            <div className="flex justify-between pb-6">
              <span className="font-medium">Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-medium mt-4 pb-8">
              <span>Total</span>
              <span className='text-[#B88E25]'>Rs. 250,000.00</span>
            </div>
            <Link href="/checkout">
      <button className="w-full border-r-4 outline text-[#000000] font-medium py-3 mt-6 rounded">
        Check Out
      </button>
    </Link>

          </div>
        </div>
      </main>
      <Services/>
    </div>
  );
};

export default CartPage;
