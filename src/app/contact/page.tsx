import React from 'react';
import Image from 'next/image';

const ContactPage = () => {
    return (
        <div className='min-h-screen bg-gray-50 pb-8'>
            {/* Banner Section with Logo and Text */}
            <div className="relative">
                <Image
                    src={"/Rectangle 1.png"}
                    alt="contact"
                    width={1440}
                    height={316}
                    className="w-full h-[316px] object-cover"
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
                    <h1 className="text-5xl font-semibold font-poppins">Contact</h1>
                    <p className="text-sm mt-2">
                        <span className="opacity-80 font-bold text-[#000000]">Home</span> &gt; <span>Contact</span>
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center mt-10 px-4 lg:mt-20">
                <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold text-center">
                    Get In Touch With Us
                </h1>
                <p className="text-[14px] sm:text-[16px] text-[#9F9F9F] mt-4 text-center max-w-[90%] lg:max-w-[644px]">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
                    Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between mt-12 px-4 lg:px-16 gap-10">
                {/* Contact Information */}
                <div className="flex flex-col gap-8 lg:w-1/2">
                    {[{
                            img: "/loc.png",
                            title: "Address",
                            desc: "236 5th SE Avenue, New York NY10000, United States",
                        },
                        {
                            img: "/loc2.png",
                            title: "Phone",
                            desc: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789",
                        },
                        {
                            img: "/loc3.png",
                            title: "Working Time",
                            desc: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00",
                        },
                    ].map((info, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <Image src={info.img} alt={`${info.title}-icon`} width={22} height={28} />
                            <div>
                                <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">{info.title}</h2>
                                <p className="text-[14px] sm:text-[16px] text-gray-700 whitespace-pre-line">
                                    {info.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="flex flex-col lg:w-1/2 gap-6">
                    {[{ label: "Your Name", placeholder: "Abc" },
                        { label: "Email Address", placeholder: "Abc@def.com" },
                        { label: "Subject", placeholder: "This is an optional" },
                    ].map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <label className="text-[16px] font-semibold mb-2">{field.label}</label>
                            <input
                                type="text"
                                placeholder={field.placeholder}
                                className="border border-gray-300 rounded-md px-4 py-3 w-full text-[16px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
                            />
                        </div>
                    ))}

                    {/* Message Field with Multiline Support */}
                    <div className="flex flex-col">
                        <label className="text-[16px] font-semibold mb-2">Message</label>
                        <textarea
                            placeholder="Hi! I’d like to ask about..."
                            className="border border-gray-300 rounded-md px-4 py-3 w-full text-[16px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none h-[120px]"
                        />
                    </div>

                    <button className="w-full lg:w-[237px] h-[55px] bg-[#B88E2F] text-white rounded-md mt-4 flex items-center justify-center text-[16px] font-semibold">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
