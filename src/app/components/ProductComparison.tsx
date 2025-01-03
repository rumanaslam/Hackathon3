import React from "react";
import Image from "next/image";

interface ProductDetails {
  category: string;
  details: string[];
}

interface ProductComparisonProps {
  products: {
    name: string;
    price: string;
    rating: string;
    image: string;
    details: ProductDetails[];
  }[];
}

const ProductComparison: React.FC<ProductComparisonProps> = ({ products }) => {
  return (
    <div className="container mx-auto p-4 flex">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-lg md:text-2xl font-semibold">Go to Product page for more Products</h1>
        <button className="mt-4 md:mt-0 bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded">
          Add A Product
        </button>
      </div>

      {/* Product Images and Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-4 shadow rounded-lg text-center bg-white">
<Image
  src={product.image}
  alt={product.name}
  width={300} // Replace with appropriate width for the image
  height={300} // Replace with appropriate height for the image
  className="mx-auto mb-4"
/>            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-yellow-500 font-medium">Rs. {product.price}</p>
            <p className="text-gray-600">{product.rating} ★</p>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto mt-8">
        <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Feature</th>
              {products.map((product, index) => (
                <th key={index} className="border p-2">{product.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products[0].details.map((detail, idx) => (
              <React.Fragment key={idx}>
                {/* Category Row */}
                <tr className="bg-gray-200">
                  <td colSpan={products.length + 1} className="border p-2 font-semibold">
                    {detail.category}
                  </td>
                </tr>
                {/* Feature Rows */}
                {detail.details.map((feature, featureIdx) => (
                  <tr key={featureIdx}>
                    <td className="border p-2">{feature}</td>
                    {products.map((product, prodIdx) => (
                      <td key={prodIdx} className="border p-2">
                        {product.details[idx].details[featureIdx]}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductComparison;
