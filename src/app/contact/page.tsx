import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative">
        {/* Background Image */}
        <Image
          src="/Rectangle 1.png"
          alt="Banner"
          width={1440}
          height={316}
          className="w-full h-[316px] object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
          {/* Logo */}
          <Image
            src="/uio.png"
            alt="Logo"
            width={77}
            height={77}
            className="mb-2" // Adds spacing between logo and text
          />
          {/* Heading */}
          <h1 className="text-5xl font-semibold font-poppins text-[#000000]">Contact</h1>
          {/* Breadcrumb */}
          <p className="text-sm mt-2 text-[#000000]">
            <span className="opacity-80 font-bold text-[#000000]">Home</span> &gt; <span className="text-[#000000]">Contact</span>
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl w-full">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">Get In Touch With Us</h1>
            <p className="text-gray-600">
            For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Info */}
            <div className="flex-1 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="text-2xl text-yellow-600">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-600">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="text-2xl text-yellow-600">
                  <i className="fas fa-phone"></i>
                </span>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                  <p className="text-gray-600">Hotline: +(84) 456-6789</p>
                </div>
              </div>
              {/* Working Time */}
              <div className="flex items-start gap-4">
                <span className="text-2xl text-yellow-600">
                  <i className="fas fa-clock"></i>
                </span>
                <div>
                  <h3 className="font-semibold text-lg">Working Time</h3>
                  <p className="text-gray-600">Monday–Friday: 9:00 AM - 10:00 PM</p>
                  <p className="text-gray-600">Saturday–Sunday: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="johndoe@example.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject (Optional)"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Hi! I'd like to ask about..."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-150"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
