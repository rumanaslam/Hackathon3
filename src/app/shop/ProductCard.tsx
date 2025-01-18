import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  discountPrice?: string;
  discount?: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden w-[220px] h-[301px] flex flex-col">
      {/* Fixed Size Image Container */}
      <div className="w-full h-[180px] relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover object-center"
        />
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
            -{product.discount}
          </div>
        )}
        {/* New Badge */}
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded z-10">
            New
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-bold truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 truncate">{product.description}</p>

        <div className="flex items-center space-x-2 mt-2">
          <span className="text-lg font-semibold">{product.price}</span>
          {product.discountPrice && (
            <span className="text-sm text-gray-400 line-through ml-2">
              {product.discountPrice}
            </span>
          )}
        </div>

        {/* Link to Product Details Page */}
        <Link href={`/products/${product._id}`} className="text-blue-500 hover:text-blue-700 mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
