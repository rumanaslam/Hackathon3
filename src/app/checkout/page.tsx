import React from 'react';
import Image from 'next/image';

const BillingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Banner Section with Logo and Text */}
      <div className="relative">
        <Image
          src={"/Rectangle 1.png"}
          alt="contact"
          width={1440}
          height={316}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#000000] bg-opacity-40">
          {/* Logo */}
          <Image
            src="/uio.png"
            alt="Logo"
            width={77}
            height={77}
            className="mb-2"
          />
          <h1 className="text-5xl font-semibold font-poppins">Checkout</h1>
          <p className="text-sm mt-2">
            <span className="opacity-80 font-bold text-[#000000]">Home</span> &gt; <span>Checkout</span>
          </p>
        </div>
      </div>

      {/* Billing Section */}
      <div className="mb-10 ">
        <div className="max-w-5xl mx-auto bg-[#FFFFFF] rounded-lg shadow-lg p-8">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[1600px] p-8 ">
            {/* Billing Details */}
            <div>
              <h2 className="text-2xl font-bold mb-4 h-[54px] w-[245px] mt-10">Billing details</h2>
              <form className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div className='mt-2'>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#000000] ">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mt-6 block h-[75px] w-[211px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder=""
                    />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#000000]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-6 block h-[75px] w-[211px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className=''>
                  <label htmlFor="companyName" className="block text-sm font-medium text-[#000000]">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="mt-6 block w-[453px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder=""
                  />
                </div>

                {/* Country / Region */}
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-[#000000]">
                    Country / Region
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="mt-6 block w-[453px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                  </select>
                </div>

                {/* Address */}
                <div className='w-[454px] h-[121px]'>
                  <label htmlFor="streetAddress" className="block text-sm font-medium text-[#000000]">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    className="mt-6 block w-[453px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="town" className="block text-sm font-medium text-[#000000]">
                    Town / City
                  </label>
                  <input
                    type="text"
                    id="town"
                    name="town"
                    className="mt-8 block w-[453px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="province" className="block text-sm font-medium text-[#000000]">
                    Province
                  </label>
                  <select
                    id="province"
                    name="province"
                    className="mt-6 block w-[453px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="Western Province">Western Province</option>
                    <option value="Central Province">Central Province</option>
                    <option value="Southern Province">Southern Province</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-[#000000]">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className="mt-6 block w-[453px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="ZIP Code"
                  />
                </div>

                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-[#000000]">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className="mt-6 block w-[453px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="ZIP Code"
                  />
                </div>

                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-[#000000]">
                    Email address
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className="mt-6 block w-[453px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder=""
                  />
                </div>

                <div>
                <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className="mt-10 block w-[453px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder=""
                  />
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className='mt-10 pl-8 h-[789px]'>
             <div className='flex justify-between'>
              <h2 className="text-2xl font-bold mb-4">Product</h2>
              <h2 className="text-2xl font-bold mb-4">Subtotal</h2>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="flex justify-between text-sm">
                 <div className='flex'>
                 <p className='text-[#9F9F9F]'>Asgaard sofa</p>
                 <p className='ml-3'> x 1</p>
                 </div> 
                 <p>Rs. 250,000.00</p>
                </div>
                <div className="flex justify-between text-sm mt-8">
                  <p>Subtotal</p>
                  <p>Rs. 250,000.00</p>
                </div>
                <div className="flex justify-between text-lg font-semibold mt-8">
                  <p>Total</p>
                  <p className="text-[#B88E2F]">Rs. 250,000.00</p>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mt-6">
                <div className="space-y-4">
                  <div>
                    <input type="radio" id="bankTransfer" name="paymentMethod" className="mr-2" />
                    <label htmlFor="bankTransfer">Direct Bank Transfer</label>
                  </div>
                  <p className='text-[#9F9F9F] text-sm'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                  <div>
                    <input type="radio" id="bankTransfer" name="paymentMethod" className="mr-2 mt-2" />
                    <label htmlFor="bankTransfer">Direct Bank Transfer</label>
                  </div>
                  <div>
                    <input type="radio" id="bankTransfer" name="paymentMethod" className="mr-2 mt-2" />
                    <label htmlFor="bankTransfer">Cash On Delivery</label>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Your personal data will be used to support your experience throughout this website,
                  to manage access to your account, and for other purposes described in our{' '}
                  <a href="#" className="text-indigo-500 underline ">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                className="mt-10w-[318px] h-[64px] ml-10 bg-[#FFFFFF] text-[#000000] font-medium py-3 rounded-lg shadow border-b-4"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
