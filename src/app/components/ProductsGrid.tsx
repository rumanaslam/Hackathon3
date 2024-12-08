import React from "react";
import ProductCard from "./ProductCard";
const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: "Rp 3.600.000",
    discount: "30%",
    image: "/u.png", // Replace with real paths
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Luxury big sofa",
    price: "Rp 2.500.000",
    
    image: "/k.png", // Replace with real paths
  },
  {
    id: 3,
    name: "Lolito",
    description: "Outdoor bar table and stool",
    price: "Rp 700.000",
    discount: "50%",
    discountPrice: "Rp 14.000.000",
    image: "/y.png", // Replace with real paths
  },

  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    isNew: true,
    image: "/i.png", // Replace with real paths
  },

  {
    id: 5,
    name: "Syltherine",
    description: "Outdoor bar table and stool",
    price: "Rp 2.500.000",
    discountPrice: "Rp 3.600.000",
    discount: "30%",
    image: "/u.png", // Replace with real paths
  },

  {
    id: 6,
    name: "Leviosa",
    description: "Outdoor bar table and stool",
    price: "Rp 2.500.000",
    image: "/k.png", // Replace with real paths
  },

  {
    id: 7,
    name: "Lolito",
    description: "Outdoor bar table and stool",
    price: "Rp 700.000",
    discount: "50%",
    discountPrice: "Rp 14.000.000",
    image: "/y.png", // Replace with real paths
  },

  {
    id: 8,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    isNew: true,
    image: "/i.png", // Replace with real paths
  },
  {
    id: 9,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: "Rp 3.600.000",
    discount: "30%",
    image: "/u.png", // Replace with real paths
  },
  {
    id: 10,
    name: "Leviosa",
    description: "Luxury big sofa",
    price: "Rp 2.500.000",
    
    image: "/k.png", // Replace with real paths
  },
  {
    id: 11,
    name: "Lolito",
    description: "Outdoor bar table and stool",
    price: "Rp 700.000",
    discount: "50%",
    discountPrice: "Rp 14.000.000",
    image: "/y.png", // Replace with real paths
  },

  {
    id: 12,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    isNew: true,
    image: "/i.png", // Replace with real paths
  },
  {
    id: 13,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: "Rp 3.600.000",
    discount: "30%",
    image: "/u.png", // Replace with real paths
  },
  {
    id: 14,
    name: "Leviosa",
    description: "Luxury big sofa",
    price: "Rp 2.500.000",
    
    image: "/k.png", // Replace with real paths
  },
  {
    id: 15,
    name: "Lolito",
    description: "Outdoor bar table and stool",
    price: "Rp 700.000",
    discount: "50%",
    discountPrice: "Rp 14.000.000",
    image: "/y.png", // Replace with real paths
  },

  {
    id: 16,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    isNew: true,
    image: "/i.png", // Replace with real paths
  },


  // Add more products
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;