"use client";
import React, { useEffect, useState } from 'react';
import client from '@/sanity/lib/client';
import ProductCard from './ProductCard';

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

const ProductsGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data: Product[] = await client.fetch(`*[_type == "product"]{
        _id,
        name,
        description,
        price,
        "imageUrl": productImage.asset->url,
        discountPrice,
        discount,
        isNew
      }`);
      console.log(data); // Debugging
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
