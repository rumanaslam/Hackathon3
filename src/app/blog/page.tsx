import React from 'react';
import Image from 'next/image';

interface Category {
  name: string;
  count: number;
}

interface Post {
  src: string;
  title: string;
}

const BlogPage: React.FC = () => {
  const categories: Category[] = [
    { name: 'Crafts', count: 2 },
    { name: 'Design', count: 8 },
    { name: 'Handmade', count: 7 },
    { name: 'Interior', count: 1 },
    { name: 'Wood', count: 6 },
  ];

  const posts: Post[] = [
    { src: '/1u.png', title: 'Going all-in with millennial design' },
    { src: '/2u.png', title: 'Exploring new ways of decorating' },
    { src: '/3u.png', title: 'Handmade pieces that took time to make' },
    { src: '/4u.png', title: 'Modern home in Milan' },
    { src: '/5u.png', title: 'Colorful office redesign' },
  ];

  return (
    <>
      {/* Banner Section with Text and Logo */}
      <div className="relative">
        <Image
          src="/Rectangle 1.png"
          alt="blog"
          width={1440}
          height={316}
          className="w-full h-auto"
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
          <h1 className="text-5xl font-semibold font-poppins">Blog</h1>
          <p className="text-sm mt-2">
            <span className="opacity-80 font-bold text-[#000000]">Blog</span> &gt; <span>Blog</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:h-[2210px] px-4 lg:px-0">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:ml-12">
          {/* Blog Post 1 */}
          <Image
            src="/Rectangle 68.png"
            alt="laptop-img"
            width={817}
            height={500}
            className="mt-8 lg:mt-28 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-2 mt-2">
            <Image src="/Vector.png" alt="user" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image src="/cal.png" alt="admin" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image src="/pu.png" alt="tag" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Going all-in with millennial design
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
          </p>
          <span className="border-b border-black text-sm">Read More</span>
          {/* Blog Post 2 */}
          <Image
            src="/draw.png"
            alt="draw"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-2 mt-2">
            <Image src="/Vector.png" alt="user" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image src="/cal.png" alt="admin" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image src="/pu.png" alt="tag" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Exploring new ways of decorating
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
          </p>
          <span className="border-b border-black text-sm">Read More</span>
          {/* Blog Post 3 */}
          <Image
            src="/tea.png"
            alt="books-img"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-2 mt-2">
            <Image src="/Vector.png" alt="user" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image src="/cal.png" alt="admin" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image src="/pu.png" alt="tag" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Handmade pieces that took time to make
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.  
          </p>
          <span className="border-b border-black text-sm">Read More</span>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 lg:mr-20 lg:ml-20 mt-10 lg:mt-28">
          {/* Search Bar */}
          <div className="flex items-center justify-between w-full lg:w-[311px] h-[58px] border px-4 border-[#9F9F9F] rounded-md ml-auto mb-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 text-sm text-gray-600 focus:outline-none"
            />
            <Image src="/search.png" alt="search" width={20} height={20} />
          </div>

          {/* Categories */}
          <h1 className="text-[20px] lg:text-[24px] font-semibold mt-10 text-right">Categories</h1>
          <div className="space-y-4 lg:space-y-6 text-right">
            {categories.map((category) => (
              <div key={category.name} className="flex justify-between text-sm lg:text-base">
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <h1 className="text-[24px] font-semibold mb-8 text-right">Recent Posts</h1>
          {posts.map((post, index) => (
            <div key={index} className="flex items-center justify-end gap-8 mb-6">
              <Image src={post.src} alt={`post${index + 1}`} width={80} height={80} />
              <div className="flex flex-col">
                <h1 className="font-semibold text-[14px] w-[119px]">{post.title}</h1>
                <span className="text-[#9F9F9F]">03 Aug 2022</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 lg:gap-8 mt-10 lg:mt-14 ">
        {['1', '2', '3', 'Next'].map((item) => (
          <div
            key={item}
            className={`w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center justify-center ${item === '1' ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7]'}`}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPage;
