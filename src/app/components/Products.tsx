import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  description: string
  price: string
  discountPrice?: string
  discount?: string
  image: string
  isNew?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: "Rp 3.600.000",
    discount: "30%",
    image: '/image 1.png',
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Luxury big sofa",
    price: "Rp 2.500.000",
    image: '/k.png',
  },
  {
    id: 3,
    name: "Lolito",
    description: "Outdoor bar table and stool",
    price: "Rp 700.000",
    discount: "50%",
    discountPrice: "Rp 14.000.000",
    image: '/image 3.png',
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    isNew: true,
    image: '/i.png',
  },
  {
    id: 5,
    name: 'Grifo',
    description: 'Night Lamp',
    price: 'Rs. 150,000',
    image: '/t.png',
  },
  {
    id: 6,
    name: 'Mugo',
    description: 'Small Mug',
    price: 'Rs. 150,000',
    isNew: true,
    image: '/iy.png',
  },
  {
    id: 7,
    name: 'Pingky',
    description: 'Cute bed set',
    price: 'Rs. 70,000',
    discount: "50%",
    discountPrice: "Rp 14.000.000",
    image: '/87.png',
  },
  {
    id: 8,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 'Rs. 50,000',
    isNew: true,
    image: '/image 8.png',
  },
]

const Products = () => {
  return (
    <div>
      <div className="w-full px-[1px] flex flex-col items-center justify-center">
        <div className="subText text-center">
          <h1 className="font-bold text-3xl text-[#333333] font-poppins">Our Products</h1>
        </div>

        {/* Products Grid */}
        <div className="imgArea grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-2">
          {products.map((product) => (
            <Link href="/shop" key={product.id}>
              <div className="imgItem relative flex flex-col cursor-pointer border border-gray-200 p-4 rounded-md shadow-sm hover:shadow-md">
                {/* Discount Badge */}
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                    {product.discount}
                  </span>
                )}
                
                {/* New Badge */}
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded">
                    New
                  </span>
                )}

                {/* Product Image */}
                <Image
                  src={product.image}
                  width={200}
                  height={200}
                  alt={product.name}
                  className="object-cover rounded-md"
                />
                
                {/* Product Details */}
                <h6 className="pt-4 text-center font-semibold">{product.name}</h6>
                <p className="text-center text-gray-500 text-sm">{product.description}</p>
                <div className="text-center mt-2 flex justify-center items-center space-x-2">
                  <span className="font-bold">{product.price}</span>
                  {product.discountPrice && (
                    <span className="text-sm text-gray-400 line-through">{product.discountPrice}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

          {/* Show More Button */}
          <div className="flex justify-center mt-8">
  <button
    className="w-[245px] h-[48px] bg-[#FFFFFF]  text-[#B88E2F] font-semibold text-lg rounded-md "
  >
    Show More
  </button>
</div>
      </div>
    </div>
  )
}

export default Products
