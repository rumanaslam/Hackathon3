"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface WishItem extends Product {
  quantity: number;
}

interface AddToWishProps {
  product: Product;
}

const AddToList: React.FC<AddToWishProps> = ({ product }) => {
  const [quantity] = useState<number>(1);

  const handleAddToWishlist = () => {
    const wishlist: WishItem[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const existingProductIndex = wishlist.findIndex((item: WishItem) => item.id === product.id);

    if (existingProductIndex !== -1) {
      wishlist[existingProductIndex].quantity += quantity;
    } else {
      wishlist.push({ ...product, quantity });
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Product added to wishlist!");
  };

  return (
    <div>
      <button
        onClick={handleAddToWishlist}
        className="hover:text-black flex items-center"
      >
        <FaHeart />
        Like
      </button>
    </div>
  );
};

export default AddToList;
