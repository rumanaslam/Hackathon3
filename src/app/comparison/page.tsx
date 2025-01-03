// components/ProductComparison.tsx
import React from "react";
import Image from "next/image";

const ProductComparison: React.FC = () => {
  return (
    <div className="p-6 bg-white">
      {/* Top Section */}
      <div className="flex justify-between items-start mb-6">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-bold text-black">Go to Product page for more Products</h2>
          <a
            href="#"
            className="text-blue-500 hover:underline text-sm mt-2 inline-block"
          >
            View More
          </a>
        </div>
        {/* Add Product Section */}
        <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg shadow">
          Choose a Product
        </button>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {/* Product 1 */}
        <div className="p-4 bg-[#f9f4ee] rounded-md shadow-md">
        <Image
  src="/sofa1.jpg"
  alt="Asgaard Sofa"
  width={500} // Replace with the actual width of your image
  height={160} // Replace with the actual height of your image
  className="w-full h-40 object-cover rounded-md mb-4"
/>
          <h3 className="text-lg font-bold">Asgaard Sofa</h3>
          <p className="text-gray-600 text-sm">Rs. 250,000.00</p>
          <p className="text-yellow-500 text-sm">
            4.7 ⭐ | 204 Reviews
          </p>
        </div>
        {/* Product 2 */}
        <div className="p-4 bg-[#f9f4ee] rounded-md shadow-md">
        

<Image
  src="/sofa2.jpg"
  alt="Outdoor Sofa Set"
  width={300} // Replace with appropriate width
  height={160} // Replace with appropriate height
  className="object-cover rounded-md mb-4"
/>

          <h3 className="text-lg font-bold">Outdoor Sofa Set</h3>
          <p className="text-gray-600 text-sm">Rs. 224,000.00</p>
          <p className="text-yellow-500 text-sm">
            4.2 ⭐ | 145 Reviews
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left text-sm text-gray-600">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">General</th>
              <th className="py-2 px-4">Asgaard Sofa</th>
              <th className="py-2 px-4">Outdoor Sofa Set</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Sales Package</td>
              <td className="py-2 px-4">1 sectional sofa</td>
              <td className="py-2 px-4">1 Three Seater, 2 Single Seater</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Model Number</td>
              <td className="py-2 px-4">TFCBLGRBL6SRHS</td>
              <td className="py-2 px-4">DTUBLGRBL568</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Secondary Material</td>
              <td className="py-2 px-4">Solid Wood</td>
              <td className="py-2 px-4">Solid Wood</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Configuration</td>
              <td className="py-2 px-4">L-shaped</td>
              <td className="py-2 px-4">L-shaped</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Upholstery Material</td>
              <td className="py-2 px-4">Fabric + Cotton</td>
              <td className="py-2 px-4">Fabric + Cotton</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Upholstery Color</td>
              <td className="py-2 px-4">Bright Grey & Lion</td>
              <td className="py-2 px-4">Bright Grey & Lion</td>
            </tr>
          </tbody>
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4">Asgaard Sofa</th>
              <th className="py-2 px-4">Outdoor Sofa Set</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Filling Material</td>
              <td className="py-2 px-4">Foam</td>
              <td className="py-2 px-4">Matte</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Finish Type</td>
              <td className="py-2 px-4">Bright Grey & Lion</td>
              <td className="py-2 px-4">Bright Grey & Lion</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Adjustable Headrest</td>
              <td className="py-2 px-4">No</td>
              <td className="py-2 px-4">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductComparison;
